export type PossibilityType = 'resell' | 'exchange' | 'upcycle' | 'donate';

export interface PossibilityCard {
  id: PossibilityType;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  ctaText: string;
  image: string;
  accentColor: string;
  details: {
    idealFor: string[];
    howItWorks: { step: string; title: string; desc: string }[];
    emotionalQuote: string;
    actionPrompt: string;
  };
}

export interface MemoryStory {
  id: string;
  garmentTitle: string;
  era: string;
  firstWornQuote: string;
  backstory: string;
  nextChapter: string;
  image: string;
  statusTag: string;
}

export interface GarmentJourneyStage {
  title: string;
  owner: string;
  state: string;
  year: string;
  path: string;
}

export interface GarmentJourney {
  id: string;
  garmentName: string;
  material: string;
  originalYear: string;
  stages: GarmentJourneyStage[];
  takeaway: string;
}

export interface VideoReel {
  id: string;
  title: string;
  category: 'Craft' | 'Community' | 'Editorial' | 'Styling';
  duration: string;
  description: string;
  videoUrl: string;
  posterImage: string;
  tag: string;
  creator: string;
}

export interface UpcycleProject {
  id: string;
  title: string;
  originalGarment: string;
  newCreation: string;
  beforeImage: string;
  afterImage: string;
  timeEstimate: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  materials: string[];
  steps: string[];
}
