import Link from "next/link";

export default function IntakeGateway() {
    return (
        <main className="min-h-screen bg-[#111111] text-zinc-300 font-sans selection:bg-red-900 selection:text-white flex flex-col items-center py-12 px-4 md:py-20">

            <div className="w-full max-w-4xl space-y-10">

                {/* STATUS HEADER */}
                <div className="border-b border-zinc-800 pb-8 space-y-4 text-center md:text-left">
                    <p className="text-red-900 font-mono tracking-[0.2em] uppercase text-xs font-bold">
                        Status: Slot Conditionally Held
                    </p>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white">
                        Liability & Intake
                    </h1>
                    <p className="text-lg text-zinc-500 font-light max-w-2xl">
                        Entry to the laboratory is finalized upon execution of the digital waiver.
                    </p>
                </div>

                {/* THE WAIVER TERMINAL */}
                <div className="relative w-full border border-zinc-800 bg-[#0a0a0a] shadow-2xl overflow-hidden">
                    {/* JOTFORM EMBED */}
                    <iframe
                        id="JotFormIFrame-261240891992060"
                        title="UMBRA Waiver"
                        src="https://form.jotform.com/261240891992060"
                        style={{
                            width: "100%",
                            height: "700px",
                            border: "none",
                        }}
                        allow="geolocation; microphone; camera"
                    />
                </div>

                {/* FOOTER NAV */}
                <div className="pt-8 text-center">
                    <Link href="/" className="text-xs font-mono text-zinc-600 hover:text-zinc-300 transition-colors uppercase tracking-widest">
                        ← Abort Transmission / Return to Surface
                    </Link>
                </div>

            </div>
        </main>
    );
}