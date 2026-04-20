import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                /* The UMBRA Core Palette */
                void: {
                    DEFAULT: "#050505",
                    black: "#000000",
                },
                albedo: {
                    DEFAULT: "#F5F5F0",
                    cream: "#EAEAE5",
                },
                umbra: {
                    navy: "#01153D",
                    blue: "#0047AB",
                },
                visceral: {
                    crimson: "#8A0303",
                    blood: "#5E0202",
                },
                phosphor: {
                    green: "#39FF14",
                },
                /* Shadcn UI mapping for seamless integration */
                background: "var(--background)",
                foreground: "var(--foreground)",
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
            },
            fontFamily: {
                // The Arcane Edge / Editorial Warmth
                fraunces: ["var(--font-fraunces)", "serif"],
                exocet: ["var(--font-exocet)", "serif"],
                // Kinetic Headlines
                cabinet: ["var(--font-cabinet)", "sans-serif"],
                // The Clinical Anchor
                transducer: ["var(--font-transducer)", "sans-serif"],
                grotesk: ["var(--font-space-grotesk)", "sans-serif"],
                inter: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                'noise': "url('/noise.svg')",
            },
            boxShadow: {
                // Haptic Emboss effect for interactive UI nodes
                'haptic-emboss': 'inset 2px 2px 4px rgba(255, 255, 255, 0.05), inset -2px -2px 4px rgba(0, 0, 0, 0.5), 2px 2px 8px rgba(0,0,0,0.8)',
                'haptic-pressed': 'inset 4px 4px 8px rgba(0, 0, 0, 0.8), inset -2px -2px 4px rgba(255, 255, 255, 0.02)',
            },
            animation: {
                "kinetic-fade": "kineticFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            },
            keyframes: {
                kineticFade: {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;