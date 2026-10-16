import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenDecisionGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDecisionGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1D1C19] text-[#F5F1E8] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-3xl font-bold tracking-widest font-serif-editorial text-white hover:opacity-90 transition-opacity inline-block"
            >
              REWEAR
            </a>
            <p className="text-base font-serif-editorial italic text-[#C85C3D]">
              Every garment deserves another chapter.
            </p>
            <p className="text-xs text-white/60 max-w-sm leading-relaxed">
              Rewear is a fashion sustainability and circular branding initiative encouraging young people to extend clothing lifecycles through resale, exchange, upcycling, and donation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#A7C1C1]">
              Four Possibilities
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#possibilities" className="hover:text-white transition-colors">
                  01 Resell — Pass the Value
                </a>
              </li>
              <li>
                <a href="#possibilities" className="hover:text-white transition-colors">
                  02 Exchange — Community Swaps
                </a>
              </li>
              <li>
                <a href="#possibilities" className="hover:text-white transition-colors">
                  03 Upcycle — Reimagined Craft
                </a>
              </li>
              <li>
                <a href="#possibilities" className="hover:text-white transition-colors">
                  04 Donate — Thoughtful Mutual Aid
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Exploration */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#A7C1C1]">
              Circularity Resources
            </div>
            <div className="space-y-2 text-xs text-white/70">
              <div>
                <a href="#stories" className="hover:text-white transition-colors">
                  Garment Memory Archives
                </a>
              </div>
              <div>
                <a href="#reels" className="hover:text-white transition-colors">
                  Circular Motion Reels & Lookbooks
                </a>
              </div>
              <div>
                <a href="#studio" className="hover:text-white transition-colors">
                  Atelier Before & After Studio
                </a>
              </div>
              <div>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  Garment Care & Repair Rituals
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDecisionGuide}
                className="px-4 py-2 bg-[#C85C3D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#1D1C19] transition-colors"
              >
                Launch Decision Pathfinder
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {new Date().getFullYear()} REWEAR. All rights reserved. Give your clothes another life.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
