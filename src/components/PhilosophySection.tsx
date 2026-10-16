import React from 'react';
import { Compass, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'WEAR LONGER',
      tagline: 'Take care of the clothes you already own.',
      description: 'The most sustainable garment is already hanging in your wardrobe. Simple care habits—washing cold, spot cleaning, airing natural fibres, and depilling—double a fabric’s wearable lifespan.',
      ritual: 'Care Ritual: Wash less, steam often, hang on wooden wishbone hangers.'
    },
    {
      number: '02',
      title: 'PASS IT ON',
      tagline: "When you're done, let someone else enjoy them.",
      description: 'Wardrobes are temporary libraries, not permanent archives. Reselling, swapping with friends, or donating ensures garments continuously circulate through vibrant new stories.',
      ritual: 'Exchange Ritual: Host a seasonal 5-garment circle with three friends.'
    },
    {
      number: '03',
      title: "REMAKE WHAT'S LEFT",
      tagline: "Damaged doesn't always mean disposable.",
      description: 'A hole or tear is an architectural invitation. Visible mending with Sashiko stitching or re-tailoring transforms structural damage into a distinctive badge of honour.',
      ritual: 'Atelier Ritual: Turn frayed jeans cuffs into patch panels or tote pockets.'
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-[#F5F1E8] border-t border-[#1D1C19]/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#737B4B] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Foundational Core</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-normal leading-tight text-[#1D1C19]">
            WE BELIEVE CLOTHES SHOULD HAVE MORE THAN ONE LIFE.
          </h2>
          <p className="text-base sm:text-lg text-[#1D1C19]/75 mt-4">
            Fashion is culture, emotion, and expression. True luxury is not disposable novelty—it is longevity, craft, and care.
          </p>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p) => (
            <div
              key={p.number}
              className="p-8 bg-white/70 border border-[#1D1C19]/15 flex flex-col justify-between space-y-6 hover:border-[#1D1C19]/40 transition-colors"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#C85C3D]">
                  Principle {p.number}
                </span>

                <h3 className="text-2xl font-serif-editorial text-[#1D1C19]">
                  {p.title}
                </h3>

                <p className="text-sm font-medium text-[#737B4B] italic">
                  &ldquo;{p.tagline}&rdquo;
                </p>

                <p className="text-xs text-[#1D1C19]/75 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1D1C19]/10 text-xs text-[#1D1C19]/60 font-mono">
                {p.ritual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
