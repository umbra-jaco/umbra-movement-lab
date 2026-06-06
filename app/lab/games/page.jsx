"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, Filter, Clock, ChevronDown, ChevronUp, Search } from "lucide-react";
import gamesData, { phaseNames, positions } from "@/lib/games";

export default function GamesLab() {
  const [activePhase, setActivePhase] = useState(null);
  const [activePosition, setActivePosition] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentGame, setCurrentGame] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [duration, setDuration] = useState(8);

  let filtered = gamesData;

  if (activePhase !== null) {
    filtered = filtered.filter(g => g.phase === activePhase);
  }
  if (activePosition) {
    filtered = filtered.filter(g => g.position === activePosition);
  }
  if (searchQuery) {
    const t = searchQuery.toLowerCase();
    filtered = filtered.filter(g =>
      g.name.toLowerCase().includes(t) ||
      g.skill.toLowerCase().includes(t) ||
      g.position.toLowerCase().includes(t)
    );
  }

  const pickRandom = () => {
    const pool = filtered.length > 0 ? filtered : gamesData;
    const game = pool[Math.floor(Math.random() * pool.length)];
    setCurrentGame(game);
    setShowDetails(true);
    setDuration(game.duration || 8);
  };

  return (
    <div className="min-h-screen bg-void pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-visceral-crimson"></div>
            <span className="font-clinical text-[10px] tracking-[0.4em] uppercase text-white/40">Coaching Tools</span>
          </div>
          <h1 className="font-kinetic text-5xl md:text-7xl uppercase tracking-tighter text-albedo mb-4">
            Game Lab
          </h1>
          <p className="font-sans text-sm text-white/40 max-w-xl">
            Browse, filter, and draw from your curated game library. Each game is designed for one skill.
          </p>
        </header>

        {/* Random Draw Button */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-start">
          <button
            onClick={pickRandom}
            className="px-8 py-4 bg-albedo text-void font-clinical text-sm uppercase tracking-[0.2em] font-bold hover:bg-visceral-crimson hover:text-albedo transition-colors duration-300 flex items-center gap-3"
          >
            <Shuffle className="w-4 h-4" />
            Draw Random Game
          </button>
          {currentGame && (
            <div className="flex items-center gap-4 text-sm text-white/40 font-clinical tracking-widest uppercase">
              <span>{filtered.length} games filtered</span>
              {currentGame && (
                <motion.button
                  onClick={() => {
                    const idx = filtered.indexOf(currentGame);
                    const next = filtered[(idx + 1) % filtered.length] || gamesData[0];
                    setCurrentGame(next);
                  }}
                  className="text-visceral-crimson hover:text-albedo transition-colors"
                >
                  Next Game &rarr;
                </motion.button>
              )}
            </div>
          )}
        </div>

        {/* Current Game Card */}
        <AnimatePresence mode="wait">
          {currentGame && (
            <motion.div
              key={currentGame.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="border border-white/10 bg-white/[0.02] p-8 md:p-12 mb-12"
            >
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 border border-visceral-crimson/40 text-[10px] tracking-[0.3em] uppercase text-visceral-crimson font-bold">
                  {phaseNames[currentGame.phase] || "Cross-Phase"}
                </span>
                <span className="px-3 py-1 border border-white/20 text-[10px] tracking-[0.3em] uppercase text-white/60">
                  {currentGame.position}
                </span>
                <span className="px-3 py-1 border border-white/20 text-[10px] tracking-[0.3em] uppercase text-white/60">
                  {currentGame.duration} min
                </span>
              </div>

              <h2 className="font-kinetic text-3xl md:text-5xl uppercase tracking-tighter text-albedo mb-4">
                {currentGame.name}
              </h2>

              <p className="font-sans text-sm text-visceral-crimson uppercase tracking-widest mb-6">
                {currentGame.skill}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Setup</h3>
                    <p className="font-sans text-sm text-white/70 leading-relaxed">{currentGame.setup}</p>
                  </div>
                  <div>
                    <h3 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Goal</h3>
                    <p className="font-sans text-sm text-white/70 leading-relaxed">{currentGame.goal}</p>
                  </div>
                  <div>
                    <h3 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Constraints</h3>
                    <p className="font-sans text-sm text-white/70 leading-relaxed">{currentGame.constraints}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Coaching Cue</h3>
                    <p className="font-sans text-sm text-white/70 leading-relaxed italic">{currentGame.cues}</p>
                  </div>
                  <div>
                    <h3 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Real-World Relevance</h3>
                    <p className="font-sans text-sm text-white/70 leading-relaxed">{currentGame.realWorld}</p>
                  </div>
                  <div>
                    <h3 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Timer</h3>
                    <p className="font-sans text-sm text-white/70">{currentGame.duration} minute round</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                <div>
                  <h3 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-phosphor-green mb-2">Easier</h3>
                  <p className="font-sans text-sm text-white/50">{currentGame.easier}</p>
                </div>
                <div>
                  <h3 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Harder</h3>
                  <p className="font-sans text-sm text-white/50">{currentGame.harder}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filters */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-white/40" />
            <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/40">Filters</span>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={() => setActivePhase(null)}
              className={`px-4 py-2 border text-[10px] tracking-[0.3em] uppercase transition-all ${
                activePhase === null ? "border-visceral-crimson text-visceral-crimson" : "border-white/10 text-white/40 hover:text-albedo hover:border-white/30"
              }`}
            >
              All
            </button>
            {[1, 2, 3, 4].map(p => (
              <button
                key={p}
                onClick={() => setActivePhase(activePhase === p ? null : p)}
                className={`px-4 py-2 border text-[10px] tracking-[0.3em] uppercase transition-all ${
                  activePhase === p ? "border-visceral-crimson text-visceral-crimson" : "border-white/10 text-white/40 hover:text-albedo hover:border-white/30"
                }`}
              >
                Phase {p}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {positions.map(pos => (
              <button
                key={pos}
                onClick={() => setActivePosition(activePosition === pos ? null : pos)}
                className={`px-3 py-1 border text-[9px] tracking-[0.2em] uppercase transition-all ${
                  activePosition === pos ? "border-visceral-crimson text-visceral-crimson" : "border-white/10 text-white/30 hover:text-albedo"
                }`}
              >
                {pos}
              </button>
            ))}
          </div>
        </section>

        {/* Game List */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/40">
              {filtered.length} game{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="space-y-1">
            <AnimatePresence>
              {filtered.map((game, idx) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: idx * 0.02 }}
                  onClick={() => {
                    setCurrentGame(game);
                    setShowDetails(true);
                    setDuration(game.duration || 8);
                  }}
                  className={`group p-5 border transition-all duration-300 cursor-pointer ${
                    currentGame?.id === game.id
                      ? "border-visceral-crimson/40 bg-white/[0.03]"
                      : "border-white/5 hover:border-white/20 hover:bg-white/[0.01]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-visceral-crimson font-bold w-16">
                        P{game.phase}
                      </span>
                      <div>
                        <h3 className="font-arcane text-lg tracking-widest uppercase text-albedo group-hover:text-visceral-crimson transition-colors">
                          {game.name}
                        </h3>
                        <p className="font-sans text-[11px] text-white/40 tracking-wider uppercase">
                          {game.position} &middot; {game.duration} min &middot; {game.skill}
                        </p>
                      </div>
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-white/10 group-hover:text-white/30 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </div>
  );
}

function ChevronRightIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
    </svg>
  );
}
