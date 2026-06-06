"use client";

import { motion } from "framer-motion";
import { Fingerprint, Activity, Layers, Flame, ArrowRight } from "lucide-react";
import Link from 'next/link';

const curriculumData = [
    {
        week: "Phase 01",
        title: "Threshold & Connection",
        icon: <Fingerprint className="w-6 h-6 text-visceral-crimson" />,
        description: "You will learn to feel where your weight is, how to connect through your hands, and how to stay balanced when someone tries to move you. Day 1 focuses on grip dynamics, base disruption, and kinesthetic listening.",
        objective: "Maintenance of the Internal Column."
    },
    {
        week: "Phase 02",
        title: "Force Dissipation",
        icon: <Activity className="w-6 h-6 text-phosphor-green" />,
        description: "Discover how momentum works with your body, not against it. A small shift can redirect an entire person's force. You will learn Kuzushi (off-balancing) via ecological games and energy redirection.",
        objective: "Redefining the dissipative system."
    },
    {
        week: "Phase 03",
        title: "Adaptive Architecture",
        icon: <Layers className="w-6 h-6 text-albedo" />,
        description: "Face unpredictable situations that force your brain to find new solutions. No two rounds feel the same. We introduce variable boundaries that force the CNS to self-organize without conscious instruction.",
        objective: "Systemic self-organization."
    },
    {
        week: "Phase 04",
        title: "The Inner Crucible",
        icon: <Flame className="w-6 h-6 text-visceral-blood" />,
        description: "Flow continuously through problems, relying on feel rather than sight. This is where it all clicks. Transition from isolated games to a continuous flow of movement with minimal optic reliance.",
        objective: "Total immersion: The UMBRA Protocol."
    }
];

export default function CurriculumPage() {
    return (
        <div className="min-h-screen bg-void pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">

            {/* 1. FIXED WATERMARK: Pushed further back and down to avoid title collision */}
            <div className="absolute top-[20%] -right-20 font-kinetic text-[180px] text-white/[0.015] select-none pointer-events-none uppercase font-black rotate-90 lg:rotate-0">
                Lagrangian
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="max-w-3xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-6 h-[1px] bg-visceral-crimson" />
                        <span className="font-clinical text-[10px] tracking-[0.4em] uppercase text-white/40">Pedagogical Framework</span>
                    </motion.div>

                    <h1 className="font-kinetic text-5xl md:text-8xl uppercase tracking-tighter text-albedo mb-8">
                        The <span className="text-visceral-crimson">Curriculum</span>
                    </h1>
                    <p className="font-editorial text-xl text-white/50 leading-relaxed max-w-3xl">
                        Four phases, four Saturdays. Each session builds on the last. By the end, you will not just know how to move. You will trust your body to figure it out under pressure.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-white/5 pt-16">
                    {curriculumData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="liquid-glass p-10 border border-white/5 group hover:border-visceral-crimson/20 transition-all duration-700"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div className="space-y-1">
                                    <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-visceral-crimson font-bold">
                                        {item.week}
                                    </span>
                                    <h3 className="font-arcane text-2xl tracking-widest text-albedo uppercase">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="p-4 bg-void border border-white/5 rounded-full group-hover:border-visceral-crimson/40 transition-colors">
                                    {item.icon}
                                </div>
                            </div>

                            <p className="font-sans text-white/40 text-sm leading-relaxed mb-12 group-hover:text-white/60 transition-colors">
                                {item.description}
                            </p>

                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className="font-clinical text-[9px] tracking-[0.3em] uppercase text-white/20">
                                    System Objective
                                </span>
                                <span className="font-clinical text-[11px] text-albedo/40 uppercase tracking-wider">
                                    {item.objective}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 2. FIXED FORMULA: Rendered as a styled "Data Readout" */}
                <section className="mt-32 p-12 border border-white/5 bg-white/[0.01] backdrop-blur-sm relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-visceral-crimson opacity-20 group-hover:opacity-100 transition-opacity" />

                    <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
                        <div className="max-w-xl">
                            <h2 className="font-kinetic text-2xl uppercase tracking-tighter text-albedo mb-4">
                                Principle of Least Action
                            </h2>
                            <p className="font-editorial text-sm text-white/30 italic max-w-xl mb-4">
                                A fancy way of saying your body always finds the easiest path. We just help it see the options.
                            </p>
                            <p className="font-clinical text-[11px] text-white/30 leading-relaxed uppercase tracking-[0.15em]">
                                Optimization is found in the path of least resistance.
                                By minimizing the action integral, the system achieves
                                equilibrium through ecological necessity.
                            </p>
                        </div>

                        {/* Styled mathematical readout to replace raw LaTeX code */}
                        <div className="font-editorial text-3xl md:text-5xl text-visceral-crimson/30 tracking-tighter select-none">
                            δ ∫ L(q, q̇, t) dt = 0
                        </div>
                    </div>
                </section>

                {/* Book Now CTA */}
                <section className="mt-32 flex flex-col items-center text-center">
                    <h2 className="font-kinetic text-3xl uppercase tracking-tighter text-albedo mb-4">
                        Ready to Try It?
                    </h2>
                    <p className="font-sans text-white/40 text-sm max-w-md mb-8">
                        Four Saturdays. No experience needed. Just show up and move.
                    </p>
                    <Link href="/book" className="px-8 py-4 bg-albedo text-void font-clinical text-sm uppercase tracking-[0.2em] font-bold hover:bg-visceral-crimson hover:text-albedo transition-colors duration-300">
                        Book Your Spot
                    </Link>
                </section>
            </div>
        </div>
    );
}