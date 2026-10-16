import React from 'react';
import { Sparkles, Globe, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F5F1E8] border-t border-[#1D1C19]/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#737B4B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Brand Origin & Mission</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-normal leading-tight text-[#1D1C19]">
            WHY REWEAR?
          </h2>
        </div>

        <div className="p-8 sm:p-12 bg-white/80 border border-[#1D1C19]/15 space-y-8">
          <p className="text-xl sm:text-2xl font-serif-editorial text-[#1D1C19] leading-relaxed">
            Rewear began with a simple question:
          </p>

          <blockquote className="pl-6 border-l-2 border-[#C85C3D] text-2xl sm:text-3xl font-serif-editorial italic text-[#C85C3D]">
            &ldquo;What if unwanted clothes weren&apos;t the end of the story?&rdquo;
          </blockquote>

          <p className="text-base sm:text-lg text-[#1D1C19]/80 leading-relaxed font-sans">
            We imagine a world where clothes move from person to person, wardrobe to wardrobe, and form to form—staying useful, loved, and distinct for longer.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#1D1C19]/10 text-xs text-[#1D1C19]/75">
            <div>
              <span className="font-semibold text-[#1D1C19] uppercase tracking-wider block mb-1">
                For Young Creatives
              </span>
              Empowering Gen Z and young adults to discover thrift identity and unique personal style without fast-fashion waste.
            </div>

            <div>
              <span className="font-semibold text-[#1D1C19] uppercase tracking-wider block mb-1">
                For Garment Longevity
              </span>
              Promoting visible mending, artisan Sashiko stitching, and conscious care over seasonal obsolescence.
            </div>

            <div>
              <span className="font-semibold text-[#1D1C19] uppercase tracking-wider block mb-1">
                For Shared Communities
              </span>
              Turning closets into fluid circulation networks through local clothing swaps and thoughtful mutual aid donations.
            </div>
          </div>

          <div className="pt-6 border-t border-[#1D1C19]/10 text-center">
            <p className="text-xl font-serif-editorial italic text-[#1D1C19]">
              Because fashion shouldn&apos;t end when you&apos;re finished wearing it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
