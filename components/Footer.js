"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleDashed } from "lucide-react";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-white/5 bg-void pt-24 pb-8 overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-umbra-navy/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative">


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
                            <li><Link href="/lab" className="hover:text-albedo transition-colors">The Lab</Link></li>
                            <li><Link href="/curriculum" className="hover:text-albedo transition-colors">Curriculum</Link></li>
                            <li><Link href="/artifacts" className="hover:text-albedo transition-colors">Ascendant Artifacts</Link></li>
                            <li><Link href="/philosophy" className="hover:text-albedo transition-colors">Philosophy</Link></li>
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