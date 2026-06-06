import Link from 'next/link';

export const metadata = {
    title: "About | UMBRA Movement Lab",
    description: "Jacob Garcia started UMBRA after 14 years of martial arts, a music career, and a deep obsession with how humans actually learn to move.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-void pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">

                <header className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-6 h-[1px] bg-visceral-crimson"></div>
                        <span className="font-clinical text-[10px] tracking-[0.4em] uppercase text-white/40">
                            The Founder
                        </span>
                    </div>
                    <h1 className="font-kinetic text-5xl md:text-7xl uppercase tracking-tighter text-albedo mb-6">
                        Jacob Garcia
                    </h1>
                    <p className="font-sans text-xl text-white/50 max-w-xl leading-relaxed">
                        I started UMBRA because I could not find a gym that felt like home. So I am building one.
                    </p>
                </header>

                <article className="space-y-12 font-sans text-white/60 leading-relaxed text-base md:text-lg">

                    <section className="space-y-4">
                        <p>
                            My first martial arts class was karate. I was three. I do not remember it, but my parents tell me I would not stop kicking things. By five I was in taekwondo. By sixteen I had found Brazilian jiu jitsu at GracieFighter in Roseville, a Cesar Gracie affiliate that no longer exists in the same form. That gym changed my life.
                        </p>
                        <p>
                            I grew up in a house with two brothers. We were physical with each other in a way that would make most parents flinch. Wrestling in the living room. Testing limits. Learning through contact. I did not know it at the time but I was already training.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-kinetic text-2xl uppercase tracking-tighter text-albedo">Fighters, Music, and a Blue Belt</h2>
                        <p>
                            The gym I trained at had real fighters. One of my coaches fought in Strikeforce when Strikeforce was still a legitimate rival to the UFC. I got to roll with Nick Diaz in 2013. I was seventeen. The energy in that room, the intensity, the way those guys carried themselves stuck with me. But so did the ego. So did the posturing. So did the culture that made it hard for anyone who was not already tough to walk through the door.
                        </p>
                        <p>
                            I competed in BJJ tournaments, got my blue belt from Cesar Gracie himself at a seminar, and helped local fighters prepare for their bouts as a sparring partner. I was also playing guitar in bands, writing songs, and starting a career in IT. When I was eighteen everything was happening at once.
                        </p>
                        <p>
                            Then music took over. I produced albums, toured festivals, shot music videos, did photoshoots. I loved making something from nothing. I hated selling myself. The artist economy asks you to package your identity as a product and I could not do it anymore. So I walked away and found myself drifting back to the mats.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-kinetic text-2xl uppercase tracking-tighter text-albedo">The Rabbit Hole</h2>
                        <p>
                            When I came back to grappling, I found a different world. I watched Deandre and Gavin Corbe at ADCC trials and started digging into their training approach. That led me to Greg Souders and Standard Jiu Jitsu in Maryland. That led me to the constraint-led approach. That led me to Rob Gray. That led me to James Gibson and Michael Turvey and ecological dynamics and the direct perception-action loop.
                        </p>
                        <p>
                            I read Gibson's Ecological Approach to Visual Perception front to back. I listened to hundreds of hours of the Perception-Action Podcast. I read Rob Gray's book. I started running constraint-led games with my partner, a dancer with a degree from Cal State Fullerton who is as obsessed with movement as I am. She had never grappled before. Within weeks she was solving movement problems that took me years to figure out. That is when I knew the method was real.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-kinetic text-2xl uppercase tracking-tighter text-albedo">The Body as Proof</h2>
                        <p>
                            At twenty-five I weighed 285 pounds. I am six feet tall. Growing up I struggled with obesity, hyperactivity, and the kind of brain that never shuts up. Today I am 190 pounds. I am athletic. My body works. This is not a fitness transformation story. It is evidence that movement done right, movement that challenges you mentally and physically at the same time, rewires something deeper than muscle.
                        </p>
                        <p>
                            I use cannabis. I microdose mushrooms. These are honest parts of how I stay grounded. The mind builds layers over everything it sees until you cannot perceive what is actually in front of you. Mushrooms helped me peel those back. Movement did the rest. I do not separate the two. The lab is a space for healing and if you are someone who needs that, you belong here.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-kinetic text-2xl uppercase tracking-tighter text-albedo">What UMBRA Is</h2>
                        <p>
                            UMBRA is not a gym. It is a laboratory for human movement. I built it because most combat sports spaces are hostile to anyone who is not already tough. Women especially get trapped in environments where ego, aggression, and unspoken hierarchies make training unsafe. That is not a feature of the sport. It is a failure of the culture. I want to build something different.
                        </p>
                        <p>
                            The lab is a sanctuary. Dark concrete. One light. No mirrors, because watching yourself slows you down. No screens, because your phone is not helping. Just you, a partner, and a series of movement puzzles that force your body to figure things out on its own. We do not teach techniques. We create games that make efficient movement the only possible outcome.
                        </p>
                        <p>
                            My long-term goal is a brutalist concrete temple somewhere in the woods near a community that wants what we offer. Right now we are a pop-up in Roseville. Every Saturday. Four weeks. No experience required. Just show up and move.
                        </p>
                    </section>

                </article>

                {/* CTA */}
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
