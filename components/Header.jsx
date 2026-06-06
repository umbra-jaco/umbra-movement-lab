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
                        href="/faq"
                        className="font-space-grotesk text-sm uppercase tracking-[0.2em] text-albedo/70 hover:text-visceral-crimson transition-colors duration-300"
                    >
                        FAQ
                    </Link>
                    <Link
                        href="/book"
                        className="px-4 py-2 border border-visceral-crimson text-sm uppercase tracking-[0.2em] text-albedo hover:bg-visceral-crimson transition-colors duration-300"
                    >
                        Book Now
                    </Link>
                    <Link
                        href="https://instagram.com/umbramovement"
                        className="font-space-grotesk text-sm uppercase tracking-[0.2em] text-albedo/70 hover:text-visceral-crimson transition-colors duration-300"
                    >
                        CONTACT
                    </Link>
                    <Link
                        href="/philosophy"
                        className="font-space-grotesk text-sm uppercase tracking-[0.2em] text-albedo/70 hover:text-visceral-crimson transition-colors duration-300"
                    >
                        PHILOSOPHY
                    </Link>
                    <Link
                        href="/about"
                        className="font-space-grotesk text-sm uppercase tracking-[0.2em] text-albedo/70 hover:text-visceral-crimson transition-colors duration-300"
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="/lexicon"
                        className="font-space-grotesk text-sm uppercase tracking-[0.2em] text-albedo/70 hover:text-visceral-crimson transition-colors duration-300"
                    >
                        LEXICON
                    </Link>

                    {/* Future navigation items go here */}
                </nav>
            </div>
        </header>
    );
}