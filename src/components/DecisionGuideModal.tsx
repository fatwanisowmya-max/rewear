import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw } from 'lucide-react';
import { POSSIBILITIES_DATA } from '../data/mockData';
import { PossibilityType } from '../types';

interface DecisionGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPossibility: (type: PossibilityType) => void;
}

export const DecisionGuideModal: React.FC<DecisionGuideModalProps> = ({
  isOpen,
  onClose,
  onSelectPossibility,
}) => {
  const [step, setStep] = useState<number>(1);
  const [condition, setCondition] = useState<string>('pristine');
  const [goal, setGoal] = useState<string>('budget');
  const [result, setResult] = useState<PossibilityType | null>(null);

  if (!isOpen) return null;

  const handleComputeResult = (selectedCondition: string, selectedGoal: string) => {
    if (selectedCondition === 'damaged') {
      setResult('upcycle');
    } else if (selectedGoal === 'donate' || selectedGoal === 'community') {
      setResult('donate');
    } else if (selectedGoal === 'swap' || selectedGoal === 'refresh') {
      setResult('exchange');
    } else if (selectedCondition === 'pristine' || selectedGoal === 'budget') {
      setResult('resell');
    } else {
      setResult('exchange');
    }
    setStep(3);
  };

  const reset = () => {
    setStep(1);
    setCondition('pristine');
    setGoal('budget');
    setResult(null);
  };

  const matchedPossibility = result ? POSSIBILITIES_DATA.find((p) => p.id === result) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1D1C19]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#F5F1E8] border border-[#1D1C19]/20 shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1D1C19]/10 mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C85C3D]" />
            <h3 className="text-sm font-semibold tracking-wider text-[#1D1C19] uppercase">
              Garment Pathfinder: Give It Another Life
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#1D1C19] hover:text-[#C85C3D] transition-colors"
            aria-label="Close Pathfinder"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Condition Assessment */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono text-[#C85C3D] uppercase block mb-1">
                Question 01 of 02
              </span>
              <h4 className="text-2xl font-serif-editorial text-[#1D1C19]">
                What is the physical condition of this piece?
              </h4>
              <p className="text-xs text-[#1D1C19]/70 mt-1">
                Be honest about wear, seams, and fabric integrity.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: 'pristine',
                  title: 'Like-New / Pristine',
                  desc: 'Tags attached or worn very few times with zero stains or damage.'
                },
                {
                  id: 'good',
                  title: 'Good Pre-Loved Shape',
                  desc: 'Normal light wear, clean fabric, fully intact zippers and buttons.'
                },
                {
                  id: 'minor',
                  title: 'Minor Fixable Flaw',
                  desc: 'Missing button, loose hem, or faint spot that can be laundered.'
                },
                {
                  id: 'damaged',
                  title: 'Structural Tear or Blown Fabric',
                  desc: 'Torn knee, moth holes, frayed cuffs, or heavy distress.'
                }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setCondition(opt.id);
                    if (opt.id === 'damaged') {
                      setResult('upcycle');
                      setStep(3);
                    } else {
                      setStep(2);
                    }
                  }}
                  className={`w-full p-4 text-left border transition-all ${
                    condition === opt.id
                      ? 'border-[#1D1C19] bg-white shadow-sm'
                      : 'border-[#1D1C19]/15 bg-white/50 hover:border-[#1D1C19]/40'
                  }`}
                >
                  <div className="text-sm font-semibold text-[#1D1C19]">{opt.title}</div>
                  <div className="text-xs text-[#1D1C19]/70 mt-0.5">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: User Intent / Goal */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono text-[#C85C3D] uppercase block mb-1">
                Question 02 of 02
              </span>
              <h4 className="text-2xl font-serif-editorial text-[#1D1C19]">
                What outcome matters most to you?
              </h4>
              <p className="text-xs text-[#1D1C19]/70 mt-1">
                Tell us what you want to achieve with your wardrobe.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: 'budget',
                  title: 'Recoup Wardrobe Value ($)',
                  desc: 'Earn some funds back to invest into timeless quality pieces.'
                },
                {
                  id: 'refresh',
                  title: 'Refresh My Style with Novelty',
                  desc: 'Trade pieces with friends to refresh outfits without spending money.'
                },
                {
                  id: 'donate',
                  title: 'Give Warmth to Community Needs',
                  desc: 'Directly support youth shelters, job readiness, or mutual aid.'
                },
                {
                  id: 'upcycle',
                  title: 'Create Something Unique with My Hands',
                  desc: 'Re-tailor, shorten, or embroider for an artisan one-of-one silhouette.'
                }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setGoal(opt.id);
                    handleComputeResult(condition, opt.id);
                  }}
                  className={`w-full p-4 text-left border transition-all ${
                    goal === opt.id
                      ? 'border-[#1D1C19] bg-white shadow-sm'
                      : 'border-[#1D1C19]/15 bg-white/50 hover:border-[#1D1C19]/40'
                  }`}
                >
                  <div className="text-sm font-semibold text-[#1D1C19]">{opt.title}</div>
                  <div className="text-xs text-[#1D1C19]/70 mt-0.5">{opt.desc}</div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(1)}
              className="text-xs text-[#1D1C19]/70 hover:text-[#1D1C19] underline"
            >
              ← Back to condition assessment
            </button>
          </div>
        )}

        {/* Step 3: Recommended Circular Match */}
        {step === 3 && matchedPossibility && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 bg-white border border-[#1D1C19]/15 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C85C3D] font-bold">
                  Recommended Circular Destination
                </span>
                <span className="text-xs font-mono px-2 py-0.5 bg-[#1D1C19] text-white">
                  {matchedPossibility.number}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-4 aspect-video sm:aspect-square overflow-hidden bg-neutral-100">
                  <img
                    src={matchedPossibility.image}
                    alt={matchedPossibility.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="sm:col-span-8 space-y-2">
                  <h4 className="text-3xl font-serif-editorial text-[#1D1C19]">
                    {matchedPossibility.title}
                  </h4>
                  <p className="text-xs font-serif-editorial italic text-[#C85C3D]">
                    &ldquo;{matchedPossibility.tagline}&rdquo;
                  </p>
                  <p className="text-xs text-[#1D1C19]/80 leading-relaxed">
                    {matchedPossibility.summary}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1D1C19]/10">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#1D1C19]/60 block mb-2">
                  Recommended Immediate Steps:
                </span>
                <div className="space-y-1.5">
                  {matchedPossibility.details.howItWorks.map((st) => (
                    <div key={st.step} className="flex items-start gap-2 text-xs text-[#1D1C19]/80">
                      <Check className="w-3.5 h-3.5 text-[#737B4B] shrink-0 mt-0.5" />
                      <span><strong>{st.title}:</strong> {st.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-xs text-[#1D1C19]/70 hover:text-[#1D1C19]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Test Another Garment</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#1D1C19] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C85C3D] transition-colors"
              >
                I&apos;m Ready to Take Action
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
