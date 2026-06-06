"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleDashed } from "lucide-react";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative z-10 bg-surface pt-24 pb-8 overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-oxide/30 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative">

                {/* Top Accent Line */}
                <div className="phosphor-divider mb-16"></div>

                {/* Middle Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-elevated pt-12 mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <CircleDashed className="w-6 h-6 text-albedo animate-[spin_20s_linear_infinite]" />
                            <span className="font-arcane text-2xl tracking-widest text-albedo">UMBRA</span>
                        </div>
                        <p className="font-sans text-sm text-concrete max-w-sm leading-relaxed">
                            A pop-up movement lab in Roseville, CA. We explore martial movement through games and constraints instead of drills and memorization.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-clinical text-xs tracking-[0.2em] uppercase text-concrete mb-6">Connect</h4>
                        <ul className="space-y-4 font-clinical text-sm tracking-widest uppercase text-ash">
                            <li><Link href="/faq" className="hover:text-albedo transition-colors">FAQ</Link></li>
                            <li><Link href="/about" className="hover:text-albedo transition-colors">About</Link></li>
                            <li><Link href="/book" className="hover:text-albedo transition-colors">Book Now</Link></li>
                            <li><a href="https://instagram.com/umbramovement" className="hover:text-albedo transition-colors">Instagram</a></li>
                            <li><a href="mailto:info@umbramovementlab.com" className="hover:text-albedo transition-colors">Email</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-elevated pt-8">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-phosphor-green animate-pulse" />
                        <span className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete">
                            System Stable
                        </span>
                    </div>
                    <p className="font-clinical text-[10px] tracking-[0.2em] uppercase text-ash text-center md:text-right">
                        © {new Date().getFullYear()} UMBRA Movement Labs. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}