import React, { useState, useRef } from 'react';
import { VIDEO_REELS } from '../data/mockData';
import { VideoReel } from '../types';
import { Play, Pause, Volume2, VolumeX, Maximize2, Film } from 'lucide-react';

export const LookbookReelsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedReel, setSelectedReel] = useState<VideoReel>(VIDEO_REELS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const categories = ['All', 'Craft', 'Community', 'Editorial', 'Styling'];

  const filteredReels = activeCategory === 'All'
    ? VIDEO_REELS
    : VIDEO_REELS.filter(r => r.category === activeCategory);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSelectReel = (reel: VideoReel) => {
    setSelectedReel(reel);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section id="reels" className="py-24 bg-[#1D1C19] text-[#F5F1E8] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#A7C1C1] mb-2">
              <Film className="w-3.5 h-3.5" />
              <span>Motion & Documentaries</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-editorial text-white">
              CIRCULAR MOTION REELS
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wider transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#C85C3D] text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Video Player & Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Cinema Player */}
          <div className="lg:col-span-8 bg-black border border-white/15 relative overflow-hidden group">
            <div className="relative aspect-video w-full bg-neutral-900">
              <video
                ref={videoRef}
                key={selectedReel.id}
                src={selectedReel.videoUrl}
                poster={selectedReel.posterImage}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Player Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-90 transition-opacity flex flex-col justify-between p-6">
                {/* Top Info Bar */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white font-mono uppercase tracking-wider">
                    {selectedReel.category} · {selectedReel.tag}
                  </span>
                  <span className="text-white/80 font-mono">{selectedReel.duration}</span>
                </div>

                {/* Bottom Control Bar */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif-editorial text-white">
                      {selectedReel.title}
                    </h3>
                    <p className="text-xs text-white/70 mt-1 max-w-xl">
                      {selectedReel.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/20">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="p-2 bg-white text-[#1D1C19] hover:bg-[#C85C3D] hover:text-white transition-colors"
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="p-2 bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>

                    <span className="text-xs text-white/50 font-mono">
                      Filmed by {selectedReel.creator}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Playlist Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-widest font-semibold text-white/60 mb-2">
              Curated Video Library ({filteredReels.length})
            </div>

            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1 no-scrollbar">
              {filteredReels.map((reel) => (
                <div
                  key={reel.id}
                  onClick={() => handleSelectReel(reel)}
                  className={`p-3 border cursor-pointer transition-all flex gap-3 ${
                    selectedReel.id === reel.id
                      ? 'border-[#C85C3D] bg-white/10'
                      : 'border-white/10 bg-white/5 hover:border-white/30'
                  }`}
                >
                  <div className="relative w-24 aspect-[4/3] shrink-0 bg-neutral-800 overflow-hidden">
                    <img
                      src={reel.posterImage}
                      alt={reel.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 text-[10px] font-mono text-white">
                      {reel.duration}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between py-0.5 min-w-0">
                    <div>
                      <div className="text-[10px] font-mono text-[#A7C1C1] uppercase tracking-wider">
                        {reel.category}
                      </div>
                      <h4 className="text-xs font-semibold text-white truncate mt-0.5">
                        {reel.title}
                      </h4>
                    </div>
                    <span className="text-[11px] text-white/50">{reel.creator}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
