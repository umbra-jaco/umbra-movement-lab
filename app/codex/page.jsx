"use client";

import { motion } from "framer-motion";
import {
    Terminal,
    ShieldCheck,
    Activity,
    Database,
    Cpu,
    CheckCircle2,
    Circle,
    ChevronRight,
    Zap
} from "lucide-react";

const manifestData = {
    systemStatus: "System Stable // Phase 01 Validated",
    lastSync: new Date().toLocaleDateString(),
    coordinates: "38.7521° N, 121.2880° W",
    infrastructure: [
        { label: "Framework", value: "Next.js 16 (Turbopack)" },
        { label: "Styling", value: "Tailwind CSS v4" },
        { label: "Deployment", value: "Cloudflare Pages" },
        { label: "Registry", value: "GitHub / WebStorm" }
    ],
    roadmap: [
        {
            phase: "01",
            title: "Foundational Manifold",
            status: "complete",
            milestones: [
                "Establish Chiaroscuro palette (Void/Albedo/Crimson)",
                "Dual-Typeface font injection (Cinzel/Syne/Space Grotesk)",
                "Core Node Architecture (Philosophy/Lab/Curriculum/Artifacts)",
                "Kinetic SVG Integration (Voided Sphere)"
            ]
        },
        {
            phase: "02",
            title: "Sensory Depth",
            status: "active",
            milestones: [
                "Sentinel Overhaul: Cinematic 4K Hero Background",
                "Editorial Asset Injection: Replace placeholders with high-contrast media",
                "Lagrangian Formula Calibration (Curriculum Node)",
                "Mobile UI/UX Refinement"
            ]
        },
        {
            phase: "03",
            title: "Artifact Exchange",
            status: "pending",
            milestones: [
                "Dynamic Artifact Detail Routing",
                "Cloudflare Worker / Stripe Integration",
                "R2 Media Hosting Implementation",
                "Inventory Lock Logic"
            ]
        },
        {
            phase: "04",
            title: "The Access Gateway",
            status: "pending",
            milestones: [
                "D1 Database Integration for Cohort Intake",
                "Secure Dispatch System (Resend/SendGrid)",
                "Brutalist Calendar & Booking Engine",
                "Authentication layer for Scholar Node"
            ]
        }
    ]
};

