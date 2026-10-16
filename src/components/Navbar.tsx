import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenDecisionGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDecisionGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Why Rewear', href: '#problem' },
    { label: 'Four Options', href: '#possibilities' },
    { label: 'Stories', href: '#stories' },
    { label: 'Reels & Studio', href: '#reels' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Impact', href: '#impact' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#1D1C19]/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="text-2xl font-bold tracking-widest text-[#1D1C19] font-serif-editorial whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity"
        >
          REWEAR
        </a>

        {/* Zone 2: Navigation Links (single line, clean text, no pills) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-[#1D1C19]/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#C85C3D] transition-colors whitespace-nowrap shrink-0 py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C85C3D] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenDecisionGuide}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1D1C19] hover:bg-[#C85C3D] transition-colors rounded-none whitespace-nowrap shrink-0"
          >
            <span>Give It Another Life</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1D1C19] hover:text-[#C85C3D] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F1E8] border-b border-[#1D1C19]/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1D1C19] hover:text-[#C85C3D] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-[#1D1C19]/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDecisionGuide();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1D1C19] hover:bg-[#C85C3D] transition-colors"
            >
              <span>Give It Another Life</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
