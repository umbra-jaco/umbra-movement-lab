"use client";

import { motion } from "framer-motion";
import { Send, Terminal, ShieldAlert } from "lucide-react";

export default function AccessNode() {
    return (
        <div className="min-h-screen bg-void text-albedo pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
            {/* Structural Accents */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-4xl mx-auto relative z-10">
                <header className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <Terminal className="w-5 h-5 text-visceral-crimson" />
                        <span className="font-clinical text-xs tracking-[0.4em] uppercase text-white/40">
                            System Access Protocol
                        </span>
                    </div>
                    <h1 className="font-kinetic text-5xl md:text-7xl uppercase tracking-tighter mb-6">
                        Request <span className="text-visceral-crimson">Initiation.</span>
                    </h1>
                    <p className="font-editorial text-lg text-white/50 leading-relaxed max-w-2xl">
                        UMBRA operates on a cohort-based immersion model. Space in the Roseville lab is
                        strictly regulated to ensure the integrity of the dissipative environment.
                        Submit your data for the next 4-week cycle.
                    </p>
                </header>

                <form className="space-y-12">
                    {/* Data Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="group border-b border-white/10 focus-within:border-visceral-crimson transition-colors pb-2">
                            <label className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/30 block mb-2">Subject Name</label>
                            <input
                                type="text"
                                className="w-full bg-transparent font-clinical text-albedo placeholder:text-white/10 focus:outline-none uppercase tracking-widest"
                                placeholder="Last, First"
                            />
                        </div>
                        <div className="group border-b border-white/10 focus-within:border-visceral-crimson transition-colors pb-2">
                            <label className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/30 block mb-2">Electronic Path</label>
                            <input
                                type="email"
                                className="w-full bg-transparent font-clinical text-albedo placeholder:text-white/10 focus:outline-none uppercase tracking-widest"
                                placeholder="Email@Network.com"
                            />
                        </div>
                    </div>

                    <div className="group border-b border-white/10 focus-within:border-visceral-crimson transition-colors pb-2">
                        <label className="font-clinical text-[10px] tracking-[0.3em] uppercase text-white/30 block mb-2">Intent & Background</label>
                        <textarea
                            rows="4"
                            className="w-full bg-transparent font-clinical text-albedo placeholder:text-white/10 focus:outline-none uppercase tracking-widest resize-none"
                            placeholder="Briefly state your current movement baseline and why you seek the Inner Crucible."
                        />
                    </div>

                    {/* Disclaimer / Warning */}
                    <div className="flex gap-4 p-6 bg-visceral-crimson/5 border border-visceral-crimson/20 items-start">
                        <ShieldAlert className="w-5 h-5 text-visceral-crimson shrink-0 mt-1" />
                        <p className="font-clinical text-[11px] text-white/40 uppercase leading-relaxed tracking-wider">
                            By submitting this request, you acknowledge that UMBRA is a high-intensity
                            movement environment. You agree to operate within the defined constraints
                            and maintain the psychological and physical safety of the lab.
                        </p>
                    </div>

                    {/* Submission */}
                    <button className="flex items-center gap-4 py-6 px-12 bg-white text-black hover:bg-visceral-crimson hover:text-white transition-all duration-500 group">
                        <span className="font-clinical text-sm font-black uppercase tracking-[0.3em]">
                            Transmit Request
                        </span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </form>

                {/* Secure Line Details */}
                <footer className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row gap-12 justify-between">
                    <div>
                        <h4 className="font-clinical text-xs tracking-widest uppercase text-white/60 mb-4">Direct Inquiries</h4>
                        <p className="font-clinical text-sm text-white/30 uppercase tracking-tighter">
                            Secure@umbramovementlab.com
                        </p>
                    </div>
                    <div>
                        <h4 className="font-clinical text-xs tracking-widest uppercase text-white/60 mb-4">Lab Address</h4>
                        <p className="font-clinical text-sm text-white/30 uppercase tracking-tighter">
                            Roseville, California // Coordinates Unlisted
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}