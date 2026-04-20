"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleDashed } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-white/5 bg-void pt-24 pb-8 overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-umbra-navy/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                {/* Top Section: The Codex Intake */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
                    <div className="max-w-xl">
                        <h2 className="font-kinetic text-3xl md:text-5xl uppercase tracking-tighter text-albedo mb-4">
                            Enter The Codex.
                        </h2>
                        <p className="font-editorial text-white/50 text-lg">
                            Receive encrypted dispatches on ecological dynamics, limited artifact drops, and unlisted lab coordinates.
                        </p>
                    </div>

                    <div className="w-full md:w-auto flex-1 max-w-md">
                        <form className="relative flex items-center border-b border-white/20 pb-2 group focus-within:border-visceral-crimson transition-colors">
                            <input
                                type="email"
                                placeholder="TRANSMIT EMAIL"
                                className="w-full bg-transparent font-clinical text-sm tracking-[0.2em] text-albedo placeholder:text-white/20 focus:outline-none uppercase"
                            />
                            <button type="submit" className="text-white/40 hover:text-visceral-crimson transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Middle Section: Directory Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/5 pt-12 mb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <CircleDashed className="w-6 h-6 text-albedo animate-[spin_20s_linear_infinite]" />
                            <span className="font-arcane text-2xl tracking-widest text-albedo">UMBRA</span>
                        </div>
                        <p className="font-sans text-sm text-white/40 max-w-sm leading-relaxed">
                            Haptic dominance over optic reliance. A laboratory for human-centric movement, redefining the crucible of physical interaction.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-clinical text-xs tracking-[0.2em] uppercase text-white/60 mb-6">The Manifold</h4>
                        <ul className="space-y-4 font-clinical text-sm tracking-widest uppercase text-white/30">
                            <li><a href="#" className="hover:text-albedo transition-colors">The Lab</a></li>
                            <li><a href="#" className="hover:text-albedo transition-colors">Curriculum</a></li>
                            <li><a href="#" className="hover:text-albedo transition-colors">Ascendant Artifacts</a></li>
                            <li><a href="#" className="hover:text-albedo transition-colors">Philosophy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-clinical text-xs tracking-[0.2em] uppercase text-white/60 mb-6">Coordinates</h4>
                        <ul className="space-y-4 font-clinical text-sm tracking-widest uppercase text-white/30">
                            <li><a href="#" className="hover:text-albedo transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-albedo transition-colors">Secure Line</a></li>
                            <li><span className="text-visceral-crimson">Unlisted Location</span></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: System Status & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-phosphor-green animate-pulse" />
                        <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/40">
              System Stable
            </span>
                    </div>
                    <p className="font-clinical text-[10px] tracking-[0.2em] uppercase text-white/30 text-center md:text-right">
                        © {new Date().getFullYear()} UMBRA Movement Labs. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}