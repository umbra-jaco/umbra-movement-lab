import Link from 'next/link';

export default function Header() {
    // Using bg-void/80 with backdrop-blur to maintain the atmospheric depth
    // while ensuring the header remains legible as the user scrolls.
    // Border is a subtle albedo fade.
    return (
        <header className="w-full border-b border-albedo/10 px-8 py-6 sticky top-0 z-50 bg-void/80 backdrop-blur-md">
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full">

                {/* Main Brand Link - The Arcane Edge */}
                <Link
                    href="/"
                    className="font-cinzel text-4xl font-black uppercase tracking-tighter text-albedo hover:text-visceral-crimson transition-colors duration-300"
                >
                    UMBRA
                </Link>

                {/* Global Navigation - Clinical Precision */}
                <nav className="flex gap-8 items-center">
                    <Link
                        href="/philosophy"
                        className="font-space-grotesk text-sm uppercase tracking-[0.2em] text-albedo/70 hover:text-visceral-crimson transition-colors duration-300"
                    >
                        PHILOSOPHY
                    </Link>
                    <Link
                        href="/lab"
                        className="font-space-grotesk text-sm uppercase tracking-[0.2em] text-albedo/70 hover:text-visceral-crimson transition-colors duration-300"
                    >
                        LABORATORY
                    </Link>
                    <Link
                        href="/curriculum"
                        className="font-space-grotesk text-sm uppercase tracking-[0.2em] text-albedo/70 hover:text-visceral-crimson transition-colors duration-300"
                    >
                        CURRICULUM
                    </Link>
                    <Link
                        href="/access"
                        className="font-space-grotesk text-sm uppercase tracking-[0.2em] text-albedo/70 hover:text-visceral-crimson transition-colors duration-300"
                    >
                        ACCESS
                    </Link>
                    <Link
                        href="/artifacts"
                        className="font-space-grotesk text-sm uppercase tracking-[0.2em] text-albedo/70 hover:text-visceral-crimson transition-colors duration-300"
                    >
                        ARTIFACTS
                    </Link>
                    <Link
                        href="/lexicon"
                        className="liquid-glass font-clinical uppercase tracking-widest text-sm px-8 py-5 flex items-center justify-center text-albedo-cream hover:bg-white/10 transition-colors border border-white/10"
                    >
                        LEXICON
                    </Link>


                    {/* Future navigation items go here */}
                </nav>
            </div>
        </header>
    );
}