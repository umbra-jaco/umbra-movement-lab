import Image from "next/image";
import Link from "next/link";
import { getAsset } from "@/lib/utils";

export default function FourWeekProgram() {
    return (
        <main className="min-h-screen bg-[#111111] text-zinc-300 font-sans selection:bg-red-900 selection:text-white">

            {/* HERO SECTION */}
            <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 text-center border-b border-zinc-800 overflow-hidden">

                {/* THE R2 BACKGROUND ASSET */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                    <Image
                        src={getAsset('laboratory/spaces/Backgrounds/BG10.png')}
                        alt="Umbra Space"
                        fill
                        className="object-cover"
                        unoptimized
                        priority
                    />
                    {/* Dark Gradient Overlay to ensure the white text remains legible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-[#111111]/80"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-zinc-100 drop-shadow-md">
                        Umbra
                    </h1>
                    <p className="text-xl md:text-2xl font-light tracking-widest text-zinc-400 uppercase drop-shadow-sm">
                        A Human-Centric Movement Lab
                    </p>

                    <p className="text-sm md:text-base text-zinc-500 font-light mt-4">
                        No experience needed. Just curiosity.
                    </p>

                    <div className="w-24 h-1 bg-red-900 mx-auto mt-8 opacity-80"></div>
                </div>
            </section>

            {/* THE TRANSLATED COPY */}
            <section className="max-w-3xl mx-auto px-6 py-24 space-y-16">

                {/* WHAT TO EXPECT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                        <span className="text-red-900 font-mono text-xs tracking-[0.2em] uppercase">01</span>
                        <h3 className="text-white font-bold uppercase">Show Up</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">Wear comfortable clothes. Bring water. That is it. No gear, no experience, no fitness level required.</p>
                    </div>
                    <div className="space-y-3">
                        <span className="text-red-900 font-mono text-xs tracking-[0.2em] uppercase">02</span>
                        <h3 className="text-white font-bold uppercase">Play Games</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">Every session is built around movement puzzles. You and a partner figure them out together. No one is watching, judging, or competing.</p>
                    </div>
                    <div className="space-y-3">
                        <span className="text-red-900 font-mono text-xs tracking-[0.2em] uppercase">03</span>
                        <h3 className="text-white font-bold uppercase">Feel the Shift</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">By week four, you will move differently. Not because you memorized anything, but because your body figured it out on its own.</p>
                    </div>
                </div>

                <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-zinc-300 font-light">
                    <p>
                        <strong className="text-white font-bold">What is Umbra?</strong> Right now, it is a pop-up lab. Eventually, it will be a sanctuary for anyone looking to move better and live harder.
                    </p>
                    <p>
                        This 4-week program explores the full spectrum of martial movement—striking, grappling, and balance. But we do it differently.
                    </p>
                    <p>
                        Instead of mindless drilling or risking injury in traditional sparring, we use <strong className="text-white font-bold">task-oriented games</strong>. You learn to adapt, protect yourself, and solve physical puzzles in real-time, without the wear and tear of a typical fight camp.
                    </p>
                </div>

                {/* LOGISTICS CARD (Brutalist) */}
                <div className="border border-zinc-700 bg-[#1a1a1a] p-8 md:p-12 space-y-8 shadow-2xl">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-white">
                        The 4-Week Crucible
                    </h2>

                    <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                            <span className="text-zinc-500 font-mono">01 //</span>
                            <span><strong className="text-white">LAUNCH:</strong> Saturday, May 9th @ 11:00 AM</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-zinc-500 font-mono">02 //</span>
                            <span><strong className="text-white">CADENCE:</strong> Every 2nd Saturday</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-zinc-500 font-mono">03 //</span>
                            <span><strong className="text-white">LOCATION:</strong> Roseville, CA (Coordinates provided upon entry)</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-zinc-500 font-mono">04 //</span>
                            <span><strong className="text-white">PRICE:</strong> $200 for the full 4-week program</span>
                        </li>
                    </ul>

                    <div className="pt-8 border-t border-zinc-800 flex flex-col gap-4">
                        <Link
                            href="/book"
                            className="inline-block w-full text-center bg-zinc-100 text-black font-bold uppercase tracking-widest py-4 hover:bg-zinc-300 transition-colors duration-200"
                        >
                            Book Your Spot
                        </Link>
                        {/* PRIMARY: Instagram DM */}
                        <Link
                            href="https://instagram.com/umbramovementlab"
                            target="_blank"
                            className="inline-block w-full text-center bg-zinc-100 text-black font-bold uppercase tracking-widest py-4 hover:bg-zinc-300 transition-colors duration-200"
                        >
                            Follow @umbramovementlab
                        </Link>
                        {/* SECONDARY: Direct Email */}
                        <Link
                            href="mailto:info@umbramovementlab.com?subject=UMBRA%204-Week%20Crucible%20Inquiry"
                            className="inline-block w-full text-center bg-zinc-100 text-black font-bold uppercase tracking-widest py-4 hover:bg-zinc-300 transition-colors duration-200"
                        >
                            Ask a Question
                        </Link>
                    </div>
                </div>

            </section>

            {/* FOOTER */}
            <footer className="py-12 text-center text-sm font-mono text-zinc-600 uppercase tracking-widest">
                <p>Inner Crucible • Deepwork Sanctuary</p>
            </footer>

        </main>
    );
}