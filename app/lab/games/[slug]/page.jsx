"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import games from "@/lib/games";

export default function GameDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const game = games.find(g => g.id === slug);

  if (!game) {
    return (
      <div className="min-h-screen bg-void pt-32 px-6 flex flex-col items-center justify-center">
        <h1 className="font-kinetic text-4xl uppercase text-royal-white mb-4">Game Not Found</h1>
        <Link href="/lab/games" className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete hover:text-royal-white transition-colors">&larr; Back to Game Lab</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-void pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/lab/games" className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete hover:text-royal-white transition-colors">
          &larr; Back to Game Lab
        </Link>

        <div className="mt-8">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 border border-visceral-crimson/40 text-[10px] tracking-[0.3em] uppercase text-visceral-crimson font-bold">Phase {game.phase}</span>
            <span className="px-3 py-1 border border-elevated text-[10px] tracking-[0.3em] uppercase text-concrete">{game.position}</span>
            <span className="px-3 py-1 border border-elevated text-[10px] tracking-[0.3em] uppercase text-concrete">{game.duration} min</span>
          </div>
          <h1 className="font-kinetic text-4xl md:text-6xl uppercase tracking-tighter text-royal-white mb-2">{game.name}</h1>
          <p className="font-clinical text-xs tracking-widest uppercase text-phosphor-green mb-12">{game.skill}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-8">
              <div><h2 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete mb-3">Setup</h2><p className="font-sans text-sm md:text-base text-royal-white leading-relaxed">{game.setup}</p></div>
              <div><h2 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete mb-3">Goal</h2><p className="font-sans text-sm md:text-base text-royal-white leading-relaxed">{game.goal}</p></div>
              <div><h2 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete mb-3">Constraints</h2><p className="font-sans text-sm md:text-base text-royal-white leading-relaxed">{game.constraints}</p></div>
            </div>
            <div className="space-y-8">
              <div><h2 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete mb-3">Coaching Cue</h2><p className="font-sans text-sm md:text-base text-royal-white leading-relaxed italic">{game.cues}</p></div>
              <div><h2 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete mb-3">Real-World Relevance</h2><p className="font-sans text-sm md:text-base text-royal-white leading-relaxed">{game.realWorld}</p></div>
            </div>
          </div>

          <div className="border-t border-elevated pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div><h2 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-phosphor-green mb-2">Easier</h2><p className="font-sans text-sm text-concrete">{game.easier}</p></div>
            <div><h2 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-ash mb-2">Harder</h2><p className="font-sans text-sm text-concrete">{game.harder}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
