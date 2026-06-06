"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import capacities, { tierLabels, tierColors, archetypes, buildEdges, getTierCount, branchColors, branchLabels } from "@/lib/capacity-map";
import Link from "next/link";

const STORAGE_KEY = "umbra-capacity-map";

export default function CapacityMap() {
  const [allocated, setAllocated] = useState({});
  const [selectedNode, setSelectedNode] = useState(null);
  const [activeArchetype, setActiveArchetype] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [zoom, setZoom] = useState(0.85);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [panOrigin, setPanOrigin] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [tooltipNode, setTooltipNode] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setAllocated(JSON.parse(saved));
    } catch {}
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allocated));
  }, [allocated]);

  const total = capacities.length;
  const counts = useMemo(() => getTierCount(allocated), [allocated]);
  const edges = useMemo(() => buildEdges(capacities), []);

  const reachableIds = useMemo(() => {
    return capacities.filter(c => {
      if (allocated[c.id] && allocated[c.id] >= 1) return false;
      if (!c.prereqs || c.prereqs.length === 0) return true;
      return c.prereqs.every(preId => (allocated[preId] || 0) >= 3);
    }).map(c => c.id);
  }, [allocated]);

  // Search matches
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    const matches = capacities.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.desc.toLowerCase().includes(q) ||
      c.short.toLowerCase().includes(q) ||
      c.branch.toLowerCase().includes(q)
    ).map(c => c.id);
    return new Set(matches);
  }, [searchQuery]);

  const handleNodeClick = (id) => {
    setAllocated(prev => {
      const current = prev[id] || 0;
      return { ...prev, [id]: current >= 4 ? 0 : current + 1 };
    });
  };

  // FIXED: Resets and reallocates from scratch
  const applyArchetype = (key) => {
    if (activeArchetype === key) {
      // Toggle off
      setAllocated({});
      setActiveArchetype(null);
      return;
    }
    const arch = archetypes[key];
    if (!arch) return;
    const next = {};
    arch.recommendedPath.forEach((id) => { next[id] = 1; });
    setAllocated(next);
    setActiveArchetype(key);
  };

  const resetMap = () => {
    setAllocated({});
    setActiveArchetype(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  // Zoom with wheel
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    setZoom(z => Math.max(0.35, Math.min(2.5, z + delta)));
  }, []);

  // Pan with drag
  const handleMouseDown = useCallback((e) => {
    if (e.target.closest("g") || e.target.closest("button")) return;
    setIsPanning(true);
    setPanStart({ x: e.clientX, y: e.clientY });
    setPanOrigin({ ...pan });
  }, [pan]);

  const handleMouseMove = useCallback((e) => {
    if (!isPanning) return;
    const dx = e.clientX - panStart.x;
    const dy = e.clientY - panStart.y;
    setPan({ x: panOrigin.x + dx, y: panOrigin.y + dy });

    // Tooltip follow
    if (tooltipNode) {
      setTooltipPos({ x: e.clientX - 100, y: e.clientY - 140 });
    }
  }, [isPanning, panStart, panOrigin, tooltipNode]);

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  const svgW = 1000;
  const svgH = 780;

  const branchZones = [
    { key: "standing", x: 0, w: 190 },
    { key: "guard", x: 190, w: 260 },
    { key: "pinning", x: 450, w: 270 },
    { key: "turtle", x: 720, w: 150 },
    { key: "striking", x: 870, w: 130 },
  ];

  const completion = useMemo(() => {
    const tiers = { awareness: 0, response: 0, reliability: 0, transfer: 0 };
    Object.values(allocated).forEach(t => {
      if (t >= 1) tiers.awareness++;
      if (t >= 2) tiers.response++;
      if (t >= 3) tiers.reliability++;
      if (t >= 4) tiers.transfer++;
    });
    tiers.total = total;
    tiers.percentage = Math.round((tiers.reliability / total) * 100);
    return tiers;
  }, [allocated, total]);

  return (
    <div className="min-h-screen bg-void pt-28 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <header className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-phosphor-green"></div>
            <span className="font-clinical text-[10px] tracking-[0.4em] uppercase text-phosphor-green">v2 &middot; 36 Nodes &middot; Drag to pan &middot; Scroll to zoom</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-kinetic text-3xl md:text-5xl uppercase tracking-tighter text-royal-white">
                Action Capacity Map
              </h1>
              <p className="text-concrete text-sm mt-1 max-w-xl">
                Click a node to advance its tier. Prerequisites must reach <strong className="text-royal-white">Reliability</strong> before connected skills unlock.
              </p>
            </div>
            <button
              onClick={resetMap}
              className="font-clinical text-[10px] tracking-[0.3em] uppercase border border-visceral-crimson text-visceral-crimson px-4 py-2 hover:bg-visceral-crimson hover:text-royal-white transition-all"
            >
              Clear Map
            </button>
          </div>
        </header>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search capacities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96 bg-void border border-elevated text-bone px-4 py-3 text-sm font-clinical tracking-widest uppercase placeholder:text-concrete focus:outline-none focus:border-phosphor-green transition-colors"
          />
          {searchResults && (
            <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete ml-3">
              {searchResults.size} matching &middot; {completion.percentage}% reliable
            </span>
          )}
        </div>

        {/* Stats + Archetypes */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex flex-wrap gap-1.5">
            {[
              { label: "Awareness", count: counts.awareness, color: tierColors[1] },
              { label: "Response", count: counts.response, color: tierColors[2] },
              { label: "Reliability", count: counts.reliability, color: tierColors[3] },
              { label: "Transfer", count: counts.transfer, color: tierColors[4] },
            ].map(s => (
              <div key={s.label} className="border border-elevated bg-void px-3 py-1.5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }}></div>
                <span className="font-clinical text-[8px] tracking-[0.3em] uppercase text-ash">{s.label}</span>
                <span className="font-clinical text-xs text-royal-white">{s.count}</span>
              </div>
            ))}
            <div className="border border-phosphor-green bg-void px-3 py-1.5 flex items-center gap-2">
              <span className="font-clinical text-[8px] tracking-[0.3em] uppercase text-phosphor-green">Reliability</span>
              <span className="font-clinical text-xs text-phosphor-green">{completion.percentage}%</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {Object.entries(archetypes).map(([key, arch]) => (
              <button
                key={key}
                onClick={() => applyArchetype(key)}
                className={`px-3 py-1.5 text-[8px] tracking-[0.3em] uppercase border transition-all ${
                  activeArchetype === key
                    ? "border-phosphor-green text-phosphor-green bg-void"
                    : "border-elevated text-ash hover:border-concrete bg-void"
                }`}
                title={arch.desc}
              >
                {arch.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tree Container */}
        <div
          ref={containerRef}
          className="border border-elevated bg-void overflow-hidden relative select-none"
          style={{ height: 620, cursor: isPanning ? "grabbing" : "grab" }}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Transform container for smooth zoom/pan */}
          <div
            className="absolute inset-0 transition-transform duration-75 ease-out"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: "center center",
            }}
          >
            <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH}>

              {/* Branch zone backgrounds */}
              {branchZones.map(zone => (
                <g key={zone.key}>
                  <rect x={zone.x} y={0} width={zone.w} height={svgH} fill={branchColors[zone.key]} opacity="0.02" />
                  <text
                    x={zone.x + zone.w / 2} y={svgH - 20}
                    textAnchor="middle"
                    fill={branchColors[zone.key]}
                    opacity="0.05"
                    fontSize="10"
                    fontFamily="Space Grotesk"
                    letterSpacing="0.4em"
                    transform={`rotate(-90, ${zone.x + zone.w / 2}, ${svgH - 20})`}
                  >
                    {branchLabels[zone.key]}
                  </text>
                </g>
              ))}

              {/* Grid */}
              <defs>
                <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2A2A2A" strokeWidth="0.3" opacity="0.12"/>
                </pattern>
              </defs>
              <rect width={svgW} height={svgH} fill="url(#map-grid)" />

              {/* Connection lines */}
              {edges.map((edge, i) => {
                const targetTier = allocated[edge.to.id] || 0;
                const isCompound = edge.type === "compound";
                const connected = reachableIds.includes(edge.to.id) || targetTier >= 1;
                const isSearchMatch = !searchResults || searchResults.has(edge.to.id) || searchResults.has(edge.from.id);
                return (
                  <line
                    key={i}
                    x1={edge.from.x} y1={edge.from.y}
                    x2={edge.to.x} y2={edge.to.y}
                    stroke={isCompound ? "#B1121B" : connected ? "#7C7770" : "#1A1A1A"}
                    strokeWidth={isCompound ? 1.5 : connected ? 1.2 : 0.8}
                    strokeDasharray={isCompound ? "4,3" : connected ? "none" : "3,4"}
                    opacity={isSearchMatch ? (connected ? 0.5 : 0.15) : 0.03}
                  />
                );
              })}

              {/* Nodes */}
              {capacities.map(c => {
                const tier = allocated[c.id] || 0;
                const isReachable = reachableIds.includes(c.id) || tier >= 1;
                const isSelected = selectedNode === c.id;
                const isSearchMatch = !searchResults || searchResults.has(c.id);
                const opacity = isSearchMatch ? 1 : 0.1;
                const fillColor = tier >= 1 ? tierColors[tier] : isReachable ? "#1A1A1A" : "#0A0A0A";
                const strokeColor = isSelected ? "#39FF14" : tier >= 1 ? "transparent" : "#2A2A2A";
                const nodeR = tier >= 1 ? 18 : 14;

                return (
                  <g
                    key={c.id}
                    onClick={() => handleNodeClick(c.id)}
                    onMouseEnter={(e) => {
                      setSelectedNode(c.id);
                      setTooltipNode(c);
                    }}
                    onMouseLeave={() => {
                      setSelectedNode(null);
                      setTooltipNode(null);
                    }}
                    onMouseMove={(e) => {
                      const rect = containerRef.current?.getBoundingClientRect();
                      if (rect) setTooltipPos({ x: e.clientX - rect.left + 20, y: e.clientY - rect.top - 10 });
                    }}
                    style={{ cursor: "pointer", opacity }}
                  >
                    {/* Tier dots */}
                    {tier >= 1 && [1,2,3,4].map(t => (
                      <circle
                        key={t}
                        cx={c.x + 26 * Math.cos((t-1) * Math.PI/2 - Math.PI/2)}
                        cy={c.y + 26 * Math.sin((t-1) * Math.PI/2 - Math.PI/2)}
                        r={3}
                        fill={tier >= t ? tierColors[t] : "#2A2A2A"}
                      />
                    ))}

                    {/* Selection glow */}
                    {isSelected && (
                      <circle cx={c.x} cy={c.y} r={22} fill="none" stroke="#39FF14" strokeWidth="1" opacity="0.3">
                        <animate attributeName="r" values="20;26;20" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}

                    <circle cx={c.x} cy={c.y} r={nodeR} fill={fillColor} stroke={strokeColor} strokeWidth={1.5} />

                    <circle cx={c.x + nodeR + 5} cy={c.y - nodeR - 5} r={3} fill="#B1121B" opacity={0.4} />

                    {/* Show name only when zoomed in enough */}
                    {zoom > 0.55 && (
                      <text
                        x={c.x} y={c.y + 36}
                        textAnchor="middle"
                        fill={tier >= 1 ? "#F4F1EA" : isReachable ? "#D8D2C8" : "#7C7770"}
                        fontSize="10"
                        fontFamily="Space Grotesk, sans-serif"
                        letterSpacing="0.04em"
                      >
                        {c.name}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Foundation label */}
              <text x={500} y={80} textAnchor="middle" fill="#A8A199" fontSize="8" fontFamily="Space Grotesk" letterSpacing="0.4em" opacity="0.4">
                FOUNDATION — All paths begin here
              </text>
            </svg>
          </div>

          {/* Hover Tooltip */}
          {tooltipNode && zoom < 1.2 && (
            <div
              className="absolute z-20 pointer-events-none"
              style={{ left: tooltipPos.x, top: tooltipPos.y }}
            >
              <div className="bg-surface border border-elevated px-4 py-3 shadow-2xl max-w-[220px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-clinical text-[8px] tracking-[0.3em] uppercase text-visceral-crimson">P{tooltipNode.phase}</span>
                  <span className="font-clinical text-[8px] tracking-[0.3em] uppercase text-concrete">{branchLabels[tooltipNode.branch]}</span>
                </div>
                <p className="font-clinical text-xs tracking-wider uppercase text-royal-white">{tooltipNode.name}</p>
                <p className="font-sans text-[11px] text-concrete leading-snug mt-1">{tooltipNode.desc}</p>
                {tooltipNode.games && tooltipNode.games.length > 0 && (
                  <p className="font-clinical text-[8px] tracking-[0.2em] uppercase text-phosphor-green mt-2">
                    {tooltipNode.games.length} game{tooltipNode.games.length > 1 ? "s" : ""}
                  </p>
                )}
                <div className="flex gap-1 mt-2">
                  {[1,2,3,4].map(t => (
                    <div
                      key={t}
                      className={`w-2 h-2 rounded-full ${(allocated[tooltipNode.id] || 0) >= t ? "" : "border border-elevated"}`}
                      style={{ backgroundColor: (allocated[tooltipNode.id] || 0) >= t ? tierColors[t] : "transparent" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[1px]" style={{ backgroundColor: "#B1121B" }}></div>
            <span className="font-clinical text-[8px] tracking-widest uppercase text-concrete">Compound</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-[1px] bg-concrete"></div>
            <span className="font-clinical text-[8px] tracking-widest uppercase text-concrete">Prerequisite</span>
          </div>
          {[1,2,3,4].map(t => (
            <div key={t} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tierColors[t] }}></div>
              <span className="font-clinical text-[8px] tracking-widest uppercase text-ash">{tierLabels[t]}</span>
            </div>
          ))}
        </div>

        {/* Selected Node Detail Panel */}
        {selectedNode && (() => {
          const c = capacities.find(n => n.id === selectedNode);
          if (!c) return null;
          const tier = allocated[c.id] || 0;
          const games = c.games && c.games.length > 0 ? c.games : [];
          return (
            <div className="border border-elevated bg-surface p-6 mt-6" style={{ opacity: searchResults && !searchResults.has(c.id) ? 0.3 : 1 }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: tierColors[tier] || "#2A2A2A" }}></div>
                <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-visceral-crimson">Phase {c.phase}</span>
                <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete">{branchLabels[c.branch]}</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div>
                  <h3 className="font-kinetic text-xl uppercase tracking-wider text-royal-white mb-1">{c.name}</h3>
                  <p className="text-concrete text-sm">{c.desc}</p>
                  <p className="text-ash text-xs mt-2 italic">{c.short}</p>
                  {c.compound_label && (
                    <p className="text-visceral-crimson text-[10px] tracking-wider uppercase mt-2 font-bold">
                      Requires: {c.compound_label}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <div className="flex gap-1">
                    {[0,1,2,3,4].map(t => (
                      <button
                        key={t}
                        onClick={() => setAllocated(prev => ({...prev, [c.id]: t}))}
                        className={`px-3 py-1.5 text-[9px] tracking-[0.3em] uppercase border transition-all ${
                          tier === t
                            ? t === 0 ? "border-concrete text-concrete bg-void" : "border-phosphor-green text-phosphor-green bg-void"
                            : "border-elevated text-ash hover:border-concrete bg-void"
                        }`}
                      >
                        {t === 0 ? "0" : tierLabels[t].slice(0, 4)}
                      </button>
                    ))}
                  </div>
                  {games.length > 0 && (
                    <div className="mt-2 text-right">
                      <span className="font-clinical text-[8px] tracking-[0.3em] uppercase text-ash">Trained by:</span>
                      <div className="flex flex-wrap gap-1 mt-1 justify-end">
                        {games.map(g => (
                          <span key={g} className="px-2 py-0.5 border border-elevated text-[8px] tracking-wider text-phosphor-green font-clinical uppercase">
                            {g.replace(/-/g, ' ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })()}

        <div className="flex gap-6 mt-8">
          <Link href="/lab/games" className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete hover:text-royal-white transition-colors">
            &larr; Game Lab
          </Link>
        </div>
      </div>
    </div>
  );
}
