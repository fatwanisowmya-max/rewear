import { PossibilityCard, MemoryStory, GarmentJourney, VideoReel, UpcycleProject } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_fashion_editorial_1792174916639.jpg';

export const POSSIBILITIES_DATA: PossibilityCard[] = [
  {
    id: 'resell',
    number: '01',
    title: 'RESELL',
    tagline: 'Someone else might love what you no longer wear.',
    summary: 'Give unwanted clothes value by passing them to a new owner who will cherish them.',
    ctaText: 'Explore Resell',
    image: '/src/assets/images/possibility_resell_1792174917825.jpg',
    accentColor: '#C85C3D', // Terracotta
    details: {
      idealFor: [
        'Pieces in good or like-new condition',
        'Branded or vintage items with distinctive design',
        'Impulse buys with tags still intact',
        'Styles you have naturally outgrown'
      ],
      howItWorks: [
        {
          step: '1',
          title: 'Document & Honest Fit',
          desc: 'Photograph in natural morning light, noting exact measurements and fabric composition.'
        },
        {
          step: '2',
          title: 'Find the Right Audience',
          desc: 'List on peer-to-peer vintage platforms or local consignment boutiques that value your aesthetic.'
        },
        {
          step: '3',
          title: 'Pass the Value',
          desc: 'Recoup wardrobe budget while ensuring the garment gets another dedicated chapter.'
        }
      ],
      emotionalQuote: 'A piece you wore three times might be the jacket someone else wears for the next ten years.',
      actionPrompt: 'Before you tuck it into the dark corner of your wardrobe, check its resale potential.'
    }
  },
  {
    id: 'exchange',
    number: '02',
    title: 'EXCHANGE',
    tagline: "One person's unwanted piece can become another person's new favourite.",
    summary: 'Encourage sharing and fluid circulation between friends and community members.',
    ctaText: 'Discover Exchange',
    image: '/src/assets/images/possibility_exchange_1792174918069.jpg',
    accentColor: '#737B4B', // Muted Olive
    details: {
      idealFor: [
        'Statement pieces that made their statement',
        'Garments you love on others but rarely wear yourself',
        'Swapping with friends of similar silhouettes',
        'Curated community swap meets and wardrobe circles'
      ],
      howItWorks: [
        {
          step: '1',
          title: 'Gather & Curate',
          desc: 'Select 3 to 5 clean, distinct garments that are ready to bring excitement to someone new.'
        },
        {
          step: '2',
          title: 'Swap Without Currency',
          desc: 'Join a local clothes swap or host a seasonal living room exchange with friends.'
        },
        {
          step: '3',
          title: 'Refresh Consciously',
          desc: 'Walk home with novel wardrobe additions without producing new textile demand.'
        }
      ],
      emotionalQuote: 'Swapping is social fashion. Every garment passed across hands brings a shared human connection.',
      actionPrompt: 'Organize a swap afternoon before your next impulse shopping trip.'
    }
  },
  {
    id: 'upcycle',
    number: '03',
    title: 'UPCYCLE',
    tagline: 'Turn something old into something new.',
    summary: 'Old doesn’t mean finished. Transform an existing garment into something completely different.',
    ctaText: 'Reimagine Craft',
    image: '/src/assets/images/possibility_upcycle_1792174918913.jpg',
    accentColor: '#C85C3D', // Terracotta
    details: {
      idealFor: [
        'Garments with localized stains, worn hems, or moth holes',
        'Outdated cuts in beautiful heavy fabrics (raw denim, pure wool)',
        'Oversized shirts that can be cropped or gathered',
        'Clothing with deep sentimental connection that no longer fits'
      ],
      howItWorks: [
        {
          step: '1',
          title: 'Identify the Flaw as Feature',
          desc: 'Highlight frayed knees with contrasting Sashiko stitching or patchwork vintage panels.'
        },
        {
          step: '2',
          title: 'Restructure the Silhouette',
          desc: 'Crop a long trench into a boxy chore jacket, or turn torn denim trousers into an artisan tote.'
        },
        {
          step: '3',
          title: 'Wear a Unique Original',
          desc: 'Own a one-of-a-kind garment that no retail store in the world could ever replicate.'
        }
      ],
      emotionalQuote: 'Flaws and tear marks are not defects; they are the architectural guidelines for the redesign.',
      actionPrompt: 'A simple needle and thread can give damaged fabric an entirely new life.'
    }
  },
  {
    id: 'donate',
    number: '04',
    title: 'DONATE',
    tagline: 'Give what you don’t need to someone who does.',
    summary: 'Help usable clothing reach people and organizations where it creates tangible benefit.',
    ctaText: 'Give Thoughtfully',
    image: '/src/assets/images/possibility_donate_1792174918537.jpg',
    accentColor: '#A7C1C1', // Soft Blue
    details: {
      idealFor: [
        'Clean, functional essentials (coats, workwear, warm knits)',
        'Interview-appropriate attire for non-profit workforce programs',
        'High-utility garments in solid structural health',
        'Direct mutual-aid shelters and community textile drives'
      ],
      howItWorks: [
        {
          step: '1',
          title: 'Clean & Repair Small Tears',
          desc: 'Donate clothes in ready-to-wear dignity—freshly washed with intact buttons and zips.'
        },
        {
          step: '2',
          title: 'Target Specific Needs',
          desc: 'Contact local shelters, women’s transition centers, or community closets to understand what they need.'
        },
        {
          step: '3',
          title: 'Direct Community Impact',
          desc: 'Ensure the garment provides warmth, confidence, or everyday comfort directly to its recipient.'
        }
      ],
      emotionalQuote: 'Donation is not disposal; it is an act of care and shared human dignity.',
      actionPrompt: 'Donate with intention: ask what local shelters are actively seeking this season.'
    }
  }
];

