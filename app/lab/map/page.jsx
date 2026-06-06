"use client";

import { useState, useMemo, useEffect } from "react";
import capacities, { tierLabels, tierColors, archetypes, buildEdges, getTierCount, branchColors, branchLabels } from "@/lib/capacity-map";
import Link from "next/link";

const STORAGE_KEY = "umbra-capacity-map";

export default function CapacityMap() {
  const [allocated, setAllocated] = useState({});
  const [selectedNode, setSelectedNode] = useState(null);
  const [activeArchetype, setActiveArchetype] = useState(null);

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

  const handleNodeClick = (id) => {
    setAllocated(prev => {
      const current = prev[id] || 0;
      return { ...prev, [id]: current >= 4 ? 0 : current + 1 };
    });
  };

  const applyArchetype = (key) => {
    const arch = archetypes[key];
    if (!arch) return;
    const next = { ...allocated };
    if (activeArchetype === key) {
      setActiveArchetype(null);
      return;
    }
    arch.recommendedPath.forEach((id, i) => {
      next[id] = Math.max(next[id] || 0, 1);
    });
    setAllocated(next);
    setActiveArchetype(key);
  };

  const resetMap = () => {
    setAllocated({});
    setActiveArchetype(null);
    localStorage.removeItem(STORAGE_KEY);
  };

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

        <header className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-phosphor-green"></div>
            <span className="font-clinical text-[10px] tracking-[0.4em] uppercase text-phosphor-green">v2 &middot; 36 Nodes</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-kinetic text-3xl md:text-5xl uppercase tracking-tighter text-royal-white">
                Action Capacity Map
              </h1>
              <p className="text-concrete text-sm mt-1 max-w-xl">
                Click any node to advance its integration tier. Prerequisites must reach <strong className="text-royal-white">Reliability</strong> before connected skills unlock. Compound nodes need both parents at Reliability.
              </p>
            </div>
            <button onClick={resetMap} className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete hover:text-visceral-crimson transition-colors border border-elevated px-4 py-2 hover:border-visceral-crimson">
              Reset All
            </button>
          </div>
        </header>

        <div className="flex flex-wrap gap-6 mb-6">
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Awareness", count: counts.awareness, color: tierColors[1] },
              { label: "Response", count: counts.response, color: tierColors[2] },
              { label: "Reliability", count: counts.reliability, color: tierColors[3] },
              { label: "Transfer", count: counts.transfer, color: tierColors[4] },
            ].map(s => (
              <div key={s.label} className="border border-elevated bg-void px-4 py-2 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }}></div>
                <span className="font-clinical text-[9px] tracking-[0.3em] uppercase text-ash">{s.label}</span>
                <span className="font-clinical text-xs text-royal-white">{s.count}</span>
              </div>
            ))}
            <div className="border border-elevated bg-void px-4 py-2 flex items-center gap-2">
              <span className="font-clinical text-[9px] tracking-[0.3em] uppercase text-phosphor-green">Reliability</span>
              <span className="font-clinical text-xs text-phosphor-green">{completion.percentage}%</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {Object.entries(archetypes).map(([key, arch]) => (
              <button
                key={key}
                onClick={() => applyArchetype(key)}
                className={`px-4 py-2 text-[9px] tracking-[0.3em] uppercase border transition-all ${
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

        <div className="border border-elevated bg-void overflow-auto relative" style={{ maxHeight: 720 }}>
          <svg viewBox={`0 0 ${svgW} ${svgH}`} className="min-w-[1000px]" style={{ width: svgW, height: svgH }}>

            {branchZones.map(zone => (
              <g key={zone.key}>
                <rect x={zone.x} y={0} width={zone.w} height={svgH} fill={branchColors[zone.key]} opacity="0.02" />
                <text
                  x={zone.x + zone.w / 2} y={svgH - 20}
                  textAnchor="middle"
                  fill={branchColors[zone.key]}
                  opacity="0.06"
                  fontSize="10"
                  fontFamily="Space Grotesk"
                  letterSpacing="0.4em"
                  transform={`rotate(-90, ${zone.x + zone.w / 2}, ${svgH - 20})`}
                >
                  {branchLabels[zone.key]}
                </text>
              </g>
            ))}

            <defs>
              <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2A2A2A" strokeWidth="0.3" opacity="0.15"/>
              </pattern>
            </defs>
            <rect width={svgW} height={svgH} fill="url(#map-grid)" />

            {edges.map((edge, i) => {
              const targetTier = allocated[edge.to.id] || 0;
              const isCompound = edge.type === "compound";
              const connected = reachableIds.includes(edge.to.id) || targetTier >= 1;
              return (
                <line
                  key={i}
                  x1={edge.from.x} y1={edge.from.y}
                  x2={edge.to.x} y2={edge.to.y}
                  stroke={isCompound ? "#B1121B" : connected ? "#7C7770" : "#1A1A1A"}
                  strokeWidth={isCompound ? 1.5 : connected ? 1.2 : 0.8}
                  strokeDasharray={isCompound ? "4,3" : connected ? "none" : "3,4"}
                  opacity={connected ? 0.5 : 0.15}
                />
              );
            })}

            {capacities.map(c => {
              const tier = allocated[c.id] || 0;
              const isReachable = reachableIds.includes(c.id) || tier >= 1;
              const isSelected = selectedNode === c.id;
              const fillColor = tier >= 1 ? tierColors[tier] : isReachable ? "#1A1A1A" : "#0A0A0A";
              const strokeColor = isSelected ? "#39FF14" : tier >= 1 ? "transparent" : "#2A2A2A";

              return (
                <g
                  key={c.id}
                  onClick={() => handleNodeClick(c.id)}
                  onMouseEnter={() => setSelectedNode(c.id)}
                  onMouseLeave={() => setSelectedNode(null)}
                  style={{ cursor: "pointer" }}
                >
                  {tier >= 1 && [1,2,3,4].map(t => (
                    <circle
                      key={t}
                      cx={c.x + 26 * Math.cos((t-1) * Math.PI/2 - Math.PI/2)}
                      cy={c.y + 26 * Math.sin((t-1) * Math.PI/2 - Math.PI/2)}
                      r={3}
                      fill={tier >= t ? tierColors[t] : "#2A2A2A"}
                    />
                  ))}

                  {isSelected && (
                    <circle cx={c.x} cy={c.y} r={22} fill="none" stroke="#39FF14" strokeWidth="1" opacity="0.3">
                      <animate attributeName="r" values="20;26;20" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}

                  <circle
                    cx={c.x} cy={c.y}
                    r={tier >= 1 ? 18 : 14}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={1.5}
                  />

                  <circle
                    cx={c.x + (tier >= 1 ? 18 : 14) + 5}
                    cy={c.y - (tier >= 1 ? 18 : 14) - 5}
                    r={3}
                    fill="#B1121B"
                    opacity={0.4}
                  />

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
                </g>
              );
            })}

            <text x={500} y={80} textAnchor="middle" fill="#A8A199" fontSize="8" fontFamily="Space Grotesk" letterSpacing="0.4em" opacity="0.5">
              FOUNDATION — All Phase 1 paths begin here
            </text>
          </svg>
        </div>

        <div className="flex flex-wrap gap-6 mt-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[1px] bg-phosphor-green"></div>
            <span className="font-clinical text-[9px] tracking-widest uppercase text-phosphor-green">Compound</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-[1px] bg-concrete"></div>
            <span className="font-clinical text-[9px] tracking-widest uppercase text-concrete">Prerequisite</span>
          </div>
          {[1,2,3,4].map(t => (
            <div key={t} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tierColors[t] }}></div>
              <span className="font-clinical text-[9px] tracking-widest uppercase text-ash">{tierLabels[t]}</span>
            </div>
          ))}
        </div>

        {selectedNode && (() => {
          const c = capacities.find(n => n.id === selectedNode);
          if (!c) return null;
          const tier = allocated[c.id] || 0;
          const games = c.games && c.games.length > 0 ? c.games : [];
          return (
            <div className="border border-elevated bg-surface p-6 mt-6">
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
