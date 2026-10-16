import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { PossibilitiesSection } from './components/PossibilitiesSection';
import { StorytellingSection } from './components/StorytellingSection';
import { GarmentJourneySection } from './components/GarmentJourneySection';
import { LookbookReelsSection } from './components/LookbookReelsSection';
import { GarmentReimaginerSection } from './components/GarmentReimaginerSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ImpactSection } from './components/ImpactSection';
import { FinalCTASection } from './components/FinalCTASection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { DecisionGuideModal } from './components/DecisionGuideModal';

export default function App() {
  const [isDecisionGuideOpen, setIsDecisionGuideOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#1D1C19] selection:bg-[#C85C3D]/20 selection:text-[#1D1C19]">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar onOpenDecisionGuide={() => setIsDecisionGuideOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <HeroSection onOpenDecisionGuide={() => setIsDecisionGuideOpen(true)} />

        {/* Section 2: The Problem */}
        <ProblemSection />

        {/* Section 3: Four Possibilities */}
        <PossibilitiesSection onOpenDecisionGuide={() => setIsDecisionGuideOpen(true)} />

        {/* Section 4: Emotional Storytelling */}
        <StorytellingSection />

        {/* Section 5: One Garment, Many Lives */}
        <GarmentJourneySection />

        {/* Dynamic Media: Circular Motion Reels & Lookbooks */}
        <LookbookReelsSection />

        {/* Interactive Atelier: Before/After Comparison & Studio */}
        <GarmentReimaginerSection />

        {/* Section 6: Philosophy */}
        <PhilosophySection />

        {/* Section 7: Impact */}
        <ImpactSection />

        {/* Section 8: Final Call to Action */}
        <FinalCTASection onOpenDecisionGuide={() => setIsDecisionGuideOpen(true)} />

        {/* Section 9 / 15: About */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer onOpenDecisionGuide={() => setIsDecisionGuideOpen(true)} />

      {/* Interactive Garment Pathfinder Decision Modal */}
      <DecisionGuideModal
        isOpen={isDecisionGuideOpen}
        onClose={() => setIsDecisionGuideOpen(false)}
        onSelectPossibility={() => {}}
      />
    </div>
  );
}
