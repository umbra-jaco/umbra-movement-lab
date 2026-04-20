import React from 'react';

export default function PhilosophyNode() {
    return (
        <div className="min-h-screen bg-black text-[#F5F5F0] selection:bg-[#8A0303] selection:text-white font-sans overflow-x-hidden">

            {/* Hero Section: The Mission */}
            <section className="relative px-6 py-32 md:px-20 lg:py-48 max-w-7xl mx-auto flex flex-col justify-center border-b border-white/10">
                <p className="text-[#8A0303] uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-6">
                    Phase 01 // The Inner Crucible
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-8" style={{ fontFamily: 'var(--font-exocet, serif)' }}>
                    Movement is a <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">
            Physical Truth.
          </span>
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
                    UMBRA is not a gym. It is a laboratory for human-centric movement. We explicitly reject the ego-driven vernacular and overt aggression of traditional combat sports. Our goal is singular: to guide individuals through self-discovery, fostering haptic awareness, profound calmness, and the ability to solve physical problems with the body.
                </p>
            </section>

            {/* Lineage Section */}
            <section className="px-6 py-24 md:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10">
                <div className="lg:col-span-4">
                    <h2 className="text-2xl md:text-3xl uppercase tracking-widest font-bold" style={{ fontFamily: 'var(--font-exocet, serif)' }}>
                        The Lineage
                    </h2>
                    <div className="h-1 w-12 bg-[#8A0303] mt-6"></div>
                </div>
                <div className="lg:col-span-8 text-neutral-300 text-lg leading-relaxed space-y-6">
                    <p>
                        The physical vocabulary of UMBRA is forged in the pressure-tested reality of the <strong className="text-white font-medium">Cesar Gracie</strong> Jiu-Jitsu lineage. However, we have distilled this combat architecture down to its purest kinetic essence.
                    </p>
                    <p>
                        By stripping away the dogma of competition and warfare, what remains is an elegant, highly effective system of leverage, balance, and survival. We do not train to fight; we train to isolate variables, manage extreme physical pressure, and adapt to chaos without surrendering our internal peace.
                    </p>
                </div>
            </section>

            {/* The Science: Ecological Dynamics Bento Grid */}
            <section className="px-6 py-24 md:px-20 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl uppercase tracking-tight font-bold mb-4" style={{ fontFamily: 'var(--font-exocet, serif)' }}>
                        Ecological Dynamics
                    </h2>
                    <p className="text-neutral-400 max-w-2xl text-lg">
                        UMBRA discards the outdated model of rote memorization and static drilling. Learning emerges through interaction, constraints, and the environment. We are guided by the architects of modern movement science.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(280px,auto)]">

                    {/* Card 1: Gibson */}
                    <div className="bg-[#050505] border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 transition-colors duration-500 group">
                        <div>
                            <p className="text-[#00FF00] font-mono text-xs uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">001 // James J. Gibson</p>
                            <h3 className="text-xl font-bold text-white mb-3">Theory of Affordances</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">
                                Gibson redefined how we interact with space. Environments do not just exist; they provide "affordances"—opportunities for action. At UMBRA, we train the practitioner to perceive the haptic void, recognizing paths of leverage and balance instantly rather than recalling a memorized technique.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Turvey */}
                    <div className="bg-[#050505] border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 transition-colors duration-500 group lg:col-span-2">
                        <div>
                            <p className="text-[#00FF00] font-mono text-xs uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">002 // Michael Turvey</p>
                            <h3 className="text-xl font-bold text-white mb-3">Embodied Cognition</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">
                                Turvey’s work proves that the brain and body are not separate entities; they are a singular, dissipative system. Perception and action are tightly coupled. In the UMBRA lab, we treat movement as a live physical equation. You do not "think" about moving; your body calculates and resolves the tension in real-time.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Gray */}
                    <div className="bg-[#050505] border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 transition-colors duration-500 group lg:col-span-2">
                        <div>
                            <p className="text-[#00FF00] font-mono text-xs uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">003 // Rob Gray</p>
                            <h3 className="text-xl font-bold text-white mb-3">Constraint-Led Approach (CLA)</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">
                                Dr. Rob Gray’s research into motor learning forms the pedagogical backbone of our foundations. We utilize "repetition without repetition." By designing specific games and altering constraints (space, goals, resistance), the student’s body self-organizes to find the most efficient solution, eliminating mechanical jerk and optimizing kinetic flow.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Souders */}
                    <div className="bg-[#111111] border border-[#8A0303]/30 p-8 flex flex-col justify-between hover:border-[#8A0303] transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8A0303]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10">
                            <p className="text-[#8A0303] font-mono text-xs uppercase tracking-widest mb-4">004 // Greg Souders</p>
                            <h3 className="text-xl font-bold text-white mb-3">The Kinetic Matrix</h3>
                            <p className="text-sm text-neutral-300 leading-relaxed">
                                Translating ecological theory directly onto the grappling mat. Souders proved that ecological dynamics is the superior method for martial adaptation. We utilize this framework to strip away dead-pattern drilling, allowing beginners to safely navigate complex grappling environments from day one.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Footer / Closing Protocol */}
            <section className="px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center bg-[#030303] border-t border-white/5">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-wide uppercase" style={{ fontFamily: 'var(--font-exocet, serif)' }}>
                    Move. Balance. Adapt.
                </h2>
                <p className="text-neutral-500 max-w-xl text-base md:text-lg mb-10">
                    No techniques to memorize. Just problem-solving with your body. A more human way to learn movement.
                </p>
                <button className="px-8 py-4 bg-white text-black text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#8A0303] hover:text-white transition-colors duration-300">
                    Enter The Lab
                </button>
            </section>

        </div>
    );
}