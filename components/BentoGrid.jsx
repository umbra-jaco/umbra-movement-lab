"use client";

import { motion } from "framer-motion";
import { Maximize, Zap, Waves, Crosshair } from "lucide-react";

const gridVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 60, damping: 15 }
    },
};

export default function BentoGrid() {
    return (
        <section className="relative z-10 container mx-auto px-6 py-24 border-t border-white/5">
            <div className="mb-16">
                <h2 className="font-kinetic text-3xl md:text-5xl uppercase tracking-tighter text-albedo mb-4">
                    Lagrangian Mechanics <br/>
                    <span className="text-white/40">Mapped to Human Biomechanics.</span>
                </h2>
                <p className="font-editorial text-lg text-albedo-cream/70 max-w-2xl">
                    We treat the human body as a dissipative system. By manipulating environmental constraints, we force kinetic optimization and eliminate rote memorization.
                </p>
            </div>

            <motion.div
                variants={gridVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]"
            >
                {/* Node 1: Ecological Dynamics */}
                <motion.div variants={cardVariants} className="liquid-glass p-8 flex flex-col justify-between md:col-span-2 md:row-span-2 group border border-white/10 hover:border-visceral-crimson/50 transition-colors">
                    <div className="flex justify-between items-start">
                        <span className="font-clinical text-xs tracking-[0.2em] text-phosphor-green uppercase">Principle 01</span>
                        <Maximize className="text-white/20 w-6 h-6 group-hover:text-albedo transition-colors duration-500" />
                    </div>
                    <div>
                        <h3 className="font-kinetic text-4xl uppercase mb-3">Ecological Dynamics</h3>
                        <p className="font-sans text-white/60 leading-relaxed max-w-md">
                            Movement is an emergent property of interaction, not a sequence of drills. We solve physical puzzles in real-time through the Constraints-Led Approach (CLA), fostering haptic awareness over optic reliance.
                        </p>
                    </div>
                </motion.div>

                {/* Node 2: Acoustic Tension */}
                <motion.div variants={cardVariants} className="liquid-glass p-8 flex flex-col justify-between group border border-white/10 hover:border-visceral-crimson/50 transition-colors">
                    <div className="flex justify-between items-start">
                        <span className="font-clinical text-xs tracking-[0.2em] text-visceral-crimson uppercase">Sensory</span>
                        <Waves className="text-white/20 w-6 h-6 group-hover:text-albedo transition-colors duration-500" />
                    </div>
                    <div>
                        <h3 className="font-kinetic text-2xl uppercase mb-2">Acoustic Tension</h3>
                        <p className="font-sans text-sm text-white/60">
                            Low-frequency drones create immediate psychological presence.
                        </p>
                    </div>
                </motion.div>

                {/* Node 3: Radical Occlusion */}
                <motion.div variants={cardVariants} className="liquid-glass p-8 flex flex-col justify-between group border border-white/10 hover:border-visceral-crimson/50 transition-colors">
                    <div className="flex justify-between items-start">
                        <span className="font-clinical text-xs tracking-[0.2em] text-white/50 uppercase">Environment</span>
                        <Crosshair className="text-white/20 w-6 h-6 group-hover:text-albedo transition-colors duration-500" />
                    </div>
                    <div>
                        <h3 className="font-kinetic text-2xl uppercase mb-2">Radical Occlusion</h3>
                        <p className="font-sans text-sm text-white/60">
                            Zero mirrors. Extreme chiaroscuro spotlighting forces physical intuition.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}