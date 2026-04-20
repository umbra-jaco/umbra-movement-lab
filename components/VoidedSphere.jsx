"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function VoidedSphere() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // 1. Haptic Mouse Tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // 2. Clinical Springs for ultra-smooth, heavy momentum
    const springConfig = { damping: 40, stiffness: 100, mass: 1.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // 3. 3D Tilt Transformations
    const rotateX = useTransform(smoothY, [-0.5, 0.5], [20, -20]);
    const rotateY = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);

    // 4. Crimson Flare Tracking (translating to pixels for the glow)
    const flareX = useTransform(smoothX, [-0.5, 0.5], ["-50%", "50%"]);
    const flareY = useTransform(smoothY, [-0.5, 0.5], ["-50%", "50%"]);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    if (!mounted) return null;

    return (
        <div
            className="relative w-full max-w-[450px] aspect-square mx-auto flex items-center justify-center group"
            style={{ perspective: "1200px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Core 3D Container */}
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-full h-full flex items-center justify-center"
            >

                {/* LAYER 1: The Reactive Crimson Flare (Deepest layer, moves with mouse) */}
                <motion.div
                    style={{ x: flareX, y: flareY, transform: "translateZ(-100px)" }}
                    className="absolute w-[80%] h-[80%] rounded-full bg-visceral-crimson/80 blur-[80px] opacity-30 group-hover:opacity-100 transition-opacity duration-1000"
                />

                {/* LAYER 2: The Deep Void Core (The Black Hole) */}
                <div
                    style={{ transform: "translateZ(0px)" }}
                    className="absolute w-[45%] h-[45%] rounded-full bg-void-black border border-white/5 shadow-[inset_0_0_40px_rgba(0,0,0,1)] z-10"
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent" />
                </div>

                {/* LAYER 3: Optical Rings (Floating at different Z-depths) */}
                <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-20">

                    {/* Ring 1: The Inner Orbit */}
                    <motion.circle
                        cx="200" cy="200" r="110"
                        fill="none" stroke="#F5F5F0" strokeWidth="0.5" strokeOpacity="0.2"
                        strokeDasharray="4 8"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                        style={{ transformOrigin: "200px 200px", transform: "translateZ(40px)" }}
                    />

                    {/* Ring 2: The Mid Constraint */}
                    <motion.circle
                        cx="200" cy="200" r="160"
                        fill="none" stroke="#F5F5F0" strokeWidth="1" strokeOpacity="0.1"
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                        style={{ transformOrigin: "200px 200px", transform: "translateZ(80px)" }}
                    />

                    {/* Ring 3: The Outer Boundary (Radar Scanner) */}
                    <motion.circle
                        cx="200" cy="200" r="190"
                        fill="none" stroke="#8A0303" strokeWidth="1.5" strokeOpacity="0.4"
                        strokeDasharray="1 12"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
                        style={{ transformOrigin: "200px 200px", transform: "translateZ(120px)" }}
                    />
                </svg>


            </motion.div>
        </div>
    );
}