export default function MasterCodex() {
    return (
        <div className="min-h-screen bg-void-black text-albedo font-clinical selection:bg-visceral-crimson selection:text-white p-6 md:p-12 lg:p-24 relative overflow-hidden">

            {/* Background Data Stream */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden font-clinical text-[10px] leading-none tracking-tighter">
                {Array.from({ length: 50 }).map((_, i) => (
                    <div key={i} className="whitespace-nowrap mb-1">
                        UMBRA_SYSTEM_MANIFEST_PROTO_0.1_STABLE_COORD_38.7521_121.2880_PHASE_01_COMPLETE_
                        {Array.from({ length: 10 }).map(() => Math.random().toString(36).substring(7)).join("_")}
                    </div>
                ))}
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header: System Terminal */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 border-b border-white/10 pb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Terminal className="w-5 h-5 text-visceral-crimson" />
                            <span className="text-xs tracking-[0.4em] uppercase text-white/40">
                                Master Codex // Internal Manifest
                            </span>
                        </div>
                        <h1 className="font-kinetic text-5xl md:text-7xl uppercase tracking-tighter leading-none">
                            System <span className="text-visceral-crimson">Sovereignty</span>
                        </h1>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center gap-2 justify-end mb-1">
                            <div className="w-2 h-2 rounded-full bg-phosphor-green animate-pulse" />
                            <span className="text-[10px] tracking-widest uppercase text-phosphor-green font-bold">
                                {manifestData.systemStatus}
                            </span>
                        </div>
                        <span className="text-[10px] tracking-widest uppercase text-white/30 block">
                            Last Modified: {manifestData.lastSync} // {manifestData.coordinates}
                        </span>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Column 1: Infrastructure Specs */}
                    <div className="space-y-12">
                        <section>
                            <h2 className="font-kinetic text-xl uppercase tracking-widest text-albedo mb-6 flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-visceral-crimson" />
                                Infrastructure
                            </h2>
                            <div className="space-y-4">
                                {manifestData.infrastructure.map((item, idx) => (
                                    <div key={idx} className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-[10px] uppercase text-white/30 tracking-widest">{item.label}</span>
                                        <span className="text-xs uppercase text-white/70 tracking-wider">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="p-6 bg-white/[0.02] border border-white/5">
                            <h3 className="text-xs uppercase tracking-widest text-visceral-crimson mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" />
                                Security Protocol
                            </h3>
                            <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-wider">
                                SSL strictly enforced via Cloudflare Edge. All intake forms sanitized and encrypted.
                                Static nodes generated at build-time for zero-latency performance.
                            </p>
                        </section>
                    </div>

                    {/* Column 2 & 3: Strategic Roadmap */}
                    <div className="lg:col-span-2">
                        <h2 className="font-kinetic text-xl uppercase tracking-widest text-albedo mb-10 flex items-center gap-2">
                            <Activity className="w-4 h-4 text-visceral-crimson" />
                            Development Roadmap
                        </h2>

                        <div className="space-y-16">
                            {manifestData.roadmap.map((phase, idx) => (
                                <div key={idx} className={`relative pl-8 border-l ${phase.status === 'complete' ? 'border-visceral-crimson' : 'border-white/10'}`}>
                                    <div className="absolute -left-[9px] top-0">
                                        {phase.status === 'complete' ? (
                                            <div className="w-4 h-4 bg-visceral-crimson rounded-full flex items-center justify-center">
                                                <CheckCircle2 className="w-3 h-3 text-white" />
                                            </div>
                                        ) : phase.status === 'active' ? (
                                            <div className="w-4 h-4 bg-phosphor-green rounded-full animate-pulse" />
                                        ) : (
                                            <Circle className="w-4 h-4 text-white/10 fill-void" />
                                        )}
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex items-center gap-4 mb-2">
                                            <span className="text-xs font-bold text-visceral-crimson">PHASE {phase.phase}</span>
                                            <h3 className="font-arcane text-2xl tracking-widest uppercase">{phase.title}</h3>
                                        </div>
                                        <span className={`text-[9px] uppercase tracking-[0.3em] px-2 py-1 rounded ${
                                            phase.status === 'complete' ? 'bg-visceral-crimson/10 text-visceral-crimson' :
                                                phase.status === 'active' ? 'bg-phosphor-green/10 text-phosphor-green' : 'bg-white/5 text-white/20'
                                        }`}>
                                            {phase.status}
                                        </span>
                                    </div>

                                    <ul className="space-y-4">
                                        {phase.milestones.map((milestone, mIdx) => (
                                            <li key={mIdx} className="flex items-start gap-3 group">
                                                <ChevronRight className={`w-3 h-3 mt-1 ${phase.status === 'complete' ? 'text-visceral-crimson' : 'text-white/20'}`} />
                                                <span className={`text-xs tracking-wide uppercase ${phase.status === 'complete' ? 'text-white/50 line-through' : 'text-white/70'}`}>
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
                <footer className="mt-32 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex items-center gap-6">
                        <div className="p-4 bg-visceral-crimson/5 border border-visceral-crimson/20">
                            <Zap className="w-6 h-6 text-visceral-crimson" />
                        </div>
                        <div>
                            <span className="text-[10px] uppercase text-white/30 tracking-[0.3em] block">Next Objective</span>
                            <span className="text-sm uppercase tracking-widest text-albedo">Phase 02 // Sentinel Media Overhaul</span>
                        </div>
                    </div>
                    <div className="text-[10px] text-white/20 uppercase tracking-[0.2em] md:text-right">
                        Confidential System Asset // UMBRA Movement Lab <br />
                        Access Restricted to Administrative Personnel
                    </div>
                </footer>
            </div>
        </div>
    );
}