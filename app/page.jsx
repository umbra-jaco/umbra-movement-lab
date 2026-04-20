"use client";

import { motion } from "framer-motion";
import { ArrowRight, Orbit, Activity, Crosshair } from "lucide-react";
import BentoGrid from "../components/BentoGrid"; // Adjust to "./components/BentoGrid" if inside the app directory
import Curriculum from "@/components/Curriculum"; // or "../components/Curriculum" depending on your pathing

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

            {/* Background Layer: Cinematic Spotlight Simulation
          (Replace this div with your actual looping cinematic B-Roll <video> tag later)
      */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-umbra-navy/20 via-void to-void opacity-80" />

            {/* Grid Overlay for Brutalist/CAD-style scaling */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] mix-blend-overlay" />

            {/* Main Hero Architecture */}
            <div className="container relative z-10 mx-auto px-6 pt-32 pb-24 md:pt-48">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="max-w-5xl"
                >
                    {/* Clinical Data Accent */}
                    <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                        <Orbit className="text-visceral-crimson w-5 h-5 animate-[spin_10s_linear_infinite]" />
                        <span className="font-clinical text-xs tracking-[0.3em] uppercase text-visceral-crimson">
              Protocol: Inner Crucible
            </span>
                    </motion.div>

                    {/* Kinetic Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-kinetic text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tighter mb-8"
                    >
                        Haptic Dominance <br />
                        <span className="text-white/40">Over Optic Reliance.</span>
                    </motion.h1>

                    {/* Editorial Warmth / Prose */}
                    <motion.p
                        variants={itemVariants}
                        className="font-editorial text-xl md:text-2xl text-albedo-cream/80 max-w-2xl leading-relaxed mb-12"
                    >
                        We are not a gym. We are a laboratory for human-centric movement.
                        Replacing rote drills with ecological dynamics, profound calmness,
                        and total haptic awareness.
                    </motion.p>

                    {/* Action Nodes */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
                        <button className="haptic-node font-clinical uppercase tracking-widest text-sm px-8 py-5 flex items-center justify-center gap-3 text-albedo-cream group">
                            Initiate Assessment
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-visceral-crimson" />
                        </button>
                        <button className="liquid-glass font-clinical uppercase tracking-widest text-sm px-8 py-5 flex items-center justify-center text-albedo-cream hover:bg-white/10 transition-colors">
                            Read The Codex
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Diagnostic Card (Liquid Glass Example) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
                className="hidden lg:flex absolute right-12 bottom-24 liquid-glass p-6 flex-col gap-4 max-w-xs"
            >
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                    <span className="font-clinical text-xs tracking-widest uppercase text-white/50">Live Matrix</span>
                    <Activity className="text-phosphor-green w-4 h-4" />
                </div>

                <div className="space-y-4">
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <span className="font-clinical text-xs text-white/70">Kinetic Flow</span>
                            <span className="font-clinical text-xs text-phosphor-green">Optimized</span>
                        </div>
                        <div className="w-full h-1 bg-void-black overflow-hidden">
                            <div className="w-[85%] h-full bg-phosphor-green/80" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <span className="font-clinical text-xs text-white/70">Visual Noise</span>
                            <span className="font-clinical text-xs text-white/40">Eliminated</span>
                        </div>
                        <div className="w-full h-1 bg-void-black overflow-hidden">
                            <div className="w-[10%] h-full bg-visceral-crimson/80" />
                        </div>
                    </div>
                </div>
            </motion.div>
            <BentoGrid />
            <Curriculum />

        </div>
    );
}