import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [selectedReason, setSelectedReason] = useState<number>(0);

  const reasons = [
    {
      label: "Don't like it anymore",
      shift: "What feels dated to you is a rare vintage treasure to someone else. Resell or swap it.",
      bestPath: "Resell / Exchange",
      pathColor: "#C85C3D"
    },
    {
      label: "Doesn't fit right",
      shift: "Silhouettes shouldn't restrict you. Pass it on to a friend or alter the waistline into a relaxed fit.",
      bestPath: "Exchange / Alter",
      pathColor: "#737B4B"
    },
    {
      label: "Out of fashion trend",
      shift: "Trends rotate in cycles. Pre-loved 90s and Y2K pieces carry timeless authenticity that fast fashion cannot copy.",
      bestPath: "Archive / Resell",
      pathColor: "#C85C3D"
    },
    {
      label: "Bought for one occasion",
      shift: "That wedding guest slip or concert blazer served its day. Let someone else make memories in it.",
      bestPath: "Resell / Donate",
      pathColor: "#A7C1C1"
    },
    {
      label: "Has minor damage",
      shift: "A missing button or torn knee is not a funeral for fabric. It is a canvas for visible mending and creative patchwork.",
      bestPath: "Upcycle / Repair",
      pathColor: "#C85C3D"
    },
    {
      label: "Simply forgotten in the closet",
      shift: "Pull it into natural light. If it hasn't sparked joy in 6 months, grant it a second life in another wardrobe.",
      bestPath: "Circulate",
      pathColor: "#737B4B"
    }
  ];

  return (
    <section id="problem" className="py-24 bg-[#F5F1E8] border-t border-[#1D1C19]/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#737B4B] mb-3">
            The Reality Of Modern Wardrobes
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-normal leading-tight text-[#1D1C19] mb-6">
            WE HAVE MORE CLOTHES THAN WE NEED.
          </h2>
          <p className="text-lg text-[#1D1C19]/80 leading-relaxed">
            Trends change. Sizes change. Tastes change. Our wardrobes fill up with pieces we rarely wear.
            <span className="block mt-2 font-medium text-[#1D1C19]">
              But an unwanted garment isn&apos;t necessarily a useless garment.
            </span>
          </p>
        </div>

        {/* 3-Step Visual Journey: FULL WARDROBE -> UNWANTED CLOTHES -> WHAT'S NEXT? */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 bg-white/70 border border-[#1D1C19]/10">
            <div className="text-xs tracking-widest uppercase font-semibold text-[#1D1C19]/50 mb-2">Stage 01</div>
            <h3 className="text-xl font-serif-editorial text-[#1D1C19] mb-3">FULL WARDROBE</h3>
            <p className="text-sm text-[#1D1C19]/70 leading-relaxed">
              Dozens of unworn items hanging behind closed doors, carrying memories but taking up space and gathering dust.
            </p>
          </div>

          <div className="p-8 bg-white/70 border border-[#1D1C19]/10">
            <div className="text-xs tracking-widest uppercase font-semibold text-[#C85C3D] mb-2">Stage 02</div>
            <h3 className="text-xl font-serif-editorial text-[#1D1C19] mb-3">UNWANTED CLOTHES</h3>
            <p className="text-sm text-[#1D1C19]/70 leading-relaxed">
              The instinct to bag them up for disposal. But textile waste is a choice, not an inevitability.
            </p>
          </div>

          <div className="p-8 bg-[#1D1C19] text-[#F5F1E8] border border-[#1D1C19]">
            <div className="text-xs tracking-widest uppercase font-semibold text-[#A7C1C1] mb-2">Stage 03</div>
            <h3 className="text-xl font-serif-editorial text-white mb-3">WHAT&apos;S NEXT?</h3>
            <p className="text-sm text-[#F5F1E8]/80 leading-relaxed">
              The pivotal Rewear question: Resell? Exchange? Upcycle? Donate? Give the garment another chapter.
            </p>
          </div>
        </div>

        {/* Mindset Shift Box: Instead of -> Rewear encourages */}
        <div className="bg-[#1D1C19] text-white p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="border-b md:border-b-0 md:border-r border-white/15 pb-8 md:pb-0 md:pr-8">
              <span className="text-xs tracking-widest uppercase font-mono text-white/50 block mb-2">
                Traditional Mindset
              </span>
              <div className="text-2xl sm:text-3xl font-serif-editorial text-white/60 line-through decoration-[#C85C3D]/80 decoration-2">
                &ldquo;I don&apos;t want this anymore.&rdquo;
              </div>
              <p className="text-xs text-white/40 mt-3">Disconnection leading to landfill disposal.</p>
            </div>

            <div className="md:pl-8">
              <span className="text-xs tracking-widest uppercase font-mono text-[#A7C1C1] block mb-2">
                Rewear Shift
              </span>
              <div className="text-2xl sm:text-3xl font-serif-editorial text-[#F5F1E8]">
                &ldquo;What could this become next?&rdquo;
              </div>
              <p className="text-xs text-[#F5F1E8]/70 mt-3">Active curiosity that preserves fabric and crafts stories.</p>
            </div>
          </div>
        </div>

        {/* Interactive Wardrobe Reason Explorer */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-serif-editorial text-[#1D1C19]">
              Why are clothes sitting idle in your closet?
            </h3>
            <span className="text-xs text-[#1D1C19]/60">Select to see its circular pivot</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {reasons.map((r, idx) => (
              <button
                key={r.label}
                onClick={() => setSelectedReason(idx)}
                className={`p-3 text-left border text-xs font-medium transition-all ${
                  selectedReason === idx
                    ? 'border-[#1D1C19] bg-[#1D1C19] text-white shadow-sm'
                    : 'border-[#1D1C19]/15 bg-white/50 text-[#1D1C19] hover:border-[#1D1C19]/40'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Reason Response Box */}
          <div className="p-6 bg-white border border-[#1D1C19]/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C85C3D]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Perspective Shift</span>
              </div>
              <p className="text-base text-[#1D1C19] font-serif-editorial">
                &ldquo;{reasons[selectedReason].shift}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs uppercase tracking-wider text-[#1D1C19]/60">Recommended Action:</span>
              <span className="px-3 py-1.5 bg-[#1D1C19]/5 border border-[#1D1C19]/20 text-xs font-semibold uppercase tracking-wider text-[#1D1C19]">
                {reasons[selectedReason].bestPath}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
