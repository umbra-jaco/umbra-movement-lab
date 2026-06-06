import Link from 'next/link';

export const metadata = {
    title: "About | UMBRA Movement Lab",
    description: "UMBRA exists because most movement spaces are not built for the people who need them most. We are changing that.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-void pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">

                <header className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-6 h-[1px] bg-visceral-crimson"></div>
                        <span className="font-clinical text-[10px] tracking-[0.4em] uppercase text-white/40">
                            Why We Exist
                        </span>
                    </div>
                    <h1 className="font-kinetic text-5xl md:text-7xl uppercase tracking-tighter text-albedo mb-6">
                        This Is Not a Gym.
                    </h1>
                    <p className="font-sans text-xl text-white/50 max-w-xl leading-relaxed">
                        Most movement spaces are built for people who are already tough. We are building one for everyone else.
                    </p>
                </header>

                <article className="space-y-16 font-sans text-white/60 leading-relaxed text-base md:text-lg">

                    <section className="space-y-4">
                        <h2 className="font-kinetic text-2xl uppercase tracking-tighter text-albedo">The Problem</h2>
                        <p>
                            Walk into most martial arts gyms and you will find the same walls. Ego. Aggression. Unspoken hierarchies. A culture that treats newcomers like intruders and women like afterthoughts. This is not a feature of combat sports. It is a failure of the spaces that teach them.
                        </p>
                        <p>
                            The people who would benefit most from movement, from learning to trust their body under pressure, from the quiet confidence that comes with physical competence, are the same people these spaces push away. Beginners. Anxious people. People who have been hurt before. People who just want to move without being yelled at or sized up or made to feel small.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-kinetic text-2xl uppercase tracking-tighter text-albedo">The Approach</h2>
                        <p>
                            UMBRA uses constraint-led games instead of traditional instruction. No memorizing techniques. No endless drilling. No one yelling at you to go harder. We set up movement puzzles with specific rules and boundaries, and your nervous system figures out the rest. Your body already knows how to move efficiently. It just needs the right environment to discover it.
                        </p>
                        <p>
                            This method comes from a body of research called ecological dynamics. You can read about it on the Philosophy page if you want the science. The short version is this: learning happens through interaction, not imitation. We do not teach you how to move. We create conditions where better movement is the only option.
                        </p>
                        <p>
                            The first time we tested this approach was with a dancer who had never grappled before. Within weeks she was solving movement problems that took years for traditionally trained martial artists to figure out. That result was not exceptional. It was the method working exactly as designed.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-kinetic text-2xl uppercase tracking-tighter text-albedo">The Space</h2>
                        <p>
                            Concrete floors. One light. No mirrors. No screens. Every design choice in the lab serves the same function: remove distraction so you can feel what your body is doing. When you cannot watch yourself, you learn to listen. That is where the real change happens.
                        </p>
                        <p>
                            Right now the lab is a pop-up in Roseville, California. Eventually it will be a permanent brutalist temple somewhere in the woods near a community that wants what we offer. The physical form is still taking shape. The principles are already here.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-kinetic text-2xl uppercase tracking-tighter text-albedo">The Person Behind It</h2>
                        <p>
                            Jacobb started training martial arts at age three and never really stopped. He got his blue belt in Brazilian jiu jitsu from Cesar Gracie, trained with fighters who competed in Strikeforce, and spent years as a sparring partner for local fighters preparing for bouts. He also spent years away from the mats, building a career in music that took him through festivals, studios, and the exhaustion of selling yourself as a product.
                        </p>
                        <p>
                            When he came back to grappling, he found a coaching method that made more sense than anything he had seen before. The constraint-led approach, grounded in decades of research on how humans actually learn to move, reshaped his entire understanding. He started running games instead of teaching techniques. The people he trained learned faster, stayed calmer, and actually enjoyed the process.
                        </p>
                        <p>
                            UMBRA is his attempt to build the space he could never find: a sanctuary where movement is a tool for self-discovery, not a proving ground for ego. A place where anyone, regardless of background or experience, can walk in and start learning.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-kinetic text-2xl uppercase tracking-tighter text-albedo">Who This Is For</h2>
                        <p>
                            You have never thrown a punch. You are out of shape and worried about keeping up. You tried a martial arts class once and never went back because the vibe was off. You are a woman who wants to learn to protect yourself without being surrounded by men who treat training like a dominance ritual. You are someone who moves for the feeling of it, not for the aesthetics. You are curious about what your body can do when no one is telling it what to do.
                        </p>
                        <p>
                            If any of that sounds familiar, this space was built for you.
                        </p>
                    </section>

                </article>

                <div className="mt-20 pt-12 border-t border-white/5 flex flex-col items-center text-center gap-6">
                    <h2 className="font-kinetic text-2xl uppercase tracking-tighter text-albedo">
                        Come See What It Feels Like
                    </h2>
                    <p className="font-sans text-sm text-white/40 max-w-md">
                        The theory makes sense on paper. The actual experience is something else entirely.
                    </p>
                    <Link href="/book" className="px-8 py-4 bg-albedo text-void font-clinical text-sm uppercase tracking-[0.2em] font-bold hover:bg-visceral-crimson hover:text-albedo transition-colors duration-300">
                        Book Your Spot
                    </Link>
                </div>

            </div>
        </div>
    );
}
