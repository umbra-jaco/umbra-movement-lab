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
        <main className="min-h-screen bg-surface text-bone font-sans selection:bg-visceral-blood selection:text-white flex flex-col items-center py-16 px-4 md:py-24 px-6">

            {/* HEADER SECTION */}
            <div className="w-full max-w-4xl space-y-12 mb-12">
                <div className="text-center space-y-6">
                    <Link href="/" className="text-sm font-mono text-concrete hover:text-albedo transition-colors">
                        ← Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-albedo drop-shadow-md">
                        Enter the Crucible
                    </h1>
                    <p className="text-lg text-concrete font-mono uppercase tracking-widest">
                        Reserve your spot for the 4-Week Crucible. Space is limited.
                    </p>
                    <div className="w-16 h-1 bg-visceral-blood mx-auto mt-6 opacity-80"></div>
                </div>
            </div>

            {/* THE SCHEDULING BLOCK */}
            <div className="w-full max-w-4xl border border-elevated bg-void shadow-2xl overflow-hidden">
                <Cal
                    calLink="umbra-1/umbra-intro"
                    style={{ width: "100%", height: "100%", overflow: "scroll" }}
                    config={{ theme: "dark" }}
                />
            </div>

        </main>
    );
}