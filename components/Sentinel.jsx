"use client";

import { motion } from "framer-motion";

export default function Sentinel() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-void">
            {/* 1. THE CINEMATIC B-ROLL */}
            {/* Master Codex Phase 03: Host raw 4K assets on Cloudflare R2 to bypass
          standard hosting compression. For now, ensure 'sentinel-loop.mp4'
          is in your /public folder.
      */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover opacity-40 grayscale contrast-125 scale-105"
                style={{ filter: "brightness(0.7) contrast(1.2)" }}
            >
                <source src="/sentinel-loop.mp4" type="video/mp4" />
            </video>

            {/* 2. THE CHIAROSCURO OVERLAY (Atmospheric Depth) */}
            {/* This creates the tight spotlight spill effect mentioned in the research. */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--color-void)_85%)]" />

            {/* 3. 35MM FILM GRAIN (Tactile Friction) */}
            {/* Using the noise.svg to create that 'analog, ancient ritual' feel. */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('/noise.svg')]"
                style={{ backgroundSize: '180px' }}
            />

            {/* 4. THE SCANLINE MATRIX (Clinical Precision) */}
            {/* A subtle horizontal line-pattern to mimic a high-end surveillance/SAR monitor. */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] z-10 bg-[size:100%_4px] pointer-events-none opacity-30" />

            {/* 5. VISCERAL FLARE (The Catalyst) */}
            {/* A faint crimson pulse in the deep background. */}
            <motion.div
                animate={{ opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-visceral-crimson/5 mix-blend-color"
            />
        </div>
    );
}