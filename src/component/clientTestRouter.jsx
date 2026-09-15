import React from 'react'

const ClientTestRouter = () => {
    return (
        <div
            id="products"
            className="group relative overflow-hidden rounded-2xl border border-[#30413F]/70 bg-[#0B2021]/90 p-4 transition-transform duration-500 hover:-translate-y-1 sm:p-5"
        >

            <div className="mb-5 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.22em] text-[#7F918B]">
                    Featured Design
                </span>

                <span className="text-xs text-[#A8B1AD]">
                    ↗
                </span>
            </div>

            {/* Material-inspired preview */}
            <div className="relative mb-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-[#142D2D]">

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,#4B6860_0%,transparent_45%),linear-gradient(135deg,#0B2021,#1C3836_55%,#071516)]" />

                <div className="relative h-[70%] w-[72%] rotate-[-12deg] rounded-[28px] border border-[#9DAAA4]/20 bg-[#294541] shadow-[20px_25px_50px_rgba(0,0,0,0.45)]">

                    <div className="absolute inset-[7%] rounded-[20px] border border-[#B5C6BA]/10 bg-[#203B37]" />

                    <div className="absolute bottom-[12%] left-[12%] h-2 w-[45%] rounded-full bg-[#718B80]/30" />

                    <div className="absolute right-[12%] top-[12%] h-12 w-12 rounded-full border border-[#A5B8AC]/20" />

                </div>

                <div className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.2em] text-[#9DAAA4]/60">
                    Material / 001
                </div>

            </div>

            <div className="flex items-end justify-between gap-3">

                <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-[#71877E]">
                        Interface Study
                    </p>

                    <h4 className="font-serif text-xl tracking-[-0.03em] text-[#E9EDE1]">
                        The Refined Fold
                    </h4>
                </div>

                <span className="text-lg text-[#A8B1AD]">
                    ↗
                </span>

            </div>

            <div className="mt-5 border-t border-[#30413F]/70 pt-4 text-[10px] leading-relaxed text-[#7F918B]">
                Designed with intention.
                <br />
                Built for digital craftsmanship.
            </div>

        </div>
    )
}

export default ClientTestRouter