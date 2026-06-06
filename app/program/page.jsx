"use client";

import { motion } from "framer-motion";
import { ArrowRight, Orbit } from "lucide-react";
import Link from "next/link";

// UMBRA Core Components
import Sentinel from "@/components/Sentinel";
import VoidedSphere from "@/components/VoidedSphere";
import DiagnosticOverlay from "@/components/DiagnosticOverlay";
import BentoGrid from "@/components/BentoGrid";
import Curriculum from "@/components/Curriculum";

// Animation Variants for Kinetic Fluidity
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 60, damping: 12 }
    },
};

export default function LandingPage() {
    return (
        <div className="relative min-h-screen bg-void flex flex-col justify-center overflow-hidden">

            {/* PHASE 02: THE SENTINEL
                Atmospheric engine: 4K loop, 35mm grain, and Chiaroscuro vignette.
            */}
            <Sentinel />

            {/* Main Hero Architecture */}
            <div className="container relative z-10 mx-auto px-6 pt-32 pb-24 md:pt-48">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="max-w-4xl"
                    >
                        {/* Clinical Data Accent */}
                        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                            <Orbit className="text-visceral-crimson w-5 h-5 animate-[spin_10s_linear_infinite]" />
                            <span className="font-clinical text-xs tracking-[0.4em] uppercase text-visceral-crimson font-bold">
                                Protocol: Inner Crucible
                            </span>
                        </motion.div>

                        {/* Kinetic Headline */}
                        <motion.h1
                            variants={itemVariants}
                            className="font-kinetic text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tighter mb-8"
                        >
                            Trust Your <br />
                            <span className="text-white/40 italic">Body to Know What To Do.</span>
                        </motion.h1>

                        {/* Editorial Warmth / Prose */}
                        <motion.p
                            variants={itemVariants}
                            className="font-editorial text-xl md:text-2xl text-albedo/70 max-w-2xl leading-relaxed mb-12"
                        >
                            Four weeks of learning how your body actually wants to move, through games, not drills. There is no sparring, no pressure, and zero expectation that you have ever done this before. Just a room, a partner, and a series of puzzles you solve together.
                        </motion.p>

                        {/* Action Nodes */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
                            <Link
                                href="/book"
                                className="haptic-node font-clinical uppercase tracking-widest text-sm px-10 py-5 flex items-center justify-center gap-3 text-albedo group border border-white/10 hover:border-visceral-crimson transition-all duration-500"
                            >
                                Start Your 4-Week Journey
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-visceral-crimson" />
                            </Link>
                            <Link
                                href="/lexicon"
                                className="liquid-glass font-clinical uppercase tracking-widest text-sm px-10 py-5 flex items-center justify-center text-albedo/60 hover:text-albedo hover:bg-white/10 transition-all border border-white/5"
                            >
                                How It Works
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* THE ATTRACTOR
                        Interactive sphere responding to system perturbations.
                    */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1.5 }}
                        className="hidden xl:block"
                    >
                        <VoidedSphere />
                    </motion.div>
                </div>
            </div>

            {/* LIVE DIAGNOSTIC OVERLAY
                Real-time Edge metrics and SAR mapping data.
            */}
            <DiagnosticOverlay />

            {/* SECONDARY NODES
                Supporting architectural blocks for physics and curriculum.
            */}
            <BentoGrid />
            <Curriculum />

        </div>
    );
}