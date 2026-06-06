import Link from "next/link";

export default function IntakeGateway() {
    return (
        <main className="min-h-screen bg-void text-bone font-sans selection:bg-visceral-crimson selection:text-royal-white flex flex-col items-center py-12 px-4 md:py-20">

            <div className="w-full max-w-4xl space-y-10">

                <div className="border-b border-elevated pb-8 space-y-4 text-center md:text-left">
                    <p className="font-clinical text-[10px] tracking-[0.3em] uppercase text-visceral-crimson font-bold">
                        Status: Slot Conditionally Held
                    </p>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-royal-white">
                        Liability & Intake
                    </h1>
                    <p className="text-concrete text-sm max-w-2xl">
                        One last thing. Sign the waiver and your spot is confirmed.
                    </p>
                </div>

                <div className="relative w-full border border-elevated bg-surface shadow-2xl overflow-hidden">
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

                <div className="pt-8 text-center">
                    <Link href="/" className="font-clinical text-[10px] tracking-[0.3em] uppercase text-concrete hover:text-royal-white transition-colors">
                        &larr; Back to Home
                    </Link>
                </div>

            </div>
        </main>
    );
}
