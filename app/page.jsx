import React from 'react';

export default function HomePage() {
    return (
        <main className="min-h-screen flex flex-col items-center p-6 lg:p-12 relative z-0">

            {/* Liquid Glass Navigation */}
            <header className="w-full max-w-7xl flex justify-between items-center py-5 px-8 liquid-glass rounded-2xl mb-24 sticky top-6 z-50">
                <h1 className="text-3xl tracking-widest uppercase font-headline font-extrabold text-cloud-dancer">UMBRA</h1>
                <nav className="hidden md:flex gap-10 font-technical text-sm tracking-widest uppercase">
                    <a href="#crucible" className="hover:text-electric-orange transition-colors duration-300">The Crucible</a>
                    <a href="#mechanics" className="hover:text-electric-orange transition-colors duration-300">Mechanics</a>
                </nav>
                {/* High-contrast CTA adhering to the 3-Second Rule */}
                <button className="bg-electric-orange text-umbra-navy px-8 py-3 rounded-full font-bold text-sm tracking-wider hover:bg-cloud-dancer hover:scale-105 transition-all duration-300">
                    ENTER LAB
                </button>
            </header>

            {/* Cinematic Hero Section */}
            <section className="w-full max-w-5xl text-center z-10 mb-32 flex flex-col items-center">
                <h2 className="text-6xl md:text-8xl font-headline font-extrabold mb-8 leading-none tracking-tight">
                    Absolute Presence. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cloud-dancer to-cool-blue">
            Radical Occlusion.
          </span>
                </h2>
                <p className="text-xl md:text-2xl font-editorial italic text-cloud-dancer/80 mb-12 max-w-2xl leading-relaxed">
                    Rejecting the optic for the haptic. Step into the Inner Crucible where movement is a private, essential ritual mathematically optimized for your biomechanical trajectory.
                </p>
                <button className="liquid-glass text-cloud-dancer border-electric-orange/40 hover:border-electric-orange px-10 py-5 rounded-full text-lg font-technical tracking-widest transition-all duration-500 shadow-[0_0_30px_rgba(247,65,37,0.15)] hover:shadow-[0_0_40px_rgba(247,65,37,0.3)]">
                    INITIATE PROTOCOL
                </button>
            </section>

            {/* Asymmetric Bento Grid Architecture */}
            <section id="mechanics" className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-6 z-10">

                {/* Primary Analytical Block */}
                <div className="liquid-glass rounded-3xl p-10 md:col-span-8 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-umbra-navy/90 via-transparent to-transparent z-0" />
                    <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
                        <h3 className="text-3xl font-headline font-bold mb-4">Lagrangian Mechanics</h3>
                        <p className="font-technical text-base leading-relaxed text-cloud-dancer/70 max-w-lg">
                            We do not subject the body to random exertion. Guided by the Principle of Least Action, we mathematically eliminate mechanical jerk to unlock seamless, highly sustainable physical expression.
                        </p>
                    </div>
                </div>

                {/* Sensory Protocol Block */}
                <div className="liquid-glass rounded-3xl p-10 md:col-span-4 flex flex-col justify-between min-h-[400px] group">
                    <div className="w-14 h-14 rounded-full bg-cool-blue/20 flex items-center justify-center border border-cool-blue/30 group-hover:bg-electric-orange/20 group-hover:border-electric-orange/50 transition-all duration-500">
                        <div className="w-3 h-3 bg-cloud-dancer rounded-full group-hover:bg-electric-orange transition-colors" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-headline font-bold mb-3">Haptic Dominance</h3>
                        <p className="font-technical text-sm text-cloud-dancer/70">
                            Mirrors removed. Low drones engaged. Threat perception minimized. Focus directed entirely inward to the crucible.
                        </p>
                    </div>
                </div>

                {/* Conversion / Prototype Block */}
                <div className="liquid-glass rounded-3xl p-10 md:col-span-12 flex flex-col md:flex-row items-center justify-between min-h-[250px] border-l-4 border-l-electric-orange">
                    <div className="mb-8 md:mb-0 max-w-2xl">
                        <h3 className="text-3xl font-headline font-bold mb-4">The 4-Week Prototype</h3>
                        <p className="font-editorial text-lg italic text-cloud-dancer/80">
                            Begin your transformation with our specialized foundational loop. Engineered specifically for non-athletic demographics seeking profound internal reconstruction.
                        </p>
                    </div>
                    <button className="bg-cloud-dancer text-umbra-navy px-10 py-5 rounded-full font-bold font-technical tracking-widest hover:bg-electric-orange hover:text-cloud-dancer transition-all duration-300 w-full md:w-auto text-center">
                        RESERVE SPACE
                    </button>
                </div>

            </section>
        </main>
    );
}