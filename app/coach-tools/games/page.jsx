"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";
import gamesData, { phaseNames, broadPositions, normalizePosition } from "@/lib/games";
import gameCapacityMap from "@/lib/game-capacity-map";
import GameOverlay from "@/components/GameOverlay";

// Icons per broad category
const categoryMeta = {
  "Guard": { icon: "⬡", desc: "Frames, sweeps, retention, and submissions from the bottom" },
  "Back": { icon: "⬢", desc: "Chest-to-back control, rides, and rear finishes" },
  "Standing": { icon: "⏶", desc: "Grip fighting, level changing, takedowns" },
  "Mount": { icon: "⏢", desc: "Weight distribution, transitions, and top finishes" },
  "Side Control": { icon: "▤", desc: "Pressure, scarf holds, arm isolation, submission hunting" },
  "Pinning": { icon: "▣", desc: "Chest-to-chest, turtle attacks, front headlocks" },
  "Turtle": { icon: "◰", desc: "Breaking down, recovering guard, attacking from turtle" },
  "Submissions": { icon: "◈", desc: "Chokes, joint locks, and finishing mechanics" },
  "Takedowns": { icon: "⤴", desc: "Single leg, double leg, hip throws, body locks" },
  "Scramble": { icon: "⟳", desc: "Chaos management, surface adaptability, creative starts" },
  "Striking": { icon: "○", desc: "Head position, clinch control, range management" },
  "Knee on Belly": { icon: "◩", desc: "Pressure maintenance, attacks from KoB" },
  "North-South": { icon: "⏤", desc: "Pin maintenance, connection use" },
  "Other": { icon: "◇", desc: "Mixed position games" },
};

