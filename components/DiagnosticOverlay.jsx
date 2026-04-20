"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Zap, Radar, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export default function DiagnosticOverlay() {
    const [latency, setLatency] = useState("12ms");

    // Simulate real-time Edge latency updates
    useEffect(() => {
        const interval = setInterval(() => {
            setLatency(`${Math.floor(Math.random() * (18 - 8) + 8)}ms`);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="hidden lg:flex absolute right-12 bottom-32 w-80 liquid-glass border border-white/5 flex-col p-0 overflow-hidden shadow-2xl"
        >
            {/* 1. Terminal Header */}
            <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-phosphor-green animate-pulse" />
                    <span className="font-clinical text-[9px] tracking-[0.3em] uppercase text-white/60">
            System_Manifest.v2
          </span>
                </div>
                <span className="font-clinical text-[8px] text-white/30 uppercase">
          Edge: SFO-01
        </span>
            </div>

            <div className="p-5 space-y-6">
                {/* 2. System Integrity Metrics */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
            <span className="font-clinical text-[8px] text-white/20 uppercase tracking-widest block">
              Integrity
            </span>
                        <span className="font-clinical text-xs text-albedo uppercase tracking-tighter">
              99.98%
            </span>
                    </div>
                    <div className="space-y-1 text-right">
            <span className="font-clinical text-[8px] text-white/20 uppercase tracking-widest block">
              Latency
            </span>
                        <span className="font-clinical text-xs text-phosphor-green uppercase tracking-tighter">
              {latency}
            </span>
                    </div>
                </div>

                {/* 3. SAR Mapping / Haptic Stream */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <div className="flex items-center gap-2">
                            <Radar className="w-3 h-3 text-visceral-crimson animate-pulse" />
                            <span className="font-clinical text-[9px] tracking-[0.2em] uppercase text-white/50">
                Haptic SAR Stream
              </span>
                        </div>
                        <span className="font-clinical text-[8px] text-white/20 uppercase">
              Tracking...
            </span>
                    </div>

                    {/* Simulated Waveform (The "Lagrangian Action") */}
                    <div className="h-8 flex items-center gap-[2px]">
                        {[...Array(24)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: [4, Math.random() * 24 + 4, 4] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
                                className="w-[2px] bg-albedo/20 rounded-full"
                            />
                        ))}
                    </div>
                </div>

                {/* 4. Biological Constraints Readout */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                    <div className="flex justify-between">
            <span className="font-clinical text-[8px] uppercase text-white/30 tracking-widest">
              Acoustic Friction
            </span>
                        <span className="font-clinical text-[9px] uppercase text-albedo">
              528Hz_PHRYGIAN
            </span>
                    </div>
                    <div className="flex justify-between">
            <span className="font-clinical text-[8px] uppercase text-white/30 tracking-widest">
              Spatial Occlusion
            </span>
                        <span className="font-clinical text-[9px] uppercase text-visceral-crimson">
              Extreme_Chiaroscuro
            </span>
                    </div>
                    <div className="flex justify-between">
            <span className="font-clinical text-[8px] uppercase text-white/30 tracking-widest">
              Lagrangian State
            </span>
                        <span className="font-clinical text-[9px] uppercase text-albedo">
              Least_Action_Mode
            </span>
                    </div>
                </div>

                {/* 5. Cloudflare R2 Media Status */}
                <div className="flex items-center gap-3 pt-4">
                    <Globe className="w-3 h-3 text-white/20" />
                    <div className="h-[1px] flex-1 bg-white/5" />
                    <span className="font-clinical text-[8px] tracking-[0.4em] uppercase text-white/20">
            Roseville Sanctuary Sync
          </span>
                </div>
            </div>
        </motion.div>
    );
}