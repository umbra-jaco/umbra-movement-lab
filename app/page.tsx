import Image from "next/image";
import Link from "next/link";
import { getAsset } from "@/lib/utils";

export default function FourWeekProgram() {
    return (
        <main className="min-h-screen bg-void text-bone font-sans selection:bg-visceral-crimson selection:text-royal-white">

            {/* HERO SECTION */}
            <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 text-center overflow-hidden">

                {/* THE R2 BACKGROUND ASSET */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <Image
                        src={getAsset('laboratory/spaces/Backgrounds/BG10.png')}
                        alt=""
                        fill
                        className="object-cover"
                        unoptimized
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/80"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-royal-white drop-shadow-md">
                        Umbra
                    </h1>
                    <p className="text-xl md:text-2xl font-light tracking-widest text-concrete uppercase drop-shadow-sm">
                        A Human-Centric Movement Lab
                    </p>

                    <p className="text-sm md:text-base text-ash font-light mt-4">
                        No experience needed. Just curiosity.
                    </p>

                    <div className="flex flex-col items-center gap-3 mt-8">
                        <div className="w-24 h-[1px] bg-visceral-crimson opacity-60"></div>
                        <span className="font-clinical text-[10px] tracking-[0.4em] uppercase text-concrete">Pop-Up Lab</span>
                    </div>
                </div>
            </section>

            {/* Phosphor Divider */}
            <div className="phosphor-divider"></div>

            {/* WHAT TO EXPECT — Lighter Background Section */}
            <section className="section-alt py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="phosphor-border-left pl-4">
                            <span className="font-clinical text-[10px] tracking-[0.4em] uppercase text-phosphor-green">What to Expect</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="section-card p-8 space-y-4">
                            <span className="text-visceral-crimson font-clinical text-xs tracking-[0.2em] uppercase">01</span>
                            <div className="w-8 h-[1px] bg-phosphor-green opacity-30"></div>
                            <h3 className="text-royal-white font-bold uppercase tracking-widest text-sm">Show Up</h3>
                            <p className="text-bone text-sm leading-relaxed">Wear comfortable clothes. Bring water. That is it. No gear, no experience, no fitness level required.</p>
                        </div>
                        <div className="section-card p-8 space-y-4">
                            <span className="text-visceral-crimson font-clinical text-xs tracking-[0.2em] uppercase">02</span>
                            <div className="w-8 h-[1px] bg-phosphor-green opacity-30"></div>
                            <h3 className="text-royal-white font-bold uppercase tracking-widest text-sm">Play Games</h3>
                            <p className="text-bone text-sm leading-relaxed">Every session is built around movement puzzles. You and a partner figure them out together. No one is watching, judging, or competing.</p>
                        </div>
                        <div className="section-card p-8 space-y-4">
                            <span className="text-visceral-crimson font-clinical text-xs tracking-[0.2em] uppercase">03</span>
                            <div className="w-8 h-[1px] bg-phosphor-green opacity-30"></div>
                            <h3 className="text-royal-white font-bold uppercase tracking-widest text-sm">Feel the Shift</h3>
                            <p className="text-bone text-sm leading-relaxed">By week four, you will move differently. Not because you memorized anything, but because your body figured it out on its own.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Crimson Divider */}
            <div className="crimson-divider"></div>

            {/* THE TRANSLATED COPY */}
            <section className="max-w-3xl mx-auto px-6 py-24 space-y-16">

                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-bone font-light">
                    <p>
                        <strong className="text-royal-white font-bold">What is Umbra?</strong> Right now, it is a pop-up lab. Eventually, it will be a sanctuary for anyone looking to move better and live harder.
                    </p>
                    <p>
                        This 4-week program explores the full spectrum of martial movement — striking, grappling, and balance. But we do it differently.
                    </p>
                    <p>
                        Instead of mindless drilling or risking injury in traditional sparring, we use <strong className="text-royal-white font-bold">task-oriented games</strong>. You learn to adapt, protect yourself, and solve physical puzzles in real-time, without the wear and tear of a typical fight camp.
                    </p>
                </div>

                <div className="phosphor-divider"></div>

                {/* LOGISTICS CARD */}
                <div className="section-card p-8 md:p-12 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-1 h-8 bg-visceral-crimson"></div>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-royal-white">
                            The 4-Week Crucible
                        </h2>
                    </div>

                    <ul className="space-y-4 text-base md:text-lg">
                        <li className="flex items-start gap-4">
                            <span className="text-visceral-crimson font-clinical text-xs tracking-widest w-20 shrink-0">01 //</span>
                            <span className="text-bone"><strong className="text-royal-white">LAUNCH:</strong> Saturday, May 9th @ 11:00 AM</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-visceral-crimson font-clinical text-xs tracking-widest w-20 shrink-0">02 //</span>
                            <span className="text-bone"><strong className="text-royal-white">CADENCE:</strong> Every 2nd Saturday</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-visceral-crimson font-clinical text-xs tracking-widest w-20 shrink-0">03 //</span>
                            <span className="text-bone"><strong className="text-royal-white">LOCATION:</strong> Roseville, CA (Coordinates provided upon entry)</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-visceral-crimson font-clinical text-xs tracking-widest w-20 shrink-0">04 //</span>
                            <span className="text-bone"><strong className="text-royal-white">PRICE:</strong> $200 for the full 4-week program</span>
                        </li>
                    </ul>

                    <div className="pt-8 border-t border-elevated flex flex-col gap-3">
                        <Link
                            href="/book"
                            className="inline-block w-full text-center bg-royal-white text-void font-bold uppercase tracking-widest py-4 hover:bg-visceral-crimson hover:text-royal-white transition-all duration-300"
                        >
                            Book Your Spot
                        </Link>
                        <Link
                            href="https://instagram.com/umbramovement"
                            target="_blank"
                            className="inline-block w-full text-center border border-elevated text-ash font-bold uppercase tracking-widest py-4 hover:border-phosphor-green hover:text-phosphor-green transition-all duration-300"
                        >
                            Follow @umbramovement
                        </Link>
                        <Link
                            href="mailto:info@umbramovementlab.com?subject=UMBRA%204-Week%20Crucible%20Inquiry"
                            className="inline-block w-full text-center border border-elevated text-ash font-bold uppercase tracking-widest py-4 hover:border-royal-white hover:text-royal-white transition-all duration-300"
                        >
                            Ask a Question
                        </Link>
                    </div>
                </div>

            </section>

            {/* FOOTER */}
            <div className="crimson-divider"></div>
            <footer className="py-12 text-center">
                <div className="phosphor-divider mb-8 max-w-xs mx-auto"></div>
                <p className="font-clinical text-[10px] tracking-[0.4em] uppercase text-concrete">Inner Crucible &middot; Deepwork Sanctuary</p>
            </footer>

        </main>
    );
}