export const MEMORY_STORIES: MemoryStory[] = [
  {
    id: 'story-1',
    garmentTitle: 'The 1994 Type-III Denim Trucker',
    era: '1994 — Present',
    firstWornQuote: 'Worn to a small venue concert in Manchester on a cold rainy October night.',
    backstory: 'Bought second-hand during college. Survived three festival summers, two road trips across Europe, and a torn collar. Instead of throwing it out, the cuff edges were re-stitched with indigo linen thread.',
    nextChapter: 'Passed on to a younger sister who wore it through art school, now mended with white boro stitching along the elbow crease.',
    image: '/src/assets/images/story_denim_jacket_1792174960663.jpg',
    statusTag: '32 Years in Circulation'
  },
  {
    id: 'story-2',
    garmentTitle: 'Double-Breasted Camel Wool Coat',
    era: '2008 — Present',
    firstWornQuote: 'First winter job interview in a city where I knew nobody.',
    backstory: 'Heavy 100% melton wool tailored in northern Italy. Worn through four career changes and three cities. The lining wore out in 2019, so it was relined with deadstock patterned silk.',
    nextChapter: 'Recently exchanged at a seasonal community gathering. The new wearer took the hem up 4 inches to wear over chunky boots.',
    image: '/src/assets/images/story_wool_trench_1792174961797.jpg',
    statusTag: '3 Owners · Still Active'
  },
  {
    id: 'story-3',
    garmentTitle: 'Indigo Sashiko Workshop Fabric',
    era: '2016 — Present',
    firstWornQuote: 'Originally a pair of selvedge jeans with blown-out knees from cycling.',
    backstory: 'Instead of discarding 14oz Japanese cotton, the thighs and back yoke were reconstructed by hand into an artisan workbench apron and everyday carryall.',
    nextChapter: 'Now utilized daily in a ceramics studio, collecting clay patina and telling a third story.',
    image: '/src/assets/images/lookbook_craft_mending_1792174962389.jpg',
    statusTag: 'Upcycled into Studio Wear'
  }
];

export const GARMENT_JOURNEYS: GarmentJourney[] = [
  {
    id: 'journey-denim',
    garmentName: 'Raw Selvedge Denim Trouser',
    material: '100% Organic Heavy Cotton',
    originalYear: '2015',
    stages: [
      {
        year: '2015',
        title: 'Initial Purchase',
        owner: 'Owner A (Tokyo)',
        state: 'Crisp rigid raw selvedge, broken in over 4 years of daily cycling commutes.',
        path: 'Worn Daily'
      },
      {
        year: '2019',
        title: 'Curated Resale',
        owner: 'Owner B (London)',
        state: 'Natural vintage honeycombs & whiskers. Sold via community pre-loved market.',
        path: 'RESELL'
      },
      {
        year: '2023',
        title: 'Crotch blowout & fraying',
        owner: 'Community Workshop',
        state: 'Torn at stress points; unwearable as trousers but rich in character.',
        path: 'MENDING POINT'
      },
      {
        year: '2024',
        title: 'Boro Sashiko Tote Bag',
        owner: 'Owner C (Berlin)',
        state: 'Reconstructed with antique canvas lining into a structured weekend tote.',
        path: 'UPCYCLE'
      },
      {
        year: '2026+',
        title: 'Active Daily Use',
        owner: 'Still Carrying Groceries & Books',
        state: 'Textile density intact, continuing its 11-year life cycle.',
        path: 'NEW LIFE'
      }
    ],
    takeaway: 'From rigid workwear to vintage denim, to bespoke artisan carryall: zero grams sent to landfill.'
  },
  {
    id: 'journey-trench',
    garmentName: 'Vintage Gabardine Raincoat',
    material: 'Waterproof Cotton Gabardine',
    originalYear: '2004',
    stages: [
      {
        year: '2004',
        title: 'Commuter Wardrobe',
        owner: 'First Owner',
        state: 'Classic knee-length rain barrier for office transit across rainy winters.',
        path: '10 Years of Care'
      },
      {
        year: '2014',
        title: 'Community Swap Circle',
        owner: 'Second Owner',
        state: 'Swapped at a rooftop neighborhood exchange for a heavy wool sweater.',
        path: 'EXCHANGE'
      },
      {
        year: '2021',
        title: 'Cropped Chore Jacket',
        owner: 'Artisan Tailor',
        state: 'Damaged hem cut away; converted into a contemporary boxy crop jacket.',
        path: 'UPCYCLE'
      },
      {
        year: '2026',
        title: 'Local Youth Shelter Closet',
        owner: 'Third Recipient',
        state: 'Passed forward during an autumn coat drive to someone starting work.',
        path: 'DONATE'
      }
    ],
    takeaway: '22 years across three owners, two distinct silhouettes, and four circular paths.'
  }
];

