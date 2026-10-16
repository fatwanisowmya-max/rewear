import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenDecisionGuide: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenDecisionGuide }) => {
  return (
    <section className="relative py-28 md:py-36 bg-[#1D1C19] text-[#F5F1E8] overflow-hidden border-t border-white/10">
      {/* Background radial atmosphere */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C85C3D]/15 via-transparent to-transparent blur-2xl"
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#A7C1C1]">
          <Sparkles className="w-3.5 h-3.5 text-[#C85C3D]" />
          <span>The Pivotal Moment</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-editorial font-normal leading-[1.05] text-white">
          BEFORE YOU THROW IT AWAY...
        </h2>

        <p className="text-2xl sm:text-4xl font-serif-editorial text-[#C85C3D] italic">
          WHAT ELSE COULD THIS BECOME?
        </p>

        {/* Four Words Grid as requested in PRD */}
        <div className="pt-6 pb-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 bg-white/5 border border-white/15">
              <span className="text-xl sm:text-2xl font-serif-editorial text-white tracking-wider block">
                SELL IT.
              </span>
              <span className="text-[11px] text-white/50 uppercase tracking-widest mt-1 block">
                Pass the Value
              </span>
            </div>

            <div className="p-4 bg-white/5 border border-white/15">
              <span className="text-xl sm:text-2xl font-serif-editorial text-white tracking-wider block">
                SWAP IT.
              </span>
              <span className="text-[11px] text-white/50 uppercase tracking-widest mt-1 block">
                Circulate Love
              </span>
            </div>

            <div className="p-4 bg-white/5 border border-white/15">
              <span className="text-xl sm:text-2xl font-serif-editorial text-white tracking-wider block">
                REMAKE IT.
              </span>
              <span className="text-[11px] text-white/50 uppercase tracking-widest mt-1 block">
                Visible Mending
              </span>
            </div>

            <div className="p-4 bg-white/5 border border-white/15">
              <span className="text-xl sm:text-2xl font-serif-editorial text-white tracking-wider block">
                DONATE IT.
              </span>
              <span className="text-[11px] text-white/50 uppercase tracking-widest mt-1 block">
                Human Dignity
              </span>
            </div>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="pt-4">
          <button
            onClick={onOpenDecisionGuide}
            className="px-10 py-5 bg-[#C85C3D] hover:bg-white hover:text-[#1D1C19] text-white text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all inline-flex items-center gap-3 shadow-xl"
          >
            <span>Give It Another Life</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-white/40 tracking-wider">
          Interactive Garment Decision Pathfinder · Takes 30 seconds
        </p>
      </div>
    </section>
  );
};
