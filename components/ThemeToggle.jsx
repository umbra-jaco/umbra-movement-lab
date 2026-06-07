"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem("umbra-theme");
        const prefersDark = stored === "dark";
        setIsDark(prefersDark);
        if (prefersDark) {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        if (next) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("umbra-theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("umbra-theme", "light");
        }
    };

    // Prevent hydration mismatch — render nothing until mounted
    if (!mounted) return null;

    return (
        <button
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="group relative flex h-12 w-12 items-center justify-center border transition-all duration-700 border-white/10 bg-void hover:border-white/40"
        >
            {isDark ? (
                <Sun className="h-4 w-4 text-albedo/10 group-hover:text-albedo/40 transition-colors duration-700" />
            ) : (
                <Moon className="h-4 w-4 text-black/10 group-hover:text-black/40 transition-colors duration-700" />
            )}
        </button>
    );
}
