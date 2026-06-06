import { Inter, Space_Grotesk, Fraunces, Syne, Cinzel_Decorative } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AcousticNode from "@/components/AcousticNode"; // Injected for Sensory Depth
import "./globals.css";

// Instantiate the Free Google Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const cinzel = Cinzel_Decorative({ weight: ["400", "700", "900"], subsets: ["latin"], variable: "--font-cinzel" });

export const metadata = {
    title: "UMBRA Movement Lab | Human-Centric Movement",
    description: "A pop-up movement lab in Roseville, CA. Four weeks of learning how your body actually wants to move, through games not drills. No experience needed.",
    openGraph: {
        title: "UMBRA Movement Lab",
        description: "A pop-up movement lab in Roseville, CA. Four weeks of learning how your body actually wants to move, through games not drills.",
        url: "https://umbramovementlab.com",
        siteName: "UMBRA Movement Lab",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "UMBRA Movement Lab",
        description: "A pop-up movement lab in Roseville, CA. Four weeks of learning how your body actually wants to move, through games not drills.",
    },
    robots: {
        index: true,
        follow: true,
    },
}

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
        {/* 1. The Atmospheric Noise Layer (Tactile Overlay) */}
        <div
            className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-5 mix-blend-overlay bg-[url('/noise.svg')]"
            aria-hidden="true"
        />

        {/* 2. The Acoustic Node (Procedural Audio Engine)
            Placed outside the main wrapper to ensure zero-latency persistence
            during manifold navigation.
        */}
        <AcousticNode />

        {/* 3. Main Application Wrapper */}
        <div className="relative z-10 flex min-h-screen flex-col">

            {/* Global Header Injection */}
            <Header />

            {/* Main Page Content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Global Footer Injection */}
            <Footer />
        </div>
        </body>
        </html>
    );
}