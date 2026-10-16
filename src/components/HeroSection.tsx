import React, { useState } from 'react';
import { ArrowDown, Film, Image as ImageIcon, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/mockData';

interface HeroSectionProps {
  onOpenDecisionGuide: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDecisionGuide }) => {
  const [viewMode, setViewMode] = useState<'photo' | 'motion'>('photo');

  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-32 bg-[#F5F1E8]">
      {/* Ambient Circular Motif in background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full border border-[#1D1C19]/5 bg-gradient-to-b from-[#C85C3D]/5 via-[#737B4B]/5 to-transparent blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Subtle kicker */}
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[#C85C3D] mb-6">
          <span>Brand Statement</span>
          <span aria-hidden="true" className="text-[#1D1C19]/30">·</span>
          <span className="text-[#1D1C19]/70">Every garment deserves another chapter</span>
        </div>

        {/* Hero Editorial Headlines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.05] tracking-tight font-serif-editorial text-[#1D1C19]">
              <span className="block opacity-90 transition-opacity">DON&apos;T</span>
              <span className="block italic text-[#C85C3D]">THROW IT AWAY.</span>
              <span className="block font-medium">GIVE IT ANOTHER LIFE.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#1D1C19]/80 max-w-xl font-normal leading-relaxed pt-2">
              The clothes you no longer wear can become someone&apos;s favourite, something completely new, or a gift to someone who needs it.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#possibilities"
                className="px-8 py-4 bg-[#1D1C19] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#C85C3D] transition-colors inline-flex items-center gap-2"
              >
                <span>Discover Rewear</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenDecisionGuide}
                className="px-7 py-4 border border-[#1D1C19] text-[#1D1C19] text-xs font-semibold uppercase tracking-widest hover:bg-[#1D1C19] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#C85C3D]" />
                <span>Give It Another Life</span>
              </button>
            </div>

            {/* Four possibilities horizontal micro-bar */}
            <div className="pt-8 border-t border-[#1D1C19]/10">
              <div className="text-xs tracking-wider uppercase text-[#1D1C19]/60 mb-2">Four Circular Paths</div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold tracking-wider text-[#1D1C19]">
                <span className="text-[#C85C3D]">01 RESELL</span>
                <span className="text-[#1D1C19]/30">→</span>
                <span className="text-[#737B4B]">02 EXCHANGE</span>
                <span className="text-[#1D1C19]/30">→</span>
                <span className="text-[#C85C3D]">03 UPCYCLE</span>
                <span className="text-[#1D1C19]/30">→</span>
                <span className="text-[#A7C1C1]">04 DONATE</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Media Frame with Cinema Toggle */}
          <div className="lg:col-span-5 relative">
            <div className="relative group overflow-hidden bg-[#1D1C19]/5 border border-[#1D1C19]/15 shadow-sm">
              {/* Media Switcher Header */}
              <div className="absolute top-4 right-4 z-20 flex items-center bg-[#1D1C19]/80 backdrop-blur-md p-1">
                <button
                  onClick={() => setViewMode('photo')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-[11px] uppercase tracking-wider font-semibold transition-colors ${
                    viewMode === 'photo' ? 'bg-[#F5F1E8] text-[#1D1C19]' : 'text-[#F5F1E8]/70 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Stills</span>
                </button>
                <button
                  onClick={() => setViewMode('motion')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-[11px] uppercase tracking-wider font-semibold transition-colors ${
                    viewMode === 'motion' ? 'bg-[#F5F1E8] text-[#1D1C19]' : 'text-[#F5F1E8]/70 hover:text-white'
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>Motion Reel</span>
                </button>
              </div>

              {/* Visual Container */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
                {viewMode === 'photo' ? (
                  <img
                    src={HERO_IMAGE}
                    alt="Young stylish models in repurposed denim and vintage trench coat"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={HERO_IMAGE}
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://assets.mixkit.co/videos/preview/mixkit-models-posing-for-a-fashion-photoshoot-42413-large.mp4"
                      type="video/mp4"
                    />
                  </video>
                )}

                {/* Subtle bottom gradient scrim */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#1D1C19]/90 via-[#1D1C19]/40 to-transparent text-white">
                  <div className="text-xs uppercase tracking-widest text-[#F5F1E8]/75 mb-1">
                    Rewear Movement Editorial · Issue 01
                  </div>
                  <div className="text-sm font-serif-editorial italic text-[#F5F1E8]">
                    &ldquo;Fashion shouldn&apos;t end when you&apos;re finished wearing it.&rdquo;
                  </div>
                </div>
              </div>
            </div>

            {/* Quiet caption */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#1D1C19]/60">
              <span>Editorial Series: The Next Chapter</span>
              <span>100% Pre-Loved Curation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
