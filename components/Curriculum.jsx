"use client";

import { motion } from "framer-motion";
import { Fingerprint, Activity, Layers, Flame, ArrowRight } from "lucide-react";

const sectionVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 60, damping: 15 }
    },
};

const curriculumData = [
    {
        week: "Week 01",
        title: "Threshold & Connection",
        icon: <Fingerprint className="w-6 h-6 text-visceral-crimson" />,
        description: "Immediate live resistance through strict constraints. We eliminate dead-pattern drilling. Day 1 focuses on grip dynamics, base disruption, and kinesthetic listening. The goal is to solve the physical puzzle of another human body without panic.",
        objective: "Live positional sparring: Grip and Base maintenance."
    },
    {
        week: "Week 02",
        title: "Force Dissipation",
        icon: <Activity className="w-6 h-6 text-phosphor-green" />,
        description: "Understanding gravity and momentum. Practitioners learn off-balancing (Kuzushi) and sweeps via ecological games. You will learn to absorb and redirect force rather than meeting it with structural tension.",
        objective: "Live ecological games: 'Keep the back off the mat'."
    },
    {
        week: "Week 03",
        title: "Positional Dominance",
        icon: <Layers className="w-6 h-6 text-albedo/50" />,
        description: "Entering the haptic void of ground control. Focus shifts to pin maintenance and structural framing. You will learn to escape inferior positions under progressive, live resistance using only skeletal frames and breath control.",
        objective: "Live restricted rounds: Pin escapes and structural framing."
    },
    {
        week: "Week 04",
        title: "The Crucible",
        icon: <Flame className="w-6 h-6 text-visceral-crimson animate-pulse" />,
        description: "Unrestricted flow. Stringing movements together without conscious thought. Practitioners engage in full, continuous live grappling rounds, emphasizing calm problem-solving in deep waters.",
        objective: "Full live grappling integration."
    }
];

export default function Curriculum() {
    return (
        <section className="relative z-10 container mx-auto px-6 py-24 border-t border-white/5">
            <div className="max-w-3xl mb-16">
                <h2 className="font-kinetic text-3xl md:text-5xl uppercase tracking-tighter text-albedo mb-4">
                    Accelerated <br/>
                    <span className="text-albedo/40">Haptic Integration.</span>
                </h2>
                <p className="font-editorial text-lg text-albedo-cream/70">
                    The 4-Week Prototype Program. No rote memorization. No dead-drilling.
                    Live, constraint-led grappling from Day 1 to force immediate physical intuition.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* The Timeline (Left Side) */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="lg:col-span-7 space-y-8 relative"
                >
                    {/* The Crimson Monoline (Background Line) */}
                    <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-visceral-crimson via-visceral-blood to-transparent opacity-50 hidden md:block" />

                    {curriculumData.map((node, index) => (
                        <motion.div key={index} variants={itemVariants} className="relative flex flex-col md:flex-row gap-6 md:gap-8 group">
                            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-void border border-white/10 z-10 group-hover:border-visceral-crimson transition-colors duration-500">
                                {node.icon}
                            </div>
                            <div className="pt-2">
                <span className="font-clinical text-xs tracking-[0.2em] text-albedo/40 uppercase mb-2 block">
                  {node.week}
                </span>
                                <h3 className="font-kinetic text-2xl uppercase mb-3 text-albedo group-hover:text-visceral-crimson transition-colors">
                                    {node.title}
                                </h3>
                                <p className="font-sans text-albedo/60 text-sm leading-relaxed mb-4">
                                    {node.description}
                                </p>
                                <div className="inline-block liquid-glass px-4 py-2 border-l-2 border-l-phosphor-green">
                                    <p className="font-clinical text-xs tracking-widest uppercase text-albedo-cream/80">
                                        <span className="text-phosphor-green mr-2">Target:</span> {node.objective}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* The Conversion Node (Right Side) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="lg:col-span-5"
                >
                    <div className="sticky top-32 liquid-glass p-8 border border-white/10 flex flex-col">
                        <div className="mb-8">
                            <h3 className="font-kinetic text-3xl uppercase mb-2">Intake 01 <br/><span className="text-visceral-crimson">Registration</span></h3>
                            <p className="font-sans text-sm text-albedo/50">
                                The laboratory is strictly capped at 12 participants per cohort to ensure clinical oversight and physical safety.
                            </p>
                        </div>

                        <div className="space-y-6 mb-8">
                            <div className="flex justify-between border-b border-white/10 pb-4">
                                <span className="font-clinical text-xs tracking-widest text-albedo/60 uppercase">Status</span>
                                <span className="font-clinical text-xs tracking-widest text-phosphor-green uppercase animate-pulse">Accepting Candidates</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-4">
                                <span className="font-clinical text-xs tracking-widest text-albedo/60 uppercase">Duration</span>
                                <span className="font-clinical text-xs tracking-widest text-albedo uppercase">4 Weeks (8 Sessions)</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-4">
                                <span className="font-clinical text-xs tracking-widest text-albedo/60 uppercase">Requirement</span>
                                <span className="font-clinical text-xs tracking-widest text-albedo uppercase">Zero Prior Experience</span>
                            </div>
                        </div>

                        <button className="haptic-node w-full py-5 flex items-center justify-center gap-3 group mt-auto">
                            <span className="font-clinical text-sm tracking-[0.2em] uppercase text-albedo">Apply For Cohort</span>
                            <ArrowRight className="w-4 h-4 text-visceral-crimson group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}