export const VIDEO_REELS: VideoReel[] = [
  {
    id: 'reel-sashiko',
    title: 'The Tactile Art of Sashiko Visible Mending',
    category: 'Craft',
    duration: '0:42',
    description: 'Watch how white thread on indigo denim transforms a frayed knee into a structural work of art.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-tailor-working-with-fabric-41586-large.mp4',
    posterImage: '/src/assets/images/lookbook_craft_mending_1792174962389.jpg',
    tag: 'Visible Mending',
    creator: 'Rewear Atelier'
  },
  {
    id: 'reel-swap',
    title: 'Inside an East London Wardrobe Exchange',
    category: 'Community',
    duration: '0:35',
    description: 'Fifty young designers and fashion students bring three garments each. No currency, pure circular styling.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-looking-at-clothes-in-a-store-42416-large.mp4',
    posterImage: '/src/assets/images/possibility_exchange_1792174918069.jpg',
    tag: 'Community Swap',
    creator: 'Circular Sessions'
  },
  {
    id: 'reel-editorial',
    title: 'Rewear Movement Lookbook: Autumn Layers',
    category: 'Editorial',
    duration: '0:50',
    description: 'Editorial movement study featuring 100% pre-loved garments curated across three generations.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-models-posing-for-a-fashion-photoshoot-42413-large.mp4',
    posterImage: '/src/assets/images/hero_fashion_editorial_1792174916639.jpg',
    tag: 'Pre-Loved Editorial',
    creator: 'Rewear Studio'
  },
  {
    id: 'reel-resell',
    title: 'Archive Flatlays & Wardrobe Photography',
    category: 'Styling',
    duration: '0:28',
    description: 'How to capture garment details, weave texture, and honest patina so second-hand pieces shine.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-clothes-hanging-on-a-rack-in-a-vintage-store-42415-large.mp4',
    posterImage: '/src/assets/images/possibility_resell_1792174917825.jpg',
    tag: 'Resell Curation',
    creator: 'Studio Rewear'
  }
];

export const UPCYCLE_PROJECTS: UpcycleProject[] = [
  {
    id: 'proj-1',
    title: 'Worn Selvedge → Sashiko Crossbody Tote',
    originalGarment: 'Torn Selvedge Denim Jeans (blown knees)',
    newCreation: 'Reinforced Daily Carryall with Cotton Webbing',
    beforeImage: '/src/assets/images/story_denim_jacket_1792174960663.jpg',
    afterImage: '/src/assets/images/lookbook_craft_mending_1792174962389.jpg',
    timeEstimate: '2.5 Hours',
    skillLevel: 'Beginner',
    materials: ['Distressed jeans', 'Heavy cotton sashiko thread', 'Tailor chalk', '2 yards cotton strap'],
    steps: [
      'Cut jeans across the upper thigh line to extract the back pockets and heavy yoke.',
      'Turn legs inside out to seam together the bottom base for depth.',
      'Anchor high-stress corners with running Sashiko crosses.',
      'Attach cotton webbing handles using cross-stitch box reinforcement.'
    ]
  },
  {
    id: 'proj-2',
    title: 'Moth-damaged Wool Coat → Cropped Utility Jacket',
    originalGarment: 'Vintage Ankle-Length Wool Overcoat',
    newCreation: 'Modern Boxy Field Jacket with Raw Clean Hem',
    beforeImage: '/src/assets/images/story_wool_trench_1792174961797.jpg',
    afterImage: '/src/assets/images/hero_fashion_editorial_1792174916639.jpg',
    timeEstimate: '3 Hours',
    skillLevel: 'Intermediate',
    materials: ['Full length coat', 'Fabric shears', 'Bias binding tape', 'Iron-on interfacing'],
    steps: [
      'Try on and mark the crop line 2 inches below the natural waistline.',
      'Cut cleanly with sharp fabric shears and preserve offcuts for interior pockets.',
      'Apply bias tape around the raw hem or hand-whip stitch for a bespoke finish.',
      'Reposition bottom buttons up into the shortened stance.'
    ]
  }
];
