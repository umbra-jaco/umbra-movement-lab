"use client";

import { motion } from "framer-motion";
import { MapPin, Maximize, MonitorOff, SunMedium, ArrowRight } from "lucide-react";
import Link from "next/link";

const labSpecs = [
    {
        icon: <SunMedium className="w-5 h-5 text-visceral-crimson" />,
        title: "Photometric Occlusion",
        detail: "Single-source overhead lighting. High-contrast spill. We eliminate peripheral visual noise to force reliance on haptic feedback."
    },
    {
        icon: <MonitorOff className="w-5 h-5 text-visceral-crimson" />,
        title: "Zero-Mirror Policy",
        detail: "The elimination of the 'optic loop.' By removing self-observation, we force the practitioner to feel the movement from the internal column."
    },
    {
        icon: <Maximize className="w-5 h-5 text-visceral-crimson" />,
        title: "Brutalist Geometry",
        detail: "Raw concrete surfaces and open negative space. An environment designed to minimize psychological interference."
    }
];

export default function LabNode() {
    return (
        <div className="min-h-screen bg-void text-albedo pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">

            {/* Coordination Data Overlay */}
            <div className="absolute top-32 right-12 hidden lg:block text-right">
                <span className="font-clinical text-[10px] tracking-[0.5em] uppercase text-white/20 block mb-2">Location Coordinates</span>
                <span className="font-clinical text-xs tracking-widest text-albedo/40 uppercase">38.7521° N, 121.2880° W // Roseville, CA</span>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Hero Section */}
                <header className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="w-12 h-[1px] bg-visceral-crimson" />
                        <span className="font-clinical text-xs tracking-[0.4em] uppercase text-visceral-crimson font-bold">
                            Spatial Manifest
                        </span>
                    </motion.div>

                    <h1 className="font-kinetic text-6xl md:text-9xl uppercase tracking-tighter leading-[0.8] mb-12">
                        The <br /> Sanctuary.
                    </h1>

                    <p className="font-editorial text-xl md:text-2xl text-white/50 max-w-3xl leading-relaxed">
                        A laboratory designed for the <span className="text-albedo">Inner Crucible</span>.
                        We have stripped away the vanity of traditional spaces to create a
                        controlled environment where adaptation is the only option.
                    </p>
                </header>

                {/* Spatial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="aspect-[4/5] bg-neutral-900 border border-white/5 relative overflow-hidden group"
                    >
                        {/* Placeholder for Cinematic Editorial Photography of the Lab */}
                        <div className="absolute inset-0 bg-[url('/lab-placeholder.jpg')] bg-cover bg-center grayscale contrast-125 opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />

                        <div className="absolute bottom-8 left-8">
                            <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2 block">Visual Data // 01</span>
                            <h3 className="font-arcane text-xl tracking-widest uppercase">The Main Floor</h3>
                        </div>
                    </motion.div>

                    <div className="space-y-16">
                        {labSpecs.map((spec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="border-l border-white/10 pl-8 hover:border-visceral-crimson transition-colors duration-500"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    {spec.icon}
                                    <h4 className="font-clinical text-sm tracking-[0.2em] uppercase text-albedo">
                                        {spec.title}
                                    </h4>
                                </div>
                                <p className="font-sans text-sm text-white/40 leading-relaxed max-w-sm">
                                    {spec.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Access Terminal */}
                <section className="border-t border-white/5 pt-24">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                        <div className="max-w-xl">
                            <h2 className="font-kinetic text-4xl uppercase tracking-tighter text-albedo mb-6">
                                Entry Protocol
                            </h2>
                            <p className="font-clinical text-sm text-white/40 uppercase tracking-widest leading-loose">
                                The lab is not open to the public. Entry is granted through
                                4-week immersion cohorts or private initiation. We strictly
                                limit occupancy to preserve the acoustic and spatial integrity
                                of the movement lab.
                            </p>
                        </div>

                        <Link
                            href="https://instagram.com/umbramovement"
                            className="group flex items-center gap-6 p-8 border border-white/10 bg-white/5 hover:border-visceral-crimson transition-all duration-500"
                        >
                            <div className="space-y-1">
                                <span className="font-clinical text-xs tracking-[0.3em] uppercase text-visceral-crimson block font-bold">Initiate</span>
                                <span className="font-arcane text-xl tracking-widest uppercase text-albedo">Request Access</span>
                            </div>
                            <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-visceral-crimson group-hover:translate-x-2 transition-all" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}