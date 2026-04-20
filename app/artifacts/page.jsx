"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

// --- ARCHIVE REGISTRY ---
// Hotswap these objects for new drops.
// Use "status: 'archived'" to greyscale/disable items.
const artifactRegistry = [
    {
        id: "UM-01-SR",
        name: "Shadow Rashguard",
        series: "Void Series",
        price: "$85",
        status: "active",
        material: "Interlocked Technical Compression",
        description: "Matte-black base with high-density visceral crimson monoline stitching. Engineered for thermal regulation during the Inner Crucible.",
        image: "/artifacts/shadow-rashguard.jpg", // Hotswap media path here
        specs: ["UV50+ Protection", "Anti-Friction Seams", "Reinforced Hem"]
    },
    {
        id: "UM-04-HV",
        name: "Codex Heavyweight",
        series: "Archive Essentials",
        price: "$65",
        status: "active",
        material: "450GSM Organic Cotton",
        description: "A structural garment featuring dropped shoulders and high-neck ribbing. The UMBRA logomark is embossed at the solar plexus—meant to be felt, not seen.",
        image: "/artifacts/codex-tee.jpg",
        specs: ["Oversized Fit", "Garment Dyed", "Pre-Shrunk"]
    },
    {
        id: "UM-09-GP",
        name: "Greyzone Technical Pant",
        series: "Tactical Manifold",
        price: "$145",
        status: "archived", // Greys out the card and adds 'Sold Out' status
        material: "Ripstop / Spandex Hybrid",
        description: "Adaptive lower-body architecture. Minimalist silhouette with hidden phosphor-green internal tags.",
        image: "/artifacts/greyzone-pants.jpg",
        specs: ["Water Repellent", "Diamond Crotch Gusset", "Magnetic Closures"]
    }
];

export default function ArtifactsNode() {
    return (
        <div className="min-h-screen bg-void text-albedo pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">

            {/* Background Branding Elements */}
            <div className="absolute -top-20 -left-20 font-kinetic text-[200px] text-white/[0.01] select-none pointer-events-none uppercase font-black">
                Archive
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-2xl">
                        <span className="font-clinical text-xs tracking-[0.4em] uppercase text-visceral-crimson mb-4 block">
                            Equipment & Apparel
                        </span>
                        <h1 className="font-kinetic text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-6">
                            Ascendant <br /> Artifacts.
                        </h1>
                        <p className="font-editorial text-xl text-white/50 leading-relaxed">
                            Physical extensions of the UMBRA philosophy. Engineered for performance,
                            designed for invisibility. Each artifact is a limited production run.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 border border-white/5 bg-white/5">
                            <div className="w-2 h-2 rounded-full bg-phosphor-green animate-pulse" />
                            <span className="font-clinical text-[10px] tracking-widest uppercase text-white/60">Live Drop</span>
                        </div>
                    </div>
                </header>

                {/* Artifact Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-white/5 pt-16">
                    {artifactRegistry.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className={`group relative flex flex-col md:flex-row gap-8 p-6 border transition-all duration-700 ${
                                item.status === 'archived'
                                    ? 'border-white/5 opacity-40 grayscale pointer-events-none'
                                    : 'border-white/10 hover:border-visceral-crimson/40 bg-white/[0.02]'
                            }`}
                        >
                            {/* Media Section */}
                            <div className="w-full md:w-1/2 aspect-square bg-neutral-900 border border-white/5 overflow-hidden relative">
                                {item.status === 'archived' && (
                                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-void/60">
                                        <span className="font-clinical text-xs tracking-[0.5em] uppercase text-white/80 border border-white/20 px-4 py-2">
                                            Archived
                                        </span>
                                    </div>
                                )}
                                {/* Hotswap images/videos here. Using a placeholder div. */}
                                <div className="absolute inset-0 bg-neutral-800 animate-pulse group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute top-4 left-4 font-clinical text-[10px] text-white/40 tracking-widest uppercase">
                                    Ref: {item.id}
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="flex-1 flex flex-col justify-between py-2">
                                <div>
                                    <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-visceral-crimson mb-2 block">
                                        {item.series}
                                    </span>
                                    <h3 className="font-arcane text-2xl tracking-widest text-albedo mb-4 uppercase">
                                        {item.name}
                                    </h3>
                                    <p className="font-sans text-xs text-white/40 leading-relaxed mb-6">
                                        {item.description}
                                    </p>

                                    <ul className="space-y-2 mb-8">
                                        {item.specs.map((spec, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <div className="w-1 h-1 bg-white/20 rounded-full" />
                                                <span className="font-clinical text-[9px] uppercase tracking-widest text-white/30">{spec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                    <span className="font-clinical text-lg text-albedo">{item.price}</span>
                                    <button className="flex items-center gap-3 group/btn">
                                        <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/50 group-hover/btn:text-albedo transition-colors">
                                            Secure Item
                                        </span>
                                        <ArrowRight className="w-4 h-4 text-visceral-crimson group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Section: Engineering Standards */}
                <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-16">
                    <div className="space-y-4">
                        <Box className="w-5 h-5 text-visceral-crimson" />
                        <h4 className="font-clinical text-xs tracking-widest uppercase text-albedo">Logistics</h4>
                        <p className="font-sans text-[11px] text-white/30 leading-relaxed uppercase">
                            Global secure shipping available. All artifacts are tracked via encrypted manifest numbers.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <ShieldCheck className="w-5 h-5 text-visceral-crimson" />
                        <h4 className="font-clinical text-xs tracking-widest uppercase text-albedo">Durability</h4>
                        <p className="font-sans text-[11px] text-white/30 leading-relaxed uppercase">
                            Pressure-tested in the lab. Every seam is reinforced for high-friction interaction and structural longevity.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <Zap className="w-5 h-5 text-visceral-crimson" />
                        <h4 className="font-clinical text-xs tracking-widest uppercase text-albedo">Drop Protocol</h4>
                        <p className="font-sans text-[11px] text-white/30 leading-relaxed uppercase">
                            No restocks. Once an artifact enters the archive, the technical blueprints are retired.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}