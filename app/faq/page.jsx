"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqData = [
    {
        question: "Do I need any experience?",
        answer: "None at all. This program is built for complete beginners. If you have never thrown a punch or rolled on a mat, you are exactly who this is for."
    },
    {
        question: "What should I wear?",
        answer: "Comfortable athletic clothes, a t-shirt or rashguard, and shorts or leggings with no zippers or hard edges. We train barefoot."
    },
    {
        question: "What if I am out of shape?",
        answer: "That is fine. The games adapt to you, not the other way around. You work at your own intensity. We are more interested in how you solve problems than how hard you go."
    },
    {
        question: "Will I get hurt?",
        answer: "We use game-based training, not sparring. You will learn to control your body and your partner's body safely. There is always a way to tap out or reset. Safety is built into every constraint."
    },
    {
        question: "What is a typical session like?",
        answer: "We start with a quick warmup. Then the instructor introduces a movement game with specific rules and constraints. You pair up and work through it at your own pace. The instructor circulates, offering adjustments and new variations. Sessions end with a group debrief."
    },
    {
        question: "How is this different from a regular martial arts class?",
        answer: "Most classes teach you to copy the instructor. We give you problems and let your body solve them. No memorizing forms, no counting reps, no one yelling at you. You learn to adapt, not to mimic."
    },
    {
        question: "Can I come to just one session?",
        answer: "The program is designed as a four-week progression. Each week builds on the last. We ask for a commitment to the full four weeks so you get the full experience."
    },
    {
        question: "Where exactly is it?",
        answer: "The lab is in Roseville, CA. We share the exact address after you book, to keep the space private and distraction-free for everyone training."
    },
    {
        question: "What if I have injuries or limitations?",
        answer: "Let the instructor know before the session. The games can be modified around almost any limitation. We would rather you show up and do what you can than not show up at all."
    }
];

export default function FaqPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex-1 bg-void pt-24 pb-16 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <header className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-6 h-[1px] bg-visceral-crimson"></div>
                        <span className="font-clinical text-[10px] tracking-[0.4em] uppercase text-albedo/40">
                            Questions
                        </span>
                    </div>
                    <h1 className="font-kinetic text-5xl md:text-7xl uppercase tracking-tighter text-albedo mb-8">
                        FAQ
                    </h1>
                    <p className="font-sans text-lg text-albedo/50 max-w-xl">
                        Real answers for real people. If something is still not clear, reach out directly.
                    </p>
                </header>

                <div className="space-y-2">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-white/10 bg-white/[0.01]"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                            >
                                <span className="font-sans text-base md:text-lg text-albedo/80 pr-8">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-albedo/40 flex-shrink-0 transition-transform duration-300 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-6 pb-6 font-sans text-sm text-albedo/40 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 pt-12 border-t border-white/5 flex flex-col items-center text-center gap-6">
                    <h2 className="font-kinetic text-2xl uppercase tracking-tighter text-albedo">
                        Still Have Questions?
                    </h2>
                    <p className="font-sans text-sm text-albedo/40 max-w-md">
                        Send us a message or come by and see for yourself. The first step is the hardest one.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/book" className="px-8 py-4 bg-albedo text-void font-clinical text-sm uppercase tracking-[0.2em] font-bold hover:bg-visceral-crimson hover:text-albedo transition-colors duration-300">
                            Book Your Spot
                        </Link>
                        <Link href="mailto:info@umbramovementlab.com" className="px-8 py-4 border border-white/20 text-albedo font-clinical text-sm uppercase tracking-[0.2em] font-bold hover:border-visceral-crimson hover:text-visceral-crimson transition-colors duration-300">
                            Email Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
