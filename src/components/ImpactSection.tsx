import React from 'react';
import { CircleDot, RefreshCw, Feather, Users } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const pillars = [
    {
      action: 'REUSE',
      quote: 'Extend the chapters.',
      concept: 'Wearing what you already have or finding pre-loved gems is the simplest and most profound circular act.'
    },
    {
      action: 'RETHINK',
      quote: 'Challenge the novelty trap.',
      concept: 'Ask what an item can become next before treating it as something ready for discard.'
    },
    {
      action: 'REPAIR',
      quote: 'Celebrate the stitches.',
      concept: 'A visible stitch is a mark of pride, indicating that a garment is worth caring for.'
    },
    {
      action: 'REPASS',
      quote: 'Circulate within communities.',
      concept: 'Handing clothes to friends or local causes strengthens human connection and shared wardrobe culture.'
    }
  ];

  return (
    <section id="impact" className="py-24 bg-[#1D1C19] text-[#F5F1E8] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#A7C1C1]">
            Conceptual Circularity
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-normal leading-tight text-white">
            SMALL CHOICES.<br />BIGGER CIRCLES.
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-xl">
            We don&apos;t need a few people doing circularity perfectly. We need millions of people rethinking their wardrobes with care.
          </p>
        </div>

        {/* 4 Pillars Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p) => (
            <div
              key={p.action}
              className="p-8 bg-white/5 border border-white/10 flex flex-col justify-between space-y-6 hover:bg-white/10 transition-colors"
            >
              <div>
                <span className="text-2xl font-serif-editorial text-[#C85C3D] block mb-2 tracking-wide">
                  {p.action}
                </span>
                <p className="text-xs font-serif-editorial italic text-white/90 mb-3">
                  &ldquo;{p.quote}&rdquo;
                </p>
                <p className="text-xs text-white/60 leading-relaxed">
                  {p.concept}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-[#A7C1C1]">
                Living Circular Principle
              </div>
            </div>
          ))}
        </div>

        {/* Conceptual Impact Banner */}
        <div className="p-8 sm:p-12 bg-white/5 border border-white/15 text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xl sm:text-2xl font-serif-editorial text-white leading-relaxed italic">
            &ldquo;Every time a garment stays in use, its story continues. Zero waste is created when clothing remains cherished.&rdquo;
          </p>
          <div className="text-xs tracking-widest uppercase text-white/50 font-mono">
            Circularity · Provenance · Preservation
          </div>
        </div>
      </div>
    </section>
  );
};
