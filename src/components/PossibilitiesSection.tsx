import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { POSSIBILITIES_DATA } from '../data/mockData';
import { PossibilityCard } from '../types';
import { PossibilityModal } from './PossibilityModal';

interface PossibilitiesSectionProps {
  onOpenDecisionGuide: () => void;
}

export const PossibilitiesSection: React.FC<PossibilitiesSectionProps> = ({
  onOpenDecisionGuide,
}) => {
  const [selectedCard, setSelectedCard] = useState<PossibilityCard | null>(null);

  return (
    <section id="possibilities" className="py-24 bg-[#F5F1E8] border-t border-[#1D1C19]/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#C85C3D] mb-3">
              One Garment. Four Possibilities.
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-editorial font-normal leading-tight text-[#1D1C19]">
              YOUR CLOTHES HAVE OPTIONS.
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#1D1C19]/70 max-w-md">
            Every garment has value beyond its first owner. Choose the path that matches its current condition and your personal lifestyle.
          </p>
        </div>

        {/* Four Large Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POSSIBILITIES_DATA.map((card) => (
            <div
              key={card.id}
              className="group flex flex-col bg-white border border-[#1D1C19]/15 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#1D1C19]/40"
            >
              {/* Card Image with Hover Zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5">
                <img
                  src={card.image}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#1D1C19] text-[#F5F1E8] text-xs font-mono font-bold tracking-widest">
                  {card.number}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <h3 className="text-2xl font-serif-editorial text-[#1D1C19] mb-2 tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-xs font-medium text-[#C85C3D] tracking-wide mb-3">
                    {card.tagline}
                  </p>
                  <p className="text-xs text-[#1D1C19]/75 leading-relaxed">
                    {card.summary}
                  </p>
                </div>

                {/* Card CTA Button */}
                <div className="pt-4 border-t border-[#1D1C19]/10">
                  <button
                    onClick={() => setSelectedCard(card)}
                    className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#1D1C19] bg-[#1D1C19]/5 hover:bg-[#1D1C19] hover:text-white transition-colors flex items-center justify-between group-hover:bg-[#1D1C19] group-hover:text-white"
                  >
                    <span>{card.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 p-6 bg-white/70 border border-[#1D1C19]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#C85C3D]" />
            <span className="text-sm font-medium text-[#1D1C19]">
              Not sure which path fits your specific garment?
            </span>
          </div>
          <button
            onClick={onOpenDecisionGuide}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85C3D] hover:bg-[#1D1C19] transition-colors shrink-0"
          >
            Launch Garment Pathfinder
          </button>
        </div>
      </div>

      {/* Deep-dive detail modal */}
      <PossibilityModal
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
        onOpenDecisionGuide={onOpenDecisionGuide}
      />
    </section>
  );
};
