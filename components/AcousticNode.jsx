"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AcousticNode() {
    const [isActive, setIsActive] = useState(false);
    const audioCtx = useRef(null);
    const filter = useRef(null);
    const gainNode = useRef(null);

    const startAcousticProtocol = () => {
        if (!audioCtx.current) {
            audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();

            // 1. Create Brown Noise (The "Void" Texture)
            const bufferSize = 2 * audioCtx.current.sampleRate;
            const noiseBuffer = audioCtx.current.createBuffer(1, bufferSize, audioCtx.current.sampleRate);
            const output = noiseBuffer.getChannelData(0);
            let lastOut = 0.0;
            for (let i = 0; i < bufferSize; i++) {
                const white = Math.random() * 2 - 1;
                output[i] = (lastOut + (0.02 * white)) / 1.02;
                lastOut = output[i];
                output[i] *= 3.5; // High volume for filtering
            }

            const noiseSource = audioCtx.current.createBufferSource();
            noiseSource.buffer = noiseBuffer;
            noiseSource.loop = true;

            // 2. The Clinical Filter (Low-Pass)
            // This removes the "hiss" and leaves only the "thrum"
            filter.current = audioCtx.current.createBiquadFilter();
            filter.current.type = "lowpass";
            filter.current.frequency.setValueAtTime(120, audioCtx.current.currentTime);
            filter.current.Q.setValueAtTime(2, audioCtx.current.currentTime);

            // 3. 528Hz Harmonic Resonator
            // A second filter to create a faint "Royal Albedo" peak
            const resonator = audioCtx.current.createBiquadFilter();
            resonator.type = "bandpass";
            resonator.frequency.setValueAtTime(528, audioCtx.current.currentTime);
            resonator.Q.setValueAtTime(1, audioCtx.current.currentTime);

            gainNode.current = audioCtx.current.createGain();
            gainNode.current.gain.setValueAtTime(0, audioCtx.current.currentTime);

            // Connection Chain: Noise -> Resonator -> LowPass Filter -> Gain -> Destination
            noiseSource.connect(resonator);
            resonator.connect(filter.current);
            filter.current.connect(gainNode.current);
            gainNode.current.connect(audioCtx.current.destination);

            noiseSource.start();
        }

        if (!isActive) {
            // Near-silent baseline (0.015 gain)
            gainNode.current.gain.exponentialRampToValueAtTime(0.015, audioCtx.current.currentTime + 5);
            setIsActive(true);
        } else {
            gainNode.current.gain.exponentialRampToValueAtTime(0.0001, audioCtx.current.currentTime + 3);
            setIsActive(false);
        }
    };

    // Interaction: Mouse movement opens the "Air" of the room
    useEffect(() => {
        const handleMove = (e) => {
            if (isActive && filter.current && audioCtx.current) {
                // Higher movement = slightly more clarity (Filter opens to 400Hz)
                const targetFreq = 120 + (e.clientX / window.innerWidth) * 280;
                filter.current.frequency.setTargetAtTime(targetFreq, audioCtx.current.currentTime, 0.5);
            }
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [isActive]);

    return (
        <div className="fixed bottom-12 left-12 z-50 flex items-center gap-4">
            <button
                onClick={startAcousticProtocol}
                className={`group relative flex h-12 w-12 items-center justify-center border transition-all duration-700 ${
                    isActive
                        ? "border-visceral-crimson/50 bg-visceral-crimson/5"
                        : "border-white/10 bg-void hover:border-white/40"
                }`}
            >
                <AnimatePresence mode="wait">
                    {isActive ? (
                        <motion.div key="active" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <Volume2 className="h-3 w-3 text-albedo/60" />
                        </motion.div>
                    ) : (
                        <motion.div key="inactive" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <VolumeX className="h-3 w-3 text-white/10 group-hover:text-white/40" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>

            <div className="flex flex-col">
        <span className={`font-clinical text-[7px] tracking-[0.5em] uppercase transition-colors duration-1000 ${
            isActive ? "text-visceral-crimson/60" : "text-white/10"
        }`}>
          {isActive ? "System_Acoustics_Nominal" : "Acoustic_Node_Offline"}
        </span>
                <span className="font-clinical text-[9px] tracking-widest text-white/20 uppercase">
          Atmospheric Wash // 528Hz Peak
        </span>
            </div>
        </div>
    );
}