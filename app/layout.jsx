import { Space_Grotesk, Syne } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AcousticNode from "@/components/AcousticNode";
import ThemeToggle from "@/components/ThemeToggle";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

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
        <html lang="en" suppressHydrationWarning>
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
(function() {
  try {
    var theme = localStorage.getItem('umbra-theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
          `.trim(),
                }}
            />
        </head>
        <body
            className={`
          ${spaceGrotesk.variable} 
          ${syne.variable} 
          bg-void text-bone antialiased selection:bg-visceral-crimson selection:text-royal-white
        `}
        >
        {/* Main Application Wrapper */}
        <div className="relative z-10 flex min-h-screen flex-col">

            {/* Acoustic Node (procedural audio) */}
            <AcousticNode />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Global Header Injection */}
            <Header />

            {/* Main Page Content */}
            <main className="flex-1">
                <PageTransition>
                {children}
                </PageTransition>
            </main>

            {/* Global Footer Injection */}
            <Footer />
        </div>
        </body>
        </html>
    );
}