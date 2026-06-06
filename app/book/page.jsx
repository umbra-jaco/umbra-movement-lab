"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Link from "next/link";

export default function BookSession() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "dark",
                styles: { branding: { brandColor: "#7f1d1d" } }, // This uses a deep red to match your aesthetic
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    return (
        <main className="min-h-screen bg-[#111111] text-zinc-300 font-sans selection:bg-red-900 selection:text-white flex flex-col items-center py-16 px-4 md:py-24 px-6">

            {/* HEADER SECTION */}
            <div className="w-full max-w-4xl space-y-12 mb-12">
                <div className="text-center space-y-6">
                    <Link href="/" className="text-sm font-mono text-zinc-500 hover:text-white transition-colors">
                        ← Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white drop-shadow-md">
                        Enter the Crucible
                    </h1>
                    <p className="text-lg text-zinc-400 font-mono uppercase tracking-widest">
                        Reserve your spot for the 4-Week Crucible. Space is limited.
                    </p>
                    <div className="w-16 h-1 bg-red-900 mx-auto mt-6 opacity-80"></div>
                </div>
            </div>

            {/* THE SCHEDULING BLOCK */}
            <div className="w-full max-w-4xl border border-zinc-800 bg-[#0a0a0a] shadow-2xl overflow-hidden">
                <Cal
                    calLink="umbra-1/umbra-intro"
                    style={{ width: "100%", height: "100%", overflow: "scroll" }}
                    config={{ theme: "dark" }}
                />
            </div>

        </main>
    );
}