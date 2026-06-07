import React from 'react';
import Link from 'next/link';

export default function PhilosophyNode() {
    return (
        <div className="min-h-screen bg-void text-albedo selection:bg-visceral-blood selection:text-albedo font-sans overflow-x-hidden">

            {/* Hero Section: The Mission */}
            <section className="relative px-6 py-32 md:px-20 lg:py-48 max-w-7xl mx-auto flex flex-col justify-center border-b border-white/10">
                <p className="text-visceral-blood uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-6">
                    Phase 01 // The Inner Crucible
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-8" style={{ fontFamily: 'var(--font-exocet, serif)' }}>
                    Movement is a <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">
            Physical Truth.
          </span>
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-concrete leading-relaxed font-light">
                    Most people think martial arts is about learning to fight. We think it is about learning to move, breathe, and adapt, and the fighting comes naturally as a side effect. No rigid forms. No memorized sequences. Just you, a problem to solve, and your body figuring it out in real time.
                </p>
            </section>

            {/* The Science: Ecological Dynamics Bento Grid */}
            <section className="px-6 py-24 md:px-20 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl uppercase tracking-tight font-bold mb-4" style={{ fontFamily: 'var(--font-exocet, serif)' }}>
                        Ecological Dynamics
                    </h2>
                    <p className="text-concrete max-w-2xl text-lg mb-6">
                        Instead of drilling moves until they are robotic, we set up games and constraints that make your nervous system teach itself. The result is movement that feels fluid, adaptable, and like it was always yours.
                    </p>
                    <p className="text-concrete max-w-2xl text-lg">
                        UMBRA discards the outdated model of rote memorization and static drilling. Learning emerges through interaction, constraints, and the environment. We are guided by the architects of modern movement science.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(280px,auto)]">

                    {/* Card 1: Gibson */}
                    <div className="bg-void border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 transition-colors duration-500 group">
                        <div>
                            <p className="text-phosphor-green font-mono text-xs uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">001 // James J. Gibson</p>
                            <h3 className="text-xl font-bold text-albedo mb-3">Theory of Affordances</h3>
                            <p className="text-sm text-concrete leading-relaxed">
                                Gibson redefined how we interact with space. Environments do not just exist; they provide "affordances"—opportunities for action. At UMBRA, we train the practitioner to perceive the haptic void, recognizing paths of leverage and balance instantly rather than recalling a memorized technique.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Turvey */}
                    <div className="bg-void border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 transition-colors duration-500 group lg:col-span-2">
                        <div>
                            <p className="text-phosphor-green font-mono text-xs uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">002 // Michael Turvey</p>
                            <h3 className="text-xl font-bold text-albedo mb-3">Embodied Cognition</h3>
                            <p className="text-sm text-concrete leading-relaxed">
                                Turvey’s work proves that the brain and body are not separate entities; they are a singular, dissipative system. Perception and action are tightly coupled. In the UMBRA lab, we treat movement as a live physical equation. You do not "think" about moving; your body calculates and resolves the tension in real-time.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Gray */}
                    <div className="bg-void border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 transition-colors duration-500 group lg:col-span-2">
                        <div>
                            <p className="text-phosphor-green font-mono text-xs uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">003 // Rob Gray</p>
                            <h3 className="text-xl font-bold text-albedo mb-3">Constraint-Led Approach (CLA)</h3>
                            <p className="text-sm text-concrete leading-relaxed">
                                Dr. Rob Gray’s research into motor learning forms the pedagogical backbone of our foundations. We utilize "repetition without repetition." By designing specific games and altering constraints (space, goals, resistance), the student’s body self-organizes to find the most efficient solution, eliminating mechanical jerk and optimizing kinetic flow.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Souders */}
                    <div className="bg-surface border border-visceral-blood/30 p-8 flex flex-col justify-between hover:border-visceral-blood transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-visceral-blood/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10">
                            <p className="text-visceral-blood font-mono text-xs uppercase tracking-widest mb-4">004 // Greg Souders</p>
                            <h3 className="text-xl font-bold text-albedo mb-3">The Kinetic Matrix</h3>
                            <p className="text-sm text-bone leading-relaxed">
                                Translating ecological theory directly onto the grappling mat. Souders proved that ecological dynamics is the superior method for martial adaptation. We utilize this framework to strip away dead-pattern drilling, allowing beginners to safely navigate complex grappling environments from day one.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Footer / Closing Protocol */}
            <section className="px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center bg-void border-t border-white/5">
                <h2 className="text-3xl md:text-5xl font-bold text-albedo mb-6 tracking-wide uppercase" style={{ fontFamily: 'var(--font-exocet, serif)' }}>
                    Move. Balance. Adapt.
                </h2>
                <p className="text-ash max-w-xl text-base md:text-lg mb-10">
                    No techniques to memorize. Just problem-solving with your body. A more human way to learn movement.
                </p>
                <Link href="/book" className="px-8 py-4 bg-royal-white text-void text-sm uppercase tracking-[0.2em] font-bold hover:bg-visceral-blood hover:text-albedo transition-colors duration-300 inline-block">
                    Ready to Move?
                </Link>
            </section>

        </div>
    );
}