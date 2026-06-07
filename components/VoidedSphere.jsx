"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function VoidedSphere() {
    const [mounted, setMounted] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Heavy, viscous physics for the system's "inertia"
    const springConfig = { damping: 30, stiffness: 50, mass: 2 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // 1. TOP-LEVEL TRANSFORM DEFINITIONS (Fixes the Hook Order error)
    // We explicitly define the transforms for our 3 constraint boundaries here.
    const ring1X = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
    const ring1Y = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

    const ring2X = useTransform(smoothX, [-0.5, 0.5], [-40, 40]);
    const ring2Y = useTransform(smoothY, [-0.5, 0.5], [-40, 40]);

    const ring3X = useTransform(smoothX, [-0.5, 0.5], [-60, 60]);
    const ring3Y = useTransform(smoothY, [-0.5, 0.5], [-60, 60]);

    // Core System Transforms
    const coreScale = useTransform(smoothX, [-0.5, 0.5], [1.1, 0.9]);
    const distortion = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);
    const crimsonGlow = useTransform(smoothX, [-0.5, 0.5], [0.1, 0.5]);

    useEffect(() => {
        setMounted(true);
        const handleMove = (e) => {
            mouseX.set((e.clientX / window.innerWidth) - 0.5);
            mouseY.set((e.clientY / window.innerHeight) - 0.5);
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [mouseX, mouseY]);

    if (!mounted) return null;

    // Grouping rings for easier rendering without nested hooks
    const rings = [
        { x: ring1X, y: ring1Y, size: "100%" },
        { x: ring2X, y: ring2Y, size: "140%" },
        { x: ring3X, y: ring3Y, size: "180%" },
    ];

    return (
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            {/* The Lagrangian Grid */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5F5F0" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* The Attractor Core */}
            <motion.div
                style={{
                    scale: coreScale,
                    rotateX: distortion,
                    rotateY: distortion,
                }}
                className="relative z-10 w-64 h-64 border border-albedo/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 bg-albedo/10 rounded-full blur-2xl"
                />

                {/* The Perturbation Rings - Now mapping to pre-defined transforms */}
                {rings.map((ring, i) => (
                    <motion.div
                        key={i}
                        className="absolute border border-white/5 rounded-full"
                        style={{
                            width: ring.size,
                            height: ring.size,
                            x: ring.x,
                            y: ring.y,
                        }}
                    />
                ))}

                {/* The Visceral Flare */}
                <motion.div
                    style={{ opacity: crimsonGlow }}
                    className="absolute inset-0 bg-visceral-crimson/20 rounded-full blur-[100px] mix-blend-screen"
                />
            </motion.div>

            {/* System Readouts */}
            <div className="absolute bottom-0 left-0 p-4 font-clinical text-[9px] tracking-[0.3em] uppercase text-albedo/20">
                Status: Non-Equilibrium <br />
                Stability: {mounted ? "Active" : "Null"}
            </div>
        </div>
    );
}