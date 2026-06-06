"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import capacities, { tierLabels, tierColors, getTierCount } from "@/lib/capacity-map";
import Link from "next/link";

export default function CapacityMap() {
  const [allocated, setAllocated] = useState({});
  const [selectedNode, setSelectedNode] = useState(null);
  const [zoom, setZoom] = useState(1);

  const total = capacities.length;
  const counts = useMemo(() => getTierCount(allocated), [allocated]);

  const handleNodeClick = (id) => {
    setAllocated(prev => {
      const current = prev[id] || 0;
      const next = current >= 4 ? 0 : current + 1;
      return { ...prev, [id]: next };
    });
  };

  const reachableIds = useMemo(() => {
    return capacities.filter(c => {
      if (allocated[c.id] && allocated[c.id] >= 1) return false;
      if (!c.prerequisites || c.prerequisites.length === 0) return true;
      return c.prerequisites.every(preId => (allocated[preId] || 0) >= 3);
    }).map(c => c.id);
  }, [allocated]);

  const svgW = 900;
  const svgH = 700;

  // Build edges
  const edges = [];
  capacities.forEach(c => {
    (c.prerequisites || []).forEach(preId => {
      const pre = capacities.find(p => p.id === preId);
      if (pre) edges.push({ from: pre, to: c, type: "prerequisite" });
    });
    if (c.compounds && c.compounds.length === 2) {
      const cp1 = capacities.find(p => p.id === c.compounds[0]);
      const cp2 = capacities.find(p => p.id === c.compounds[1]);
      if (cp1 && cp2) {
        edges.push({ from: cp1, to: c, type: "compound" });
        edges.push({ from: cp2, to: c, type: "compound" });
      }
    }
  });

  return (
    <div className="min-h-screen bg-void pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-phosphor-green"></div>
            <span className="font-clinical text-[10px] tracking-[0.4em] uppercase text-phosphor-green">Tools</span>
          </div>
          <h1 className="font-kinetic text-4xl md:text-6xl uppercase tracking-tighter text-royal-white mb-4">
            Action Capacity Map
          </h1>
          <p className="text-bone text-sm max-w-xl">
            Click a node to mark its integration tier. Prerequisites must reach Reliability (Tier 3) before connected skills unlock. Compound skills require both parent nodes.
          </p>
        </header>

        {/* Stats Bar */}
        <div className="flex flex-wrap gap-4 mb-8">
          {[
            { label: "Awareness", count: counts.awareness, color: tierColors[1] },
            { label: "Response", count: counts.response, color: tierColors[2] },
            { label: "Reliability", count: counts.reliability, color: tierColors[3] },
            { label: "Transfer", count: counts.transfer, color: tierColors[4] },
          ].map(s => (
            <div key={s.label} className="section-card px-6 py-3 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }}></div>
              <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-ash">{s.label}</span>
              <span className="font-clinical text-sm text-royal-white">{s.count}/{total}</span>
            </div>
          ))}
        </div>

        {/* Tree Container */}
        <div className="section-card overflow-hidden relative" style={{ height: 700 }}>
          <svg
            viewBox={`0 0 ${svgW} ${svgH}`}
            className="w-full h-full"
            onWheel={(e) => setZoom(z => Math.max(0.5, Math.min(2, z - e.deltaY * 0.001)))}
          >
            {/* Background grid */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2A2A2A" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width={svgW} height={svgH} fill="url(#grid)" />

            {/* Connection lines */}
            {edges.map((edge, i) => {
              const isReachable = reachableIds.includes(edge.to.id) || (allocated[edge.to.id] || 0) >= 1;
              const isCompound = edge.type === "compound";
              return (
                <line
                  key={i}
                  x1={edge.from.x}
                  y1={edge.from.y}
                  x2={edge.to.x}
                  y2={edge.to.y}
                  stroke={isCompound ? "#B1121B" : isReachable ? "#7C7770" : "#2A2A2A"}
                  strokeWidth={isCompound ? 1.5 : 1}
                  strokeDasharray={isCompound ? "4,3" : isReachable ? "none" : "3,3"}
                  opacity={isReachable ? 0.6 : 0.2}
                />
              );
            })}

            {/* Nodes */}
            {capacities.map(c => {
              const tier = allocated[c.id] || 0;
              const isReachable = reachableIds.includes(c.id) || tier >= 1;
              const isSelected = selectedNode === c.id;
              const hasPrereqs = c.prerequisites && c.prerequisites.length > 0;
              const canClick = !hasPrereqs || (c.prerequisites || []).every(preId => (allocated[preId] || 0) >= 3);

              return (
                <g
                  key={c.id}
                  onClick={() => handleNodeClick(c.id)}
                  onMouseEnter={() => setSelectedNode(c.id)}
                  onMouseLeave={() => setSelectedNode(null)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Connection dots for compound nodes */}
                  {tier >= 1 && [1,2,3,4].map(t => (
                    <circle
                      key={t}
                      cx={c.x + 24 * Math.cos((t-1) * Math.PI/2 - Math.PI/2)}
                      cy={c.y + 24 * Math.sin((t-1) * Math.PI/2 - Math.PI/2)}
                      r={3}
                      fill={tier >= t ? tierColors[t] : "#2A2A2A"}
                    />
                  ))}

                  {/* Main node */}
                  <circle
                    cx={c.x} cy={c.y} r={tier >= 1 ? 18 : 14}
                    fill={tier >= 1 ? tierColors[tier] : isReachable ? "#1A1A1A" : "#0A0A0A"}
                    stroke={isSelected ? (tier >= 1 ? "#39FF14" : "#7C7770") : tier >= 1 ? "transparent" : "#2A2A2A"}
                    strokeWidth={2}
                    className="transition-all duration-300"
                  />

                  {/* Label */}
                  <text
                    x={c.x} y={c.y + 38}
                    textAnchor="middle"
                    fill={tier >= 1 ? "#F4F1EA" : isReachable ? "#D8D2C8" : "#7C7770"}
                    fontSize="11"
                    fontFamily="Space Grotesk, sans-serif"
                    letterSpacing="0.05em"
                  >
                    {c.name}
                  </text>

                  {/* Phase indicator */}
                  <text
                    x={c.x} y={c.y - 30}
                    textAnchor="middle"
                    fill="#B1121B"
                    fontSize="8"
                    fontFamily="Space Grotesk, sans-serif"
                    letterSpacing="0.2em"
                  >
                    P{c.phase}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mt-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[1px] bg-phosphor-green"></div>
            <span className="font-clinical text-[10px] tracking-widest uppercase text-phosphor-green">Compound</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-[1px] bg-concrete"></div>
            <span className="font-clinical text-[10px] tracking-widest uppercase text-concrete">Prerequisite</span>
          </div>
          {[1,2,3,4].map(t => (
            <div key={t} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tierColors[t] }}></div>
              <span className="font-clinical text-[10px] tracking-widest uppercase text-ash">{tierLabels[t]}</span>
            </div>
          ))}
        </div>

        {/* Selected Node Info */}
        {selectedNode && (() => {
          const c = capacities.find(n => n.id === selectedNode);
          if (!c) return null;
          const tier = allocated[c.id] || 0;
          return (
            <div className="section-card p-6 mt-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: tierColors[tier] || "#2A2A2A" }}></div>
                <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-visceral-crimson">P{c.phase}</span>
                <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete">{c.position}</span>
              </div>
              <h3 className="font-kinetic text-xl uppercase tracking-wider text-royal-white mb-2">{c.name}</h3>
              <p className="text-bone text-sm mb-4">{c.description}</p>
              <div className="flex gap-2">
                {[0,1,2,3,4].map(t => (
                  <button
                    key={t}
                    onClick={() => setAllocated(prev => ({...prev, [c.id]: t}))}
                    className={`px-4 py-2 text-[10px] tracking-[0.3em] uppercase border transition-all ${
                      tier === t
                        ? t === 0 ? "border-concrete text-concrete bg-void" : "border-phosphor-green text-phosphor-green bg-void"
                        : "border-elevated text-ash hover:border-concrete"
                    }`}
                  >
                    {t === 0 ? "Reset" : tierLabels[t]}
                  </button>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Navigation */}
        <div className="mt-12">
          <Link href="/lab/games" className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete hover:text-royal-white transition-colors">
            &larr; Back to Game Lab
          </Link>
        </div>
      </div>
    </div>
  );
}
