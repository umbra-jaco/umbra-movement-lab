"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import capacities, { branchLabels, branchColors } from "@/lib/capacity-map";
import { tierLabels, tierColors, weights, calculateScore, evaluateAllBenchmarks } from "@/lib/scoring";
import Link from "next/link";

const STORAGE_KEY = "umbra-capacity-map";

export default function CapacityMap() {
  const [allocated, setAllocated] = useState({});
  const [pinnedNode, setPinnedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeArchetype, setActiveArchetype] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [zoom, setZoom] = useState(0.85);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [panOrigin, setPanOrigin] = useState({ x: 0, y: 0 });
  const [isCtrlHeld, setIsCtrlHeld] = useState(false);
  const containerRef = useRef(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => { try { const s = localStorage.getItem(STORAGE_KEY); if (s) setAllocated(JSON.parse(s)); } catch {} }, []);
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(allocated)); }, [allocated]);

  useEffect(() => {
    const down = (e) => { if (e.key === "Control") setIsCtrlHeld(true); };
    const up = (e) => { if (e.key === "Control") setIsCtrlHeld(false); };
    window.addEventListener("keydown", down); window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, []);

  const total = capacities.length;
  const score = useMemo(() => calculateScore(allocated, null), [allocated]);
  const benchmarkResults = useMemo(() => evaluateAllBenchmarks(allocated), [allocated]);

  const edges = useMemo(() => {
    const e = [];
    capacities.forEach(c => {
      (c.prereqs || []).forEach(preId => {
        const pre = capacities.find(p => p.id === preId);
        if (pre) e.push({ from: pre, to: c, type: "prerequisite" });
      });
      if (c.compounds && c.compounds.length === 2) {
        const cp1 = capacities.find(p => p.id === c.compounds[0]);
        const cp2 = capacities.find(p => p.id === c.compounds[1]);
        if (cp1) e.push({ from: cp1, to: c, type: "compound" });
        if (cp2) e.push({ from: cp2, to: c, type: "compound" });
      }
    });
    return e;
  }, []);

  const reachableIds = useMemo(() => capacities.filter(c => {
    if (allocated[c.id] && allocated[c.id] >= 1) return false;
    if (!c.prereqs || c.prereqs.length === 0) return true;
    return c.prereqs.every(preId => (allocated[preId] || 0) >= 3);
  }).map(c => c.id), [allocated]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return new Set(capacities.filter(c => c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.short.toLowerCase().includes(q) || c.branch.toLowerCase().includes(q)).map(c => c.id));
  }, [searchQuery]);

  const handleNodeClick = (id) => {
    if (pinnedNode === id) {
      setAllocated(prev => ({ ...prev, [id]: ((prev[id] || 0) >= 4 ? 0 : (prev[id] || 0) + 1) }));
      return;
    }
    setPinnedNode(id);
  };

  const applyArchetype = (key) => {
    if (activeArchetype === key) { setAllocated({}); setActiveArchetype(null); setPinnedNode(null); return; }
    const arch = {
      "guard-player": { path: ["connection", "frames", "off-balancing", "distance-management", "redirect-force", "shield-retention", "sweeping", "triangle-finishing"] },
      "pressure-player": { path: ["connection", "base-stability", "side-control", "mount", "mount-transitions", "mount-submissions", "back-control", "back-finishing"] },
      "scrambler": { path: ["connection", "head-safety", "scramble-management", "stand-up", "level-changing", "single-leg", "creative-adaptation", "surface-adaptability"] },
    };
    const next = {}; (arch[key]?.path || []).forEach(id => { next[id] = 1; });
    setAllocated(next); setActiveArchetype(key); setPinnedNode(null);
  };

  const resetMap = () => { setAllocated({}); setActiveArchetype(null); setPinnedNode(null); localStorage.removeItem(STORAGE_KEY); };
  const zoomIn = () => setZoom(z => Math.min(2.5, z + 0.15));
  const zoomOut = () => setZoom(z => Math.max(0.35, z - 0.15));

  const hw = useCallback((e) => {
    if (!isCtrlHeld) return;
    e.preventDefault();
    setZoom(z => Math.max(0.35, Math.min(2.5, z + e.deltaY * -0.003)));
  }, [isCtrlHeld]);

  const hmd = useCallback((e) => {
    if (e.target.closest("g") || e.target.closest("button")) return;
    setIsPanning(true);
    setPanStart({ x: e.clientX, y: e.clientY });
    setPanOrigin({ ...pan });
  }, [pan]);

  const hmm = useCallback((e) => {
    if (!isPanning) return;
    const dx = e.clientX - panStart.x; const dy = e.clientY - panStart.y;
    setPan({ x: panOrigin.x + dx, y: panOrigin.y + dy });
  }, [isPanning, panStart, panOrigin]);

  const hmu = useCallback(() => setIsPanning(false), []);

  const svgW = 1000, svgH = 780;
  const branchZones = [
    { key: "standing", x: 0, w: 190 }, { key: "guard", x: 190, w: 260 }, { key: "pinning", x: 450, w: 270 },
    { key: "turtle", x: 720, w: 150 }, { key: "striking", x: 870, w: 130 },
  ];

  const activeNode = pinnedNode || hoveredNode;
  const focusedNode = activeNode ? capacities.find(n => n.id === (typeof activeNode === "string" ? activeNode : activeNode.id)) : null;

  return (
    <div className="min-h-screen bg-void pt-28 pb-24 px-4 md:px-8 text-royal-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-phosphor-green"></div>
            <span className="font-clinical text-[10px] tracking-[0.4em] uppercase text-phosphor-green">v3 &middot; {total} nodes &middot; Ctrl+scroll to zoom</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-kinetic text-3xl md:text-5xl uppercase tracking-tighter text-royal-white">Action Capacity Map</h1>
              <p className="text-concrete text-sm mt-1 max-w-2xl">Click a node to pin its detail panel. Click again to cycle its tier. Prerequisites must reach <strong className="text-royal-white">Reliability</strong> before connected skills unlock.</p>
            </div>
            <button onClick={resetMap} className="font-clinical text-[10px] tracking-[0.3em] uppercase border border-visceral-crimson text-visceral-crimson px-4 py-2 hover:bg-visceral-crimson hover:text-royal-white transition-all">Clear Map</button>
          </div>
        </header>

        <div className="flex flex-wrap items-center gap-4 mb-4">
          <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            className="w-56 bg-void border border-elevated text-royal-white px-4 py-2 text-sm font-clinical tracking-widest uppercase placeholder:text-concrete/50 focus:outline-none focus:border-phosphor-green transition-colors" />
          {searchResults && <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete">{searchResults.size} matching</span>}
          <div className="flex gap-1 ml-auto">
            <button onClick={zoomOut} className="px-3 py-1.5 border border-elevated text-concrete hover:text-royal-white text-lg leading-none">&minus;</button>
            <button onClick={zoomIn} className="px-3 py-1.5 border border-elevated text-concrete hover:text-royal-white text-lg leading-none">+</button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex gap-1.5">
            {[{ key: "guard-player", label: "Guard Player" }, { key: "pressure-player", label: "Pressure Player" }, { key: "scrambler", label: "Scrambler" }].map(a => (
              <button key={a.key} onClick={() => applyArchetype(a.key)}
                className={`px-3 py-1.5 text-[8px] tracking-[0.3em] uppercase border transition-all ${activeArchetype === a.key ? "border-phosphor-green text-phosphor-green" : "border-elevated text-ash hover:border-concrete"}`}>{a.label}</button>
            ))}
          </div>
          <div className="flex gap-1.5">
            {[
              { label: "A", count: score.tierDistribution.awareness, color: tierColors[1] },
              { label: "R", count: score.tierDistribution.response, color: tierColors[2] },
              { label: "Rel", count: score.tierDistribution.reliability, color: tierColors[3] },
              { label: "T", count: score.tierDistribution.transfer, color: tierColors[4] },
            ].map(s => (
              <div key={s.label} className="border border-elevated px-2 py-1.5 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }}></div>
                <span className="font-clinical text-[7px] tracking-[0.2em] uppercase text-ash">{s.label}</span>
                <span className="font-clinical text-[11px] text-royal-white">{s.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={containerRef} className="border border-elevated bg-void overflow-hidden relative select-none" style={{ height: 520, cursor: isPanning ? "grabbing" : "grab" }}
          onWheel={hw} onMouseDown={hmd} onMouseMove={hmm} onMouseUp={hmu} onMouseLeave={hmu}>
          <div className="absolute inset-0 transition-transform duration-75 ease-out" style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`, transformOrigin: "center center" }}>
            <svg viewBox={`0 0 ${svgW} ${svgH}`} width={svgW} height={svgH}>
              {branchZones.map(zone => (<g key={zone.key}><rect x={zone.x} y={0} width={zone.w} height={svgH} fill={branchColors[zone.key]} opacity="0.02" /><text x={zone.x + zone.w / 2} y={svgH - 20} textAnchor="middle" fill={branchColors[zone.key]} opacity="0.05" fontSize="10" fontFamily="Space Grotesk" letterSpacing="0.4em" transform={`rotate(-90, ${zone.x + zone.w / 2}, ${svgH - 20})`}>{branchLabels[zone.key]}</text></g>))}
              <defs><pattern id="mg" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2A2A2A" strokeWidth="0.3" opacity="0.12"/></pattern></defs>
              <rect width={svgW} height={svgH} fill="url(#mg)" />
              {edges.map((edge, i) => {
                const tt = allocated[edge.to.id] || 0; const conn = reachableIds.includes(edge.to.id) || tt >= 1;
                const isComp = edge.type === "compound"; const match = !searchResults || searchResults.has(edge.to.id) || searchResults.has(edge.from.id);
                return (<line key={i} x1={edge.from.x} y1={edge.from.y} x2={edge.to.x} y2={edge.to.y} stroke={isComp ? "#B1121B" : conn ? "#7C7770" : "#1A1A1A"} strokeWidth={isComp ? 1.5 : conn ? 1.2 : 0.8} strokeDasharray={isComp ? "4,3" : conn ? "none" : "3,4"} opacity={match ? (conn ? 0.5 : 0.15) : 0.03} />);
              })}
              {capacities.map(c => {
                const tier = allocated[c.id] || 0; const isReach = reachableIds.includes(c.id) || tier >= 1;
                const isPinned = pinnedNode === c.id; const isHovered = hoveredNode?.id === c.id;
                const match = !searchResults || searchResults.has(c.id); const op = match ? 1 : 0.1;
                const fill = tier >= 1 ? tierColors[tier] : isReach ? "#1A1A1A" : "#0A0A0A";
                const stroke = isHovered || isPinned ? "#39FF14" : tier >= 1 ? "transparent" : "#2A2A2A";
                const r = tier >= 1 ? 18 : 14; const sw = isPinned ? 2.5 : 1.5;
                return (<g key={c.id} onClick={() => handleNodeClick(c.id)}
                  onMouseEnter={() => setHoveredNode(c)} onMouseLeave={() => { if (!pinnedNode) setHoveredNode(null); }}
                  style={{ cursor: "pointer", opacity: op }}>
                  {tier >= 1 && [1,2,3,4].map(t => <circle key={t} cx={c.x + 26 * Math.cos((t-1)*Math.PI/2-Math.PI/2)} cy={c.y + 26 * Math.sin((t-1)*Math.PI/2-Math.PI/2)} r={3} fill={tier >= t ? tierColors[t] : "#2A2A2A"} />)}
                  {(isHovered || isPinned) && <circle cx={c.x} cy={c.y} r={22} fill="none" stroke="#39FF14" strokeWidth={isPinned ? 2 : 1} opacity={isPinned ? 0.5 : 0.3}><animate attributeName="r" values="20;26;20" dur="2s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" /></circle>}
                  <circle cx={c.x} cy={c.y} r={r} fill={fill} stroke={stroke} strokeWidth={sw} />
                  <circle cx={c.x + r + 5} cy={c.y - r - 5} r={3} fill="#B1121B" opacity={0.4} />
                  {zoom > 0.55 && <text x={c.x} y={c.y + 36} textAnchor="middle" fill={tier >= 1 ? "#F4F1EA" : isReach ? "#D8D2C8" : "#7C7770"} fontSize="10" fontFamily="Space Grotesk" letterSpacing="0.04em">{c.name}</text>}
                </g>);
              })}
              <text x={500} y={80} textAnchor="middle" fill="#A8A199" fontSize="8" fontFamily="Space Grotesk" letterSpacing="0.4em" opacity="0.4">FOUNDATION</text>
            </svg>
          </div>
          {!pinnedNode && hoveredNode && zoom < 1.2 && (
            <div className="absolute z-20 pointer-events-none" style={{ left: tooltipPos.x, top: tooltipPos.y }}>
              <div className="bg-surface border border-elevated px-4 py-3 shadow-2xl max-w-[220px]">
                <div className="flex items-center gap-2 mb-1"><span className="font-clinical text-[8px] tracking-[0.3em] uppercase text-visceral-crimson">P{hoveredNode.phase}</span><span className="font-clinical text-[8px] tracking-[0.3em] uppercase text-concrete">{branchLabels[hoveredNode.branch]}</span></div>
                <p className="font-clinical text-xs tracking-wider uppercase text-royal-white">{hoveredNode.name}</p>
                <p className="font-sans text-[11px] text-concrete leading-snug mt-1">{hoveredNode.desc}</p>
                <p className="font-clinical text-[7px] tracking-wider text-concrete mt-2">Click to pin</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-4 mt-3">
          <div className="flex items-center gap-2"><div className="w-5 h-[1px]" style={{ backgroundColor: "#B1121B" }}></div><span className="font-clinical text-[7px] tracking-widest uppercase text-concrete">Compound</span></div>
          <div className="flex items-center gap-2"><div className="w-5 h-[1px] bg-concrete"></div><span className="font-clinical text-[7px] tracking-widest uppercase text-concrete">Prereq</span></div>
          {[1,2,3,4].map(t => (<div key={t} className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tierColors[t] }}></div><span className="font-clinical text-[7px] tracking-widest uppercase text-ash">{tierLabels[t]}</span></div>))}
        </div>

        {pinnedNode && focusedNode && (() => {
          const c = focusedNode; const tier = allocated[c.id] || 0; const w = weights[c.id] || 1;
          const games = c.games && c.games.length > 0 ? c.games : [];
          return (
            <div className="border border-elevated bg-surface p-6 mt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: tierColors[tier] || "#2A2A2A" }}></div>
                  <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-visceral-crimson">Phase {c.phase}</span>
                  <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete">{branchLabels[c.branch]}</span>
                  <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-ash">Weight: {w}x</span>
                </div>
                <button onClick={() => setPinnedNode(null)} className="font-clinical text-[9px] tracking-wider uppercase text-concrete hover:text-royal-white">&times; Close</button>
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div>
                  <h3 className="font-kinetic text-xl uppercase tracking-wider text-royal-white mb-1">{c.name}</h3>
                  <p className="text-concrete text-sm">{c.desc}</p>
                  <p className="text-ash text-xs mt-2 italic">{c.short}</p>
                  {c.compound_label && <p className="text-visceral-crimson text-[10px] tracking-wider uppercase mt-2 font-bold">Requires: {c.compound_label}</p>}
                </div>
                <div className="flex flex-col items-end gap-3 shrink-0">
                  <div className="flex gap-1">
                    {[0,1,2,3,4].map(t => <button key={t} onClick={() => setAllocated(prev => ({...prev, [c.id]: t}))}
                      className={`px-3 py-1.5 text-[9px] tracking-[0.3em] uppercase border transition-all ${tier === t ? t === 0 ? "border-concrete text-concrete" : "border-phosphor-green text-phosphor-green" : "border-elevated text-ash hover:border-concrete"}`}>{t === 0 ? "0" : tierLabels[t].slice(0, 4)}</button>)}
                  </div>
                  {games.length > 0 && (
                    <div className="text-right">
                      <span className="font-clinical text-[8px] tracking-[0.3em] uppercase text-ash block mb-1">Trained by:</span>
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        {games.map(g => (
                          <Link key={g} href={`/lab/games/${g}`}
                            className="px-2.5 py-1 border border-phosphor-green/30 text-[8px] tracking-wider text-phosphor-green font-clinical uppercase hover:border-phosphor-green hover:bg-phosphor-green/5 transition-all">
                            {g.replace(/-/g, " ")} &rarr;
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })()}

        <details className="border border-elevated mt-6 group">
          <summary className="px-6 py-4 cursor-pointer hover:bg-surface/30 transition-colors flex items-center justify-between">
            <span className="font-clinical text-[9px] tracking-[0.4em] uppercase text-ash">Assessment Data &amp; Benchmarks</span>
            <div className="flex items-center gap-4">
              <span className="font-clinical text-sm text-phosphor-green">{score.overall}%</span>
              <span className="font-clinical text-[9px] text-concrete">&#9660;</span>
            </div>
          </summary>
          <div className="px-6 py-4 border-t border-elevated">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {["foundation", "guard", "pinning", "standing", "turtle", "scramble", "striking"].filter(b => score.branches[b] !== undefined).map(b => (
                <div key={b} className="flex flex-col gap-1">
                  <div className="flex justify-between"><span className="font-clinical text-[8px] tracking-[0.3em] uppercase text-ash">{branchLabels[b] || b}</span><span className="font-clinical text-xs text-royal-white">{score.branches[b]}%</span></div>
                  <div className="w-full bg-elevated h-1"><div className="h-1" style={{ width: `${score.branches[b]}%`, backgroundColor: branchColors[b] || "#7C7770" }}></div></div>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              {benchmarkResults.map(bm => (
                <div key={bm.key} className="flex items-center justify-between py-1.5 border-b border-elevated last:border-0">
                  <span className="font-clinical text-xs tracking-wider uppercase text-royal-white">{bm.name}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-20 bg-elevated h-1"><div className={`h-1 ${bm.score >= 80 ? "bg-phosphor-green" : bm.score >= 50 ? "bg-royal-white" : "bg-visceral-crimson"}`} style={{ width: `${Math.min(bm.score, 100)}%` }}></div></div>
                    <span className={`font-clinical text-xs w-8 text-right ${bm.score >= 80 ? "text-phosphor-green" : bm.score >= 50 ? "text-royal-white" : "text-concrete"}`}>{bm.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </details>

        <div className="flex gap-6 mt-8">
          <Link href="/lab/games" className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete hover:text-royal-white transition-colors">&larr; Game Lab</Link>
        </div>
      </div>
    </div>
  );
}
