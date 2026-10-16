import React, { useState } from 'react';
import { UPCYCLE_PROJECTS } from '../data/mockData';
import { Scissors, Sparkles, Clock, Check, ArrowRight, Wand2 } from 'lucide-react';

export const GarmentReimaginerSection: React.FC = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const project = UPCYCLE_PROJECTS[activeProjectIdx];

  // Custom DIY Generator State
  const [garmentType, setGarmentType] = useState('Heavy Wool Knit');
  const [garmentIssue, setGarmentIssue] = useState('Moth holes / frayed cuffs');
  const [generatedIdea, setGeneratedIdea] = useState<{
    title: string;
    description: string;
    time: string;
    difficulty: string;
  } | null>(null);

  const generateIdea = () => {
    const ideasMap: Record<string, { title: string; description: string; time: string; difficulty: string }> = {
      'Heavy Wool Knit': {
        title: 'Felted Fingerless Mittens & Thermal Coasters',
        description: 'Hot-wash to felt the wool fibres so they won’t fray. Cut sleeves into textured wristwarmers and use the chest panels for heat-resistant dining mats.',
        time: '1.5 Hours',
        difficulty: 'Beginner'
      },
      'Distressed Denim': {
        title: 'Boro Patchwork Daily Carryall',
        description: 'Harvest the intact thigh fabric and back pockets. Sandwich contrasting denim swatches with white cotton thread stitches for structural character.',
        time: '3 Hours',
        difficulty: 'Intermediate'
      },
      'Oversized Flannel Shirt': {
        title: 'Boxy Cropped Chore Smock',
        description: 'Square off the bottom curved hem and add two large patch pockets crafted from the removed sleeve cuff fabric.',
        time: '2 Hours',
        difficulty: 'Beginner'
      },
      'Silk Scarf / Blouse': {
        title: 'Deadstock Silk Scrunchies & Pocket Square',
        description: 'Delicate hand-rolled hems or gathered elastic casings create luxury accessories that celebrate intact silk prints.',
        time: '45 Mins',
        difficulty: 'Easy'
      }
    };

    setGeneratedIdea(ideasMap[garmentType] || ideasMap['Heavy Wool Knit']);
  };

  return (
    <section id="studio" className="py-24 bg-[#F5F1E8] border-t border-[#1D1C19]/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#C85C3D] mb-3">
            <Scissors className="w-3.5 h-3.5" />
            <span>Interactive Garment Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial text-[#1D1C19]">
            BEFORE & AFTER: THE ART OF UPCYCLING
          </h2>
          <p className="text-base sm:text-lg text-[#1D1C19]/75 mt-3">
            Drag the visual slider to inspect how damaged or unworn fabrics transform into bespoke, functional contemporary pieces.
          </p>
        </div>

        {/* Project Selector */}
        <div className="flex gap-2 mb-8">
          {UPCYCLE_PROJECTS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveProjectIdx(idx)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeProjectIdx === idx
                  ? 'bg-[#1D1C19] text-white'
                  : 'bg-white/70 text-[#1D1C19] hover:bg-white border border-[#1D1C19]/10'
              }`}
            >
              Transformation 0{idx + 1}
            </button>
          ))}
        </div>

        {/* Before / After Interactive Split-Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Interactive Comparison Slider */}
          <div className="lg:col-span-7 bg-white border border-[#1D1C19]/15 p-4 sm:p-6">
            <div className="relative aspect-[4/3] w-full select-none overflow-hidden bg-neutral-100 border border-[#1D1C19]/10">
              {/* After Image (Background) */}
              <img
                src={project.afterImage}
                alt={`Transformed: ${project.newCreation}`}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#1D1C19]/80 backdrop-blur-md text-[11px] font-semibold text-white uppercase tracking-wider">
                After: {project.newCreation}
              </div>

              {/* Before Image (Clipped Foreground) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={project.beforeImage}
                  alt={`Original: ${project.originalGarment}`}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ width: '100%', maxWidth: 'none' }}
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#C85C3D]/90 backdrop-blur-md text-[11px] font-semibold text-white uppercase tracking-wider">
                  Before: {project.originalGarment}
                </div>
              </div>

              {/* Slider Divider Line & Knob */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-md cursor-ew-resize z-20 flex items-center justify-center -ml-0.5"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white shadow-xl border border-neutral-300 flex items-center justify-center text-xs font-bold text-neutral-700">
                  ⇄
                </div>
              </div>

              {/* Invisible native range slider for touch and mouse handling */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Comparison slider between before and after garment"
              />
            </div>

            {/* Slider Instructions */}
            <div className="flex items-center justify-between mt-3 text-xs text-[#1D1C19]/60">
              <span>← Drag slider left/right to compare</span>
              <span className="font-mono">{sliderPosition}% Transformation</span>
            </div>
          </div>

          {/* Blueprint & Craft Steps */}
          <div className="lg:col-span-5 bg-white border border-[#1D1C19]/15 p-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase text-[#C85C3D] block mb-1">
                Atelier Craft Blueprint
              </span>
              <h3 className="text-xl font-serif-editorial text-[#1D1C19]">
                {project.title}
              </h3>
            </div>

            {/* Metadata Pills */}
            <div className="flex items-center gap-4 text-xs font-mono text-[#1D1C19]/70 pt-2 border-t border-[#1D1C19]/10">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C85C3D]" />
                {project.timeEstimate}
              </span>
              <span>·</span>
              <span>Skill: {project.skillLevel}</span>
            </div>

            {/* Materials List */}
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1D1C19]/60 mb-2">
                Required Materials
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.materials.map((m, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-[#1D1C19]/5 text-xs text-[#1D1C19]/80 border border-[#1D1C19]/10"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#1D1C19]/60 mb-2">
                Methodology
              </div>
              <ol className="space-y-2 text-xs text-[#1D1C19]/80">
                {project.steps.map((st, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-mono font-bold text-[#C85C3D] shrink-0 mt-0.5">
                      0{i + 1}.
                    </span>
                    <span>{st}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Custom Garment Redesign Generator */}
        <div className="p-8 bg-white border border-[#1D1C19]/15 space-y-6">
          <div className="flex items-center justify-between border-b border-[#1D1C19]/10 pb-4">
            <div className="flex items-center gap-2">
              <Wand2 className="w-4 h-4 text-[#C85C3D]" />
              <h3 className="text-lg font-serif-editorial text-[#1D1C19]">
                Interactive Redesign Idea Generator
              </h3>
            </div>
            <span className="text-xs text-[#1D1C19]/60">Have a damaged item at home?</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#1D1C19]/70 mb-1.5">
                Garment Silhouette
              </label>
              <select
                value={garmentType}
                onChange={(e) => setGarmentType(e.target.value)}
                className="w-full px-3 py-2 bg-[#F5F1E8] border border-[#1D1C19]/20 text-xs font-medium text-[#1D1C19] focus:outline-none focus:border-[#1D1C19]"
              >
                <option value="Heavy Wool Knit">Heavy Wool Knit Sweater</option>
                <option value="Distressed Denim">Distressed Denim Trousers</option>
                <option value="Oversized Flannel Shirt">Oversized Flannel Shirt</option>
                <option value="Silk Scarf / Blouse">Silk Scarf / Blouse</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#1D1C19]/70 mb-1.5">
                Current Condition
              </label>
              <select
                value={garmentIssue}
                onChange={(e) => setGarmentIssue(e.target.value)}
                className="w-full px-3 py-2 bg-[#F5F1E8] border border-[#1D1C19]/20 text-xs font-medium text-[#1D1C19] focus:outline-none focus:border-[#1D1C19]"
              >
                <option value="Moth holes / frayed cuffs">Moth holes / frayed cuffs</option>
                <option value="Blown knees / ripped seams">Blown knees / ripped seams</option>
                <option value="Outdated length / collar">Outdated length / collar</option>
                <option value="Stubborn stain / discoloration">Stubborn stain / discoloration</option>
              </select>
            </div>

            <button
              onClick={generateIdea}
              className="w-full py-2.5 px-4 bg-[#1D1C19] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C85C3D] transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Generate Transformation Plan</span>
            </button>
          </div>

          {/* Generated Result Callout */}
          {generatedIdea && (
            <div className="p-6 bg-[#F5F1E8] border border-[#C85C3D]/30 space-y-2 mt-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#C85C3D] font-bold">
                  Recommended Upcycling Project
                </span>
                <span className="text-xs font-mono text-[#1D1C19]/60">
                  Est: {generatedIdea.time} · {generatedIdea.difficulty}
                </span>
              </div>
              <h4 className="text-lg font-serif-editorial text-[#1D1C19]">
                {generatedIdea.title}
              </h4>
              <p className="text-xs text-[#1D1C19]/80 leading-relaxed">
                {generatedIdea.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
