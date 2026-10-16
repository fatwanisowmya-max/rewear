import React, { useState } from 'react';
import { GARMENT_JOURNEYS } from '../data/mockData';
import { RefreshCw, ArrowRight, Layers, CheckCircle } from 'lucide-react';

export const GarmentJourneySection: React.FC = () => {
  const [selectedJourneyIdx, setSelectedJourneyIdx] = useState(0);
  const journey = GARMENT_JOURNEYS[selectedJourneyIdx];
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="py-24 bg-[#F5F1E8] border-t border-[#1D1C19]/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#737B4B] mb-3">
            Circular Lifecycle Visualization
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-normal leading-tight text-[#1D1C19]">
            ONE GARMENT.<br />MANY LIVES.
          </h2>
          <p className="text-base sm:text-lg text-[#1D1C19]/75 mt-4">
            Clothing does not follow a straight line from store to incinerator. When cared for and reimagined, a single piece branches into endless chapters.
          </p>
        </div>

        {/* Conceptual Diagram Branching Tree */}
        <div className="mb-16 p-8 bg-white/80 border border-[#1D1C19]/15">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#1D1C19]/60 text-center mb-8">
            The Rewear Branching Model
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Top Node */}
            <div className="flex justify-center">
              <div className="px-6 py-3 bg-[#1D1C19] text-[#F5F1E8] text-xs font-semibold uppercase tracking-wider">
                Old Garment (Your Wardrobe)
              </div>
            </div>

            {/* Connecting Vertical Line */}
            <div className="w-0.5 h-8 bg-[#1D1C19]/30 mx-auto" />

            {/* Horizontal Branching Line */}
            <div className="relative">
              <div className="h-0.5 bg-[#1D1C19]/30 w-full" />
              <div className="grid grid-cols-3 text-center pt-4 gap-2">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-[#1D1C19]/30 -mt-4 mb-2" />
                  <span className="px-3 py-1.5 bg-[#C85C3D]/10 border border-[#C85C3D]/30 text-xs font-semibold uppercase text-[#C85C3D]">
                    Resell
                  </span>
                  <span className="text-[11px] text-[#1D1C19]/60 mt-1">Pass to new owner</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-[#1D1C19]/30 -mt-4 mb-2" />
                  <span className="px-3 py-1.5 bg-[#737B4B]/10 border border-[#737B4B]/30 text-xs font-semibold uppercase text-[#737B4B]">
                    Exchange
                  </span>
                  <span className="text-[11px] text-[#1D1C19]/60 mt-1">Direct community swap</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-[#1D1C19]/30 -mt-4 mb-2" />
                  <span className="px-3 py-1.5 bg-[#A7C1C1]/20 border border-[#A7C1C1]/40 text-xs font-semibold uppercase text-[#1D1C19]">
                    Donate
                  </span>
                  <span className="text-[11px] text-[#1D1C19]/60 mt-1">Gift to those in need</span>
                </div>
              </div>
            </div>

            {/* Lower Branch: Upcycling & New Life */}
            <div className="pt-8 flex flex-col items-center">
              <div className="w-0.5 h-8 bg-[#1D1C19]/30" />
              <div className="px-6 py-2.5 bg-[#C85C3D] text-white text-xs font-semibold uppercase tracking-wider">
                Upcycle & Repair (Visible Mending / Redesign)
              </div>
              <div className="w-0.5 h-8 bg-[#1D1C19]/30" />
              <div className="px-8 py-3 bg-[#1D1C19] text-[#F5F1E8] text-xs font-semibold uppercase tracking-widest border border-[#1D1C19]">
                Continuous New Life
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Case Studies / Stepper */}
        <div className="bg-white border border-[#1D1C19]/15 p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1D1C19]/10 pb-6 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#1D1C19]/60 block mb-1">
                Case Study {selectedJourneyIdx + 1} of {GARMENT_JOURNEYS.length}
              </span>
              <h3 className="text-2xl font-serif-editorial text-[#1D1C19]">
                {journey.garmentName}
              </h3>
              <div className="text-xs text-[#1D1C19]/70 mt-1 flex items-center gap-2">
                <span>Material: {journey.material}</span>
                <span>·</span>
                <span>Originated: {journey.originalYear}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {GARMENT_JOURNEYS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedJourneyIdx(idx);
                    setActiveStage(0);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase transition-colors ${
                    selectedJourneyIdx === idx
                      ? 'bg-[#1D1C19] text-white'
                      : 'bg-black/5 text-[#1D1C19] hover:bg-black/10'
                  }`}
                >
                  Case {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Stages */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {journey.stages.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-3 text-left border transition-all ${
                  activeStage === idx
                    ? 'border-[#1D1C19] bg-[#1D1C19] text-white'
                    : 'border-[#1D1C19]/15 bg-white/50 text-[#1D1C19] hover:border-[#1D1C19]/40'
                }`}
              >
                <div className="text-[11px] font-mono opacity-60">{stage.year}</div>
                <div className="text-xs font-semibold tracking-tight truncate mt-0.5">
                  {stage.title}
                </div>
                <div className="text-[10px] uppercase tracking-wider opacity-75 mt-1">
                  {stage.path}
                </div>
              </button>
            ))}
          </div>

          {/* Active Stage Callout */}
          <div className="p-6 bg-[#F5F1E8] border border-[#1D1C19]/10 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#C85C3D]">
              <span>Stage {activeStage + 1}: {journey.stages[activeStage].title}</span>
              <span className="font-mono text-[#1D1C19]/60">{journey.stages[activeStage].year}</span>
            </div>

            <p className="text-base font-serif-editorial text-[#1D1C19]">
              &ldquo;{journey.stages[activeStage].state}&rdquo;
            </p>

            <div className="pt-2 text-xs text-[#1D1C19]/70 flex items-center gap-2">
              <span className="font-semibold text-[#1D1C19]">Custodian:</span>
              <span>{journey.stages[activeStage].owner}</span>
              <span className="text-[#1D1C19]/30">·</span>
              <span className="font-semibold text-[#1D1C19]">Circular Path:</span>
              <span className="uppercase text-[#C85C3D] font-mono">{journey.stages[activeStage].path}</span>
            </div>
          </div>

          {/* Takeaway */}
          <div className="mt-6 flex items-center gap-3 text-xs text-[#737B4B] font-semibold">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>{journey.takeaway}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
