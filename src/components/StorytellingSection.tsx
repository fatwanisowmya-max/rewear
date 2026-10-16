import React, { useState } from 'react';
import { MEMORY_STORIES } from '../data/mockData';
import { Heart, Clock, ArrowRight } from 'lucide-react';

export const StorytellingSection: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const story = MEMORY_STORIES[activeStoryIndex];

  return (
    <section id="stories" className="py-24 bg-[#1D1C19] text-[#F5F1E8] relative overflow-hidden">
      {/* Subtle texture/radial gradient */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#C85C3D]/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Core Narrative Header */}
        <div className="max-w-3xl mb-16 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#A7C1C1]">
            <Heart className="w-3.5 h-3.5 text-[#C85C3D]" />
            <span>Emotional Connection</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-editorial font-normal leading-[1.1] text-white">
            REMEMBER THE FIRST TIME YOU WORE IT?
          </h2>

          {/* Concrete lyrical poetry as requested in PRD */}
          <div className="space-y-2 text-lg sm:text-xl text-white/80 font-serif-editorial italic">
            <p>The shirt from your first concert.</p>
            <p>The jacket you wore through your first winter.</p>
            <p>The dress from a special night.</p>
          </div>

          <div className="pt-2 text-base sm:text-lg text-[#F5F1E8]/70 leading-relaxed font-sans max-w-xl">
            Clothes aren&apos;t just fabric and stitches. They carry our youth, our milestones, and the places we traveled.
          </div>

          {/* Climax Callout */}
          <div className="pt-6 border-t border-white/15">
            <h3 className="text-xl sm:text-2xl font-serif-editorial text-white tracking-wide uppercase">
              WHEN YOU&apos;RE READY TO LET THEM GO, DON&apos;T LET THEIR STORY END.
            </h3>
            <p className="text-[#C85C3D] font-serif-editorial text-lg italic mt-1">
              Give it another chapter.
            </p>
          </div>
        </div>

        {/* Garment Memory Showcase: Interactive Story Tabs */}
        <div className="border border-white/15 bg-white/5 p-6 sm:p-10 backdrop-blur-sm">
          {/* Story Selector Bar */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
            {MEMORY_STORIES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveStoryIndex(idx)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeStoryIndex === idx
                    ? 'bg-[#C85C3D] text-white'
                    : 'text-white/60 hover:text-white bg-white/5'
                }`}
              >
                {item.garmentTitle}
              </button>
            ))}
          </div>

          {/* Active Story Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Story Image */}
            <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden border border-white/20 bg-black/30">
              <img
                src={story.image}
                alt={story.garmentTitle}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md text-xs font-mono text-white/90">
                {story.statusTag}
              </div>
            </div>

            {/* Story Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-xs text-white/50 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#A7C1C1]" />
                <span>{story.era}</span>
                <span>·</span>
                <span className="text-[#A7C1C1]">Living Garment Provenance</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-serif-editorial text-white/95 leading-snug">
                &ldquo;{story.firstWornQuote}&rdquo;
              </blockquote>

              <div className="space-y-4 text-sm text-white/70 leading-relaxed font-sans">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-white/40 block mb-1">
                    First Chapter
                  </span>
                  <p>{story.backstory}</p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#C85C3D] block mb-1">
                    Current & Future Chapter
                  </span>
                  <p className="text-white/90">{story.nextChapter}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span>Pass your garment forward to continue its narrative.</span>
                <a
                  href="#possibilities"
                  className="text-[#A7C1C1] hover:text-white transition-colors inline-flex items-center gap-1 font-semibold uppercase tracking-wider"
                >
                  <span>Explore Options</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
