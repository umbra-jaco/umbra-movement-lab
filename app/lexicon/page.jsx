"use client";

import { motion } from "framer-motion";
import { Hash, Activity, Zap, Compass, Target, Info } from "lucide-react";
import Link from 'next/link';
import { useState } from "react";

const lexiconData = [
    // --- PEDAGOGY & ECOLOGICAL DYNAMICS ---
    { id: "PED-01", category: "Pedagogy", term: "Affordance", definition: "Coined by James J. Gibson. A possibility for action provided by the environment. In the lab, we don't see objects; we perceive affordances—surfaces for base rotation or leverage points for force dissipation." },
    { id: "PED-02", category: "Pedagogy", term: "Constraints-Led Approach (CLA)", definition: "A framework for learning where technical skills emerge through the manipulation of boundaries (Task, Individual, Environment) rather than verbal instruction or rote drills." },
    { id: "PED-03", category: "Pedagogy", term: "Degrees of Freedom", definition: "The number of independent ways the body can move. Beginners often 'freeze' degrees of freedom out of fear; UMBRA protocols teach you to 'release' and coordinate them fluently." },
    { id: "PED-04", category: "Pedagogy", term: "Perception-Action Coupling", definition: "The fundamental loop where our actions are guided by what we perceive, and our perception is refined by how we move. Breaking this loop results in 'mechanical jerk'." },
    { id: "PED-05", category: "Pedagogy", term: "Self-Organization", definition: "The process where a system (the practitioner) achieves a stable movement pattern without a central controller or 'coach' dictating the form. It is the heart of the Inner Crucible." },
    { id: "PED-06", category: "Pedagogy", term: "Repetition Without Repetition", definition: "Nikolai Bernstein's principle. Practicing the same task multiple times but never in the exact same way. This builds adaptable, 'liquid' movement rather than rigid habits." },
    { id: "PED-07", category: "Pedagogy", term: "Attractor State", definition: "A stable pattern of movement that the body naturally gravitates toward under pressure. We use constraints to shift your attractors toward higher efficiency." },
    { id: "PED-08", category: "Pedagogy", term: "Skill Acquisition", definition: "In the UMBRA framework, skill is not 'having' a technique; it is the ability to find a functional solution to a movement problem in real-time." },

    // --- PHYSICS & BIO-MECHANICS ---
    { id: "PHY-01", category: "Physics", term: "Lagrangian Mechanics", definition: "A reformulation of classical physics used to find the 'Path of Least Action.' We map these principles to biomechanics to find the most efficient movement path with minimal energy cost." },
    { id: "PHY-02", category: "Physics", term: "Dissipative System", definition: "A system that maintains its structure by constantly dissipating energy. The human body is a dissipative system; movement is the mechanism of that dissipation." },
    { id: "PHY-03", category: "Physics", term: "Non-Equilibrium", definition: "A state far from balance where transformation occurs. UMBRA training intentionally keeps you in non-equilibrium to force systemic adaptation." },
    { id: "PHY-04", category: "Physics", term: "Perturbation", definition: "An external force or 'disturbance' applied to the system. We use partner-driven perturbation to test the integrity of your 'Internal Column'." },
    { id: "PHY-05", category: "Physics", term: "d'Alembert's Principle", definition: "States that the sum of the differences between the forces acting on a system and the time derivatives of the momenta is zero. It is the physics of 'effortless' redirection." },
    { id: "PHY-06", category: "Physics", term: "Entropy", definition: "The measure of disorder in a system. In movement, high entropy is chaotic; we use haptic awareness to reduce kinetic entropy and find 'The Quiet Path'." },
    { id: "PHY-07", category: "Physics", term: "Phase Space", definition: "A map of all possible states of a system. In the lab, we explore your 'Movement Phase Space' to expand your options for physical problem-solving." },

    // --- UMBRA BRAND & PHILOSOPHY ---
    { id: "UMB-01", category: "Aesthetics", term: "The Inner Crucible", definition: "The private, essential ritual of self-discovery through high-stress physical adaptation. The point where the ego burns away and movement becomes truth." },
    { id: "UMB-02", category: "Aesthetics", term: "Radical Occlusion", definition: "The intentional elimination of 'optic noise.' By removing mirrors and peripheral light, we force the brain to 'see' through haptic (tactile) input alone." },
    { id: "UMB-03", category: "Aesthetics", term: "Haptic Dominance", definition: "A state of awareness where tactile sensation and kinesthetic feedback become the primary drivers of action, overriding the slower, more fallible visual system." },
    { id: "UMB-04", category: "Aesthetics", term: "Chiaroscuro", definition: "The treatment of extreme light and shade. We use this photographic principle in our spatial design to isolate the student and heighten psychological presence." },
    { id: "UMB-05", category: "Aesthetics", term: "Visceral Crimson", definition: "Hex code #8A0303. Representing the structural thread of the brand, the blood-flow of the catalyst, and the 'heat' of the crucible." },
    { id: "UMB-06", category: "Aesthetics", term: "Royal Albedo", definition: "Hex code #F5F5F0. The measure of pure reflection. The spotlight that reveals form within the void." },
    { id: "UMB-07", category: "Aesthetics", term: "Move. Balance. Adapt.", definition: "The core UMBRA cycle. Establishing a baseline, maintaining equilibrium under pressure, and evolving the solution as the environment changes." },
    { id: "UMB-08", category: "Aesthetics", term: "The Void", definition: "The negative space of the lab. A neutral, brutalist environment designed to remove psychological interference and allow the student to exist without distractions." }
];

