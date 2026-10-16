import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { PossibilityCard } from '../types';

interface PossibilityModalProps {
  card: PossibilityCard | null;
  onClose: () => void;
  onOpenDecisionGuide: () => void;
}

export const PossibilityModal: React.FC<PossibilityModalProps> = ({
  card,
  onClose,
  onOpenDecisionGuide,
}) => {
  if (!card) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1D1C19]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#F5F1E8] border border-[#1D1C19]/20 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F5F1E8] border-b border-[#1D1C19]/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#C85C3D]">
              {card.number}
            </span>
            <span className="text-sm font-semibold tracking-wider text-[#1D1C19] uppercase">
              {card.title} Protocol
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#1D1C19] hover:text-[#C85C3D] hover:bg-[#1D1C19]/5 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Hero Visual & Title */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto overflow-hidden bg-black/5 border border-[#1D1C19]/10">
            <img
              src={card.image}
              alt={card.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-7 space-y-4">
            <h2 className="text-3xl font-serif-editorial text-[#1D1C19]">
              {card.title}
            </h2>
            <p className="text-base text-[#1D1C19]/90 font-serif-editorial italic">
              &ldquo;{card.tagline}&rdquo;
            </p>
            <p className="text-sm text-[#1D1C19]/75 leading-relaxed">
              {card.summary}
            </p>

            <div className="pt-2 border-t border-[#1D1C19]/10">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#1D1C19]/60 block mb-2">
                Best Suited For
              </span>
              <ul className="space-y-1.5 text-xs text-[#1D1C19]/80">
                {card.details.idealFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#737B4B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* How it works steps */}
        <div className="px-6 sm:px-8 pb-6 border-t border-[#1D1C19]/10 pt-6">
          <h3 className="text-xs uppercase tracking-widest font-semibold text-[#1D1C19]/70 mb-4">
            Three Steps to Take Action
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {card.details.howItWorks.map((step) => (
              <div key={step.step} className="p-4 bg-white/70 border border-[#1D1C19]/10">
                <div className="text-xs font-mono font-bold text-[#C85C3D] mb-1">
                  Step 0{step.step}
                </div>
                <h4 className="text-sm font-semibold text-[#1D1C19] mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-[#1D1C19]/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Emotional Quote banner */}
        <div className="mx-6 sm:mx-8 mb-6 p-4 bg-[#1D1C19] text-[#F5F1E8]">
          <div className="text-xs uppercase tracking-widest text-[#A7C1C1] mb-1">
            Rewear Philosophy
          </div>
          <p className="text-sm font-serif-editorial italic">
            &ldquo;{card.details.emotionalQuote}&rdquo;
          </p>
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 sm:px-8 py-4 bg-[#1D1C19]/5 border-t border-[#1D1C19]/10">
          <span className="text-xs text-[#1D1C19]/70">
            {card.details.actionPrompt}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#1D1C19] hover:bg-black/5 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenDecisionGuide();
              }}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1D1C19] hover:bg-[#C85C3D] transition-colors inline-flex items-center gap-2"
            >
              <span>Test My Clothes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
