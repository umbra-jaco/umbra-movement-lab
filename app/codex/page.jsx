"use client";

import { motion } from "framer-motion";
import {
    Terminal,
    ShieldCheck,
    Activity,
    Cpu,
    CheckCircle2,
    Circle,
    ChevronRight,
    Zap,
    Lock,
    Radar,
    Volume2
} from "lucide-react";

const manifestData = {
    systemStatus: "Phase 02 // Sensory Node Calibration",
    lastSync: new Date().toLocaleTimeString() + " PST",
    coordinates: "38.7521° N, 121.2880° W // Roseville Sanctuary",
    infrastructure: [
        { label: "Framework", value: "Next.js 16.2 (Turbopack)" },
        { label: "Styling", value: "Tailwind CSS v4 (Strict Theme)" },
        { label: "Deployment", value: "Cloudflare Pages (Global Edge)" },
        { label: "Storage", value: "Cloudflare R2 (Media) // D1 (SQL)" },
        { label: "Compute", value: "Cloudflare Workers // KV State" },
        { label: "Auth", value: "Clerk // Zero Trust Protocol" }
    ],
    roadmap: [
        {
            phase: "01",
            title: "Foundational Manifold",
            status: "complete",
            milestones: [
                "Establish Chiaroscuro palette (Void/Albedo/Crimson)",
                "Inject Dual-Typeface logic (Cinzel / Syne / Space Grotesk)",
                "Deploy Core Navigation Structure & Global Layout",
                "Execute Phase 01 Nodes (Philosophy, Lab, Curriculum)",
                "Stabilize Voided Sphere Kinetic Attractor"
            ]
        },
        {
            phase: "02",
            title: "Sensory Depth & Decryption",
            status: "active",
            milestones: [
                "Lexicon Node: 30+ entries across Pedagogical, Physics, and Aesthetic sectors",
                "Sentinel Overhaul: 4K Loop with Atmospheric 35mm Noise Overlay",
                "Lagrangian Biomechanical Mapping: Path of Least Action validation in /curriculum",
                "Phrygian Mode Soundscape: 528Hz low-frequency 'Sonic Friction' drone",
                "Haptic UI: Touch-target optimization and embossed visual feedback"
            ]
        },
        {
            phase: "03",
            title: "Artifact Exchange (Material Archive)",
            status: "pending",
            milestones: [
                "Morphological Signifiers: UI icons for technical garment architecture",
                "R2 Asset Pipeline: Serving raw 8K editorial photography via R2 Buckets",
                "Headless Commerce: Stripe/Shopify API integration via Cloudflare Workers",
                "Shadow Rashguard: Technical spec sheet deployment (Interlocked Compression)",
                "Inventory Lock: Real-time stock status via Cloudflare KV"
            ]
        },
        {
            phase: "04",
            title: "The Access Gateway (Cohort Engine)",
            status: "pending",
            milestones: [
                "D1 Database: Persistent storage for applicant data and cohort intake",
                "Secure Dispatch: Automated 'Encrypted Email' protocol via Resend SMTP",
                "Booking Engine: Brutalist 4-week immersion calendar",
                "Unlisted Coordinates: API-gated location reveals for Roseville lab access"
            ]
        },
        {
            phase: "05",
            title: "The Scholar Node (Online University)",
            status: "pending",
            milestones: [
                "Zero Trust Auth: Secure scholar login and membership tiers",
                "The Vault: Cloudflare Stream integration with 'Radical Occlusion' video player",
                "Interactive Codex: Searchable database of movement constraints and games",
                "Direct Secure Line: Private Initiation scheduling via encrypted terminal"
            ]
        }
    ]
};