const categories = ["All", "Pedagogy", "Physics", "Aesthetics"];

export default function LexiconNode() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredLexicon = activeCategory === "All"
        ? lexiconData
        : lexiconData.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-void text-albedo selection:bg-visceral-crimson pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <header className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <Hash className="w-4 h-4 text-visceral-crimson" />
                        <span className="font-clinical text-xs tracking-[0.4em] uppercase text-white/40">
                            UMBRA Master Reference // Vol 01.01
                        </span>
                    </div>
                    <h1 className="font-kinetic text-6xl md:text-8xl uppercase tracking-tighter mb-8 leading-none">
                        The <span className="text-visceral-crimson">Lexicon.</span>
                    </h1>
                    <p className="font-editorial text-xl text-white/50 leading-relaxed italic max-w-2xl">
                        "If you cannot name the constraint, you cannot navigate the manifold."
                        A complete decryption of our movement architecture.
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Sticky Sidebar Navigation */}
                    <aside className="lg:w-1/4">
                        <div className="sticky top-32 space-y-8">
                            <div className="border-l border-white/10 pl-6 space-y-4">
                                <h4 className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">Sectors</h4>
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`block font-clinical text-xs uppercase tracking-widest transition-all duration-300 ${
                                            activeCategory === cat ? "text-visceral-crimson translate-x-2" : "text-white/40 hover:text-albedo"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <div className="p-6 bg-white/[0.02] border border-white/5 backdrop-blur-md">
                                <div className="flex items-center gap-2 mb-4">
                                    <Activity className="w-3 h-3 text-phosphor-green" />
                                    <span className="font-clinical text-[9px] tracking-widest uppercase text-white/60 text-phosphor-green font-bold">System Status</span>
                                </div>
                                <p className="font-clinical text-[10px] text-white/20 uppercase leading-relaxed">
                                    Indexing Complete. <br />
                                    Entries: {lexiconData.length} <br />
                                    Source: Unified Codex Matrix
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Lexicon Grid / List */}
                    <main className="lg:w-3/4 space-y-2">
                        {filteredLexicon.map((entry, index) => (
                            <motion.div
                                key={entry.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.03 }}
                                className="group p-8 border-b border-white/5 hover:bg-white/[0.01] transition-all duration-500 relative"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                                    <div className="space-y-1">
                                        <span className="font-clinical text-[9px] tracking-[0.3em] uppercase text-visceral-crimson font-bold">
                                            {entry.id} // {entry.category}
                                        </span>
                                        <h3 className="font-arcane text-3xl tracking-widest text-albedo uppercase group-hover:text-visceral-crimson transition-colors">
                                            {entry.term}
                                        </h3>
                                    </div>
                                    <div className="md:text-right">
                                        <div className="p-2 border border-white/10 rounded-full opacity-20 group-hover:opacity-100 group-hover:border-visceral-crimson/40 transition-all">
                                            <Target className="w-4 h-4 text-white group-hover:text-visceral-crimson" />
                                        </div>
                                    </div>
                                </div>

                                <p className="font-sans text-sm md:text-base text-white/40 leading-relaxed max-w-2xl group-hover:text-white/60 transition-colors">
                                    {entry.definition}
                                </p>
                            </motion.div>
                        ))}

                        {/* Return Node */}
                        <div className="pt-24 flex justify-center">
                            <Link
                                href="/"
                                className="group flex items-center gap-4 px-10 py-5 border border-white/10 hover:border-visceral-crimson transition-all"
                            >
                                <Compass className="w-4 h-4 text-white/20 group-hover:text-visceral-crimson" />
                                <span className="font-clinical text-xs tracking-[0.3em] uppercase text-white/60 group-hover:text-albedo transition-colors">
                                    Return to The Core
                                </span>
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}