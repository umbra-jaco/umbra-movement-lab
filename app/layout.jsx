import { Inter, Space_Grotesk, Fraunces, Syne, Cinzel_Decorative } from "next/font/google";
import Footer from "@/components/Footer"; // <-- Add this import
import "./globals.css";

// Instantiate the Free Google Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const cinzel = Cinzel_Decorative({ weight: ["400", "700", "900"], subsets: ["latin"], variable: "--font-cinzel" });

export const metadata = {
    title: "UMBRA | Movement Labs",
    description: "Haptic dominance over optic reliance. The Inner Crucible.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
        <body
            className={`
          ${inter.variable} 
          ${spaceGrotesk.variable} 
          ${fraunces.variable} 
          ${syne.variable} 
          ${cinzel.variable} 
          bg-void text-albedo antialiased selection:bg-visceral-crimson selection:text-albedo
        `}
        >
        {/* The Atmospheric Noise Layer */}
        <div
            className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-5 mix-blend-overlay bg-[url('/noise.svg')]"
            aria-hidden="true"
        />

        {/* Main Application Node */}
        <main className="relative z-10 flex min-h-screen flex-col">
            <div className="flex-1">
                {children}
            </div>
            {/* Global Footer Injection */}
            <Footer />
        </main>
        </body>
        </html>
    );
}