export default function GamesLab() {
  // Navigation state: null = categories, string = broad position selected
  const [navPosition, setNavPosition] = useState(null);
  const [navPhase, setNavPhase] = useState(null);

  // Search bypasses drill-down
  const [searchQuery, setSearchQuery] = useState("");

  // Current game overlay
  const [overlayGame, setOverlayGame] = useState(null);

  // All games with normalized positions
  const gamesWithPos = useMemo(() =>
    gamesData.map(g => ({ ...g, broadPos: normalizePosition(g.position) })),
  []);

  // Count games per broad position
  const positionCounts = useMemo(() => {
    const counts = {};
    gamesWithPos.forEach(g => {
      counts[g.broadPos] = (counts[g.broadPos] || 0) + 1;
    });
    return counts;
  }, [gamesWithPos]);

  // Filtered games for current drill-down state
  const drillGames = useMemo(() => {
    let filtered = gamesWithPos;
    if (navPosition) filtered = filtered.filter(g => g.broadPos === navPosition);
    if (navPhase !== null) filtered = filtered.filter(g => g.phase === navPhase);
    return filtered;
  }, [gamesWithPos, navPosition, navPhase]);

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return gamesWithPos.filter(g =>
      g.name.toLowerCase().includes(q) ||
      (g.skill || "").toLowerCase().includes(q) ||
      (g.tags || []).some(t => t.toLowerCase().includes(q)) ||
      g.broadPos.toLowerCase().includes(q)
    );
  }, [gamesWithPos, searchQuery]);

  // Handle random draw
  const pickRandom = () => {
    const pool = drillGames.length > 0 ? drillGames : gamesWithPos;
    const game = pool[Math.floor(Math.random() * pool.length)];
    const caps = gameCapacityMap[game.id] ? Object.keys(gameCapacityMap[game.id]) : [];
    setOverlayGame({ game, capacities: caps, position: { x: window.innerWidth / 2, y: window.innerHeight / 3 } });
  };

  // Open game overlay
  const openGame = (game, e) => {
    const caps = gameCapacityMap[game.id] ? Object.keys(gameCapacityMap[game.id]) : [];
    setOverlayGame({
      game,
      capacities: caps,
      position: e ? { x: e.clientX, y: e.clientY } : { x: window.innerWidth / 2, y: 200 },
    });
  };

  // Phase counts for current position
  const phaseCounts = useMemo(() => {
    if (!navPosition) return {};
    const filtered = gamesWithPos.filter(g => g.broadPos === navPosition);
    const counts = {};
    filtered.forEach(g => {
      counts[g.phase] = (counts[g.phase] || 0) + 1;
    });
    return counts;
  }, [gamesWithPos, navPosition]);

  const renderBreadcrumb = () => (
    <div className="flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase text-concrete mb-6">
      <button onClick={() => { setNavPosition(null); setNavPhase(null); setSearchQuery(""); }}
        className="hover:text-royal-white transition-colors">
        Game Library
      </button>
      {navPosition && (
        <>
          <span>/</span>
          <button onClick={() => setNavPhase(null)} className="hover:text-royal-white transition-colors">
            {navPosition}
          </button>
        </>
      )}
      {navPhase !== null && (
        <>
          <span>/</span>
          <span className="text-ash">{phaseNames[navPhase]}</span>
        </>
      )}
    </div>
  );

  // ── SEARCH MODE: show results ──
  if (searchResults !== null) {
    return (
      <div className="flex-1 bg-void pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[1px] bg-visceral-crimson"></div>
              <span className="font-clinical text-[10px] tracking-[0.4em] uppercase text-albedo/40">Coaching Tools</span>
            </div>
            <div className="flex items-center gap-4">
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search games by name, position, skill, or tag..."
                className="flex-1 bg-void border border-elevated text-royal-white px-4 py-3 text-sm font-clinical tracking-widest uppercase placeholder:text-concrete/50 focus:outline-none focus:border-phosphor-green transition-colors" autoFocus />
              <button onClick={() => setSearchQuery("")} className="font-clinical text-[9px] tracking-wider uppercase text-concrete hover:text-royal-white">&times; Clear</button>
            </div>
            <p className="text-concrete text-[10px] mt-2 tracking-wider">{searchResults.length} games match &quot;{searchQuery}&quot;</p>
          </header>

          {searchResults.length === 0 && (
            <p className="font-clinical text-xs tracking-wider text-concrete py-12 text-center">No games match your search. Try a different term.</p>
          )}

          <div className="space-y-1">
            {searchResults.map(game => (
              <div key={game.id} onClick={(e) => openGame(game, e)}
                className="group p-4 border border-white/5 hover:border-white/20 hover:bg-white/[0.01] cursor-pointer transition-all">
                <div className="flex items-center gap-4">
                  <span className="font-clinical text-[9px] tracking-[0.3em] uppercase text-visceral-crimson font-bold w-14 shrink-0">P{game.phase}</span>
                  <span className="font-clinical text-[8px] tracking-wider uppercase text-concrete w-24 shrink-0">{game.broadPos}</span>
                  <div className="min-w-0">
                    <h3 className="font-arcane text-base tracking-widest uppercase text-royal-white group-hover:text-visceral-crimson transition-colors truncate">{game.name}</h3>
                    <p className="font-sans text-[10px] text-albedo/40 tracking-wider truncate">{game.skill}</p>
                  </div>
                  <span className="font-clinical text-[8px] tracking-wider text-ash shrink-0 ml-auto">{game.duration} min</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {overlayGame && (
          <GameOverlay game={overlayGame.game} capacities={overlayGame.capacities}
            position={overlayGame.position} onClose={() => setOverlayGame(null)} />
        )}
      </div>
    );
  }

  // ── DRILL-DOWN MODE ──
  return (
    <div className="flex-1 bg-void pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-visceral-crimson"></div>
            <span className="font-clinical text-[10px] tracking-[0.4em] uppercase text-albedo/40">Coaching Tools</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-kinetic text-5xl md:text-7xl uppercase tracking-tighter text-albedo mb-2">Game Lab</h1>
              <p className="font-sans text-sm text-albedo/40 max-w-xl">Select a category to browse games, or search directly.</p>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search games..."
                  className="w-56 bg-void border border-elevated text-royal-white px-4 py-3 text-sm font-clinical tracking-widest uppercase placeholder:text-concrete/50 focus:outline-none focus:border-phosphor-green transition-colors" />
              </div>
              <button onClick={pickRandom}
                className="px-6 py-3 bg-albedo text-void font-clinical text-xs uppercase tracking-[0.2em] font-bold hover:bg-visceral-crimson hover:text-albedo transition-colors flex items-center gap-2">
                <Shuffle className="w-4 h-4" /> Random
              </button>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        {renderBreadcrumb()}

        {/* ── PHASE SELECTION (when a position is chosen) ── */}
        {navPosition && navPhase === null && (
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setNavPhase(null)}
                className="px-5 py-3 border border-phosphor-green text-phosphor-green text-[10px] tracking-[0.3em] uppercase font-clinical font-bold">
                All Phases
              </button>
              {[1, 2, 3, 4].map(p => (
                <button key={p} onClick={() => setNavPhase(p)}
                  className="px-5 py-3 border border-elevated text-concrete hover:text-royal-white hover:border-white/30 text-[10px] tracking-[0.3em] uppercase font-clinical transition-all">
                  {phaseNames[p]} <span className="text-ash ml-2">({phaseCounts[p] || 0})</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── CATEGORY TILES (when no position selected) ── */}
        {!navPosition && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {broadPositions.filter(p => (positionCounts[p] || 0) > 0).map(pos => {
              const meta = categoryMeta[pos] || { icon: "◇", desc: "" };
              return (
                <button key={pos} onClick={() => { setNavPosition(pos); setNavPhase(null); }}
                  className="group border border-elevated bg-white/[0.02] p-6 text-left hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="text-3xl text-concrete group-hover:text-royal-white mb-3 transition-colors">{meta.icon}</div>
                  <h3 className="font-clinical text-xs tracking-[0.3em] uppercase text-royal-white group-hover:text-visceral-crimson transition-colors mb-1">{pos}</h3>
                  <p className="font-sans text-[11px] text-concrete/70 leading-snug mb-3">{meta.desc}</p>
                  <span className="font-clinical text-[9px] tracking-wider uppercase text-ash">{positionCounts[pos]} games</span>
                </button>
              );
            })}
          </div>
        )}

        {/* ── GAME LIST (when position + optionally phase selected) ── */}
        {navPosition && drillGames.length > 0 && (
          <div className="space-y-1 mt-4">
            <p className="font-clinical text-[9px] tracking-[0.3em] uppercase text-concrete mb-4">{drillGames.length} games</p>
            {drillGames.map((game, idx) => (
              <motion.div key={game.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.02 }}
                onClick={(e) => openGame(game, e)}
                className="group p-4 border border-white/5 hover:border-white/20 hover:bg-white/[0.01] cursor-pointer transition-all">
                <div className="flex items-center gap-4">
                  <span className="font-clinical text-[9px] tracking-[0.3em] uppercase text-visceral-crimson font-bold w-14 shrink-0">P{game.phase}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-arcane text-base tracking-widest uppercase text-royal-white group-hover:text-visceral-crimson transition-colors truncate">{game.name}</h3>
                    <p className="font-sans text-[10px] text-albedo/40 tracking-wider truncate">{game.skill}</p>
                  </div>
                  <span className="font-clinical text-[8px] tracking-wider text-ash shrink-0">{game.duration} min</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ── Empty state ── */}
        {navPosition && drillGames.length === 0 && (
          <div className="py-16 text-center">
            <p className="font-clinical text-xs tracking-wider text-concrete">No games match this combination. Try a different phase filter.</p>
          </div>
        )}

        {/* ── Nav link ── */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <Link href="/coach-tools/capacity-map"
            className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete hover:text-phosphor-green transition-colors">
            &larr; Back to Capacity Map
          </Link>
        </div>
      </div>

      {overlayGame && (
        <GameOverlay game={overlayGame.game} capacities={overlayGame.capacities}
          position={overlayGame.position} onClose={() => setOverlayGame(null)} />
      )}
    </div>
  );
}