export default function MasterCodex() {
    return (
        <div className="min-h-screen bg-void-black text-albedo font-clinical selection:bg-visceral-crimson selection:text-white p-6 md:p-12 lg:p-24 relative overflow-hidden">

            {/* Background Data Stream - Lagrangian & SAR Research Injected */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden font-clinical text-[9px] leading-none tracking-tighter uppercase">
                {Array.from({ length: 60 }).map((_, i) => (
                    <div key={i} className="whitespace-nowrap mb-1">
                        LAGRANGIAN_MINIMIZED_ACTION_D_ALEMBERT_PRINCIPLE_SAR_SATELLITE_HAPTIC_MAPPING_RADICAL_OCCLUSION_PHRYGIAN_SONIC_FRICTION_SYSTEM_STRESS_TEST_
                        {Array.from({ length: 8 }).map(() => Math.random().toString(36).substring(7)).join("_")}
                    </div>
                ))}
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header: System Terminal */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 border-b border-white/10 pb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-visceral-crimson/10 border border-visceral-crimson/30">
                                <Terminal className="w-5 h-5 text-visceral-crimson" />
                            </div>
                            <span className="text-xs tracking-[0.5em] uppercase text-albedo/40 font-bold">
                                Master Codex // INTERNAL MANIFEST
                            </span>
                        </div>
                        <h1 className="font-kinetic text-5xl md:text-8xl uppercase tracking-tighter leading-none">
                            System <br /> <span className="text-visceral-crimson">Sovereignty.</span>
                        </h1>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                        <div className="flex items-center gap-3 bg-phosphor-green/5 border border-phosphor-green/20 px-4 py-2">
                            <div className="w-2 h-2 rounded-full bg-phosphor-green animate-pulse" />
                            <span className="text-[10px] tracking-[0.2em] uppercase text-phosphor-green font-black">
                                STATUS: {manifestData.systemStatus}
                            </span>
                        </div>
                        <span className="text-[10px] tracking-widest uppercase text-albedo/20 block font-mono">
                            SYNC: {manifestData.lastSync} // {manifestData.coordinates}
                        </span>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Column 1: Infrastructure Specs */}
                    <div className="space-y-12">
                        <section className="space-y-8">
                            <h2 className="font-kinetic text-sm uppercase tracking-[0.3em] text-albedo flex items-center gap-3 border-b border-white/10 pb-4">
                                <Cpu className="w-4 h-4 text-visceral-crimson" />
                                Cloud Infrastructure
                            </h2>
                            <div className="space-y-5">
                                {manifestData.infrastructure.map((item, idx) => (
                                    <div key={idx} className="group">
                                        <span className="text-[9px] uppercase text-albedo/30 tracking-[0.2em] block mb-1">{item.label}</span>
                                        <span className="text-xs uppercase text-albedo/80 tracking-widest group-hover:text-visceral-crimson transition-colors">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="p-8 bg-white/[0.02] border border-white/5 space-y-6">
                            <div className="flex items-center gap-3">
                                <Lock className="w-4 h-4 text-visceral-crimson" />
                                <h3 className="text-[10px] uppercase tracking-[0.3em] text-albedo/60 font-bold">Security Protcol</h3>
                            </div>
                            <p className="text-[10px] text-albedo/30 leading-relaxed uppercase tracking-widest">
                                WAF active. SQL injection prevention enforced for D1 nodes.
                                Zero-Trust architecture secured via Clerk for admin entry.
                            </p>
                            <div className="flex gap-2 opacity-30">
                                <Radar className="w-4 h-4 text-albedo" />
                                <Volume2 className="w-4 h-4 text-albedo" />
                            </div>
                        </div>
                    </div>

                    {/* Column 2 & 3: Strategic Roadmap */}
                    <div className="lg:col-span-2 space-y-12">
                        <h2 className="font-kinetic text-sm uppercase tracking-[0.3em] text-albedo flex items-center gap-3 border-b border-white/10 pb-4">
                            <Activity className="w-4 h-4 text-visceral-crimson" />
                            Execution Roadmap
                        </h2>

                        <div className="space-y-20">
                            {manifestData.roadmap.map((phase, idx) => (
                                <div key={idx} className="relative pl-12">
                                    {idx !== manifestData.roadmap.length - 1 && (
                                        <div className="absolute left-[7px] top-8 bottom-[-60px] w-[1px] bg-white/5" />
                                    )}

                                    <div className="absolute left-0 top-1">
                                        {phase.status === 'complete' ? (
                                            <div className="w-4 h-4 bg-visceral-crimson flex items-center justify-center">
                                                <CheckCircle2 className="w-3 h-3 text-white" />
                                            </div>
                                        ) : phase.status === 'active' ? (
                                            <div className="w-4 h-4 border border-phosphor-green flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-phosphor-green animate-pulse" />
                                            </div>
                                        ) : (
                                            <div className="w-4 h-4 border border-white/20" />
                                        )}
                                    </div>

                                    <div className="mb-8">
                                        <div className="flex items-center gap-6 mb-3">
                                            <span className="text-[10px] font-black text-visceral-crimson tracking-widest">P_{phase.phase}</span>
                                            <h3 className="font-arcane text-2xl tracking-[0.1em] uppercase">{phase.title}</h3>
                                        </div>
                                        <div className={`inline-block text-[8px] uppercase tracking-[0.4em] px-3 py-1 border ${
                                            phase.status === 'complete' ? 'border-visceral-crimson/40 text-visceral-crimson bg-visceral-crimson/5' :
                                                phase.status === 'active' ? 'border-phosphor-green/40 text-phosphor-green bg-phosphor-green/5' : 'border-white/10 text-albedo/20'
                                        }`}>
                                            {phase.status}
                                        </div>
                                    </div>

                                    <ul className="space-y-6">
                                        {phase.milestones.map((milestone, mIdx) => (
                                            <li key={mIdx} className="flex items-start gap-4 group">
                                                <ChevronRight className={`w-3 h-3 mt-1.5 transition-transform group-hover:translate-x-1 ${phase.status === 'complete' ? 'text-visceral-crimson' : 'text-albedo/10'}`} />
                                                <span className={`text-xs tracking-widest uppercase leading-relaxed ${phase.status === 'complete' ? 'text-albedo/30 line-through' : 'text-albedo/60'}`}>
                                                    {milestone}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer: Directives */}
                <footer className="mt-48 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex items-center gap-8 group">
                        <div className="p-5 border border-white/10 group-hover:border-visceral-crimson transition-all duration-700 relative overflow-hidden">
                            <Zap className="w-6 h-6 text-albedo/40 group-hover:text-visceral-crimson relative z-10" />
                            <div className="absolute inset-0 bg-visceral-crimson/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                        </div>
                        <div>
                            <span className="text-[10px] uppercase text-albedo/20 tracking-[0.5em] block mb-1 font-bold">Active Directive</span>
                            <span className="text-sm uppercase tracking-[0.2em] text-albedo group-hover:text-visceral-crimson transition-colors font-bold">
                                Phase 02 // Calibrate Sensory Node
                            </span>
                        </div>
                    </div>
                    <div className="text-[9px] text-albedo/20 uppercase tracking-[0.3em] leading-loose text-center md:text-right font-mono">
                        Confidential system asset // UMBRA Movement Laboratory <br />
                        Unauthorized distribution strictly prohibited // Code 334-ALPHA
                    </div>
                </footer>
            </div>
        </div>
    );
}