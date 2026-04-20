import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// The Clinical Anchors
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

// Local Custom Fonts (Place your .woff2 files in /public/fonts/)
const cabinet = localFont({
    src: "../public/fonts/CabinetGrotesk-Variable.woff2",
    variable: "--font-cabinet",
});

const fraunces = localFont({
    src: "../public/fonts/Fraunces-VariableFont_SOFT,WONK,opsz,wght.woff2",
    variable: "--font-fraunces",
});

export const metadata: Metadata = {
    title: "UMBRA | Movement Labs",
    description: "Haptic dominance over optic reliance. The Inner Crucible.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <body
            className={`${inter.variable} ${spaceGrotesk.variable} ${cabinet.variable} ${fraunces.variable} bg-void text-albedo`}
        >
        {/* The Atmospheric Noise Layer - 5% Opacity Film Grain */}
        <div
            className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-5 mix-blend-overlay bg-[url('/noise.svg')]"
            aria-hidden="true"
        />

        {/* Main Application Node */}
        <main className="relative z-10 flex min-h-screen flex-col">
            {children}
        </main>
        </body>
        </html>
    );
}