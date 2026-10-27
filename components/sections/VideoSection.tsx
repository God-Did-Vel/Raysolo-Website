"use client";

import { motion } from "framer-motion";
import { Play, Pause, Sparkles, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => {
          console.error("Play error:", err);
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoError = () => {
    console.error("Video failed to load");
    setVideoError(true);
    setIsPlaying(false);
  };

  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Luxury Frame Container (15px radius) */}
        <div className="relative h-[65vh] min-h-[450px] w-full rounded-[15px] overflow-hidden border border-accent/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] group">
          
          {/* Video Background */}
          {!videoError ? (
            <video
              ref={videoRef}
              onError={handleVideoError}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              loop
              playsInline
              preload="metadata"
              muted
              className="absolute inset-0 w-full h-full object-cover rounded-[15px]"
              crossOrigin="anonymous"
            >
              <source
                src="https://res.cloudinary.com/duweg8kpv/video/upload/v1774556140/raysolo_uho93j.mp4"
                type="video/mp4"
              />
              Your browser does not support video.
            </video>
          ) : (
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center rounded-[15px]"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')` }}
            />
          )}

          {/* Dark & Gold Ambient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 rounded-[15px]" />

          {/* Top Info Bar */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-[15px] bg-black/60 backdrop-blur-md border border-white/15 text-accent text-xs">
              <Sparkles size={13} />
              <span className="uppercase tracking-[0.2em] font-semibold text-[10px]">Cinematic Virtual Sojourn</span>
            </div>

            <button
              onClick={toggleMute}
              className="p-2.5 rounded-[15px] bg-black/60 backdrop-blur-md border border-white/15 text-white hover:text-accent hover:border-accent transition-colors"
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>

          {/* Center Play Button & Titles */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
            {/* Pulsing Luxury Play Trigger */}
            <motion.button
              onClick={togglePlay}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              className="mb-6 w-20 h-20 rounded-[15px] border-2 border-accent bg-black/70 backdrop-blur-md flex items-center justify-center cursor-pointer shadow-[0_0_30px_rgba(212,175,55,0.35)] group/btn transition-all duration-300"
              aria-label={isPlaying ? "Pause Tour" : "Play Virtual Tour"}
            >
              {isPlaying ? (
                <Pause className="text-accent w-7 h-7" />
              ) : (
                <Play className="text-accent ml-1 w-7 h-7" />
              )}
            </motion.button>

            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide mb-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              The Essence of Sunluxe
            </motion.h2>

            <motion.p
              className="text-gray-300 max-w-xl text-sm md:text-base font-light tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              An immersive preview into our grand architecture, private residences, and master craftsmanship.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
