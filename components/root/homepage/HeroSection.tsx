"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { PlayCircle, PauseCircle, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Hero component: Displays the main banner with video background, headline, and call-to-action button
export default function Hero() {
  // State for controlling video playback and loading
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Reference to the video element for direct manipulation
  const videoRef = useRef<HTMLVideoElement>(null);

  // Effect to control video playback based on isPlaying state
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Function to toggle video play/pause
  const togglePlay = () => setIsPlaying(!isPlaying);

  // Function to toggle video mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Function to set video as loaded when metadata is loaded
  const handleVideoLoad = () => setIsVideoLoaded(true);

  return (
    <section className="relative min-h-screen pt-16">
      {/* Main container with padding for fixed navbar */}

      {/* Skeleton loader, shown until video is loaded */}
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Skeleton className="w-full h-full" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/002 Section Overview.mp4"
        loop
        muted={isMuted}
        playsInline
        onLoadedData={handleVideoLoad}
      />

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-white mb-6">
              Transforming agriculture into a{" "}
              <span className="text-green-400">high-yield investment</span>{" "}
              opportunity for everyone
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join us in revolutionizing the agricultural sector through
              innovative investment solutions.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button className="px-8 py-3 text-lg bg-green-500 hover:bg-green-600 text-white">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Play/Pause button */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.button
              onClick={togglePlay}
              className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex justify-center items-center border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? (
                <PauseCircle className="h-12 w-12 text-white" />
              ) : (
                <PlayCircle className="h-12 w-12 text-white" />
              )}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mute/Unmute button */}
      <motion.button
        onClick={toggleMute}
        className="absolute bottom-8 right-4 p-3 rounded-full bg-white/10 backdrop-blur-sm flex justify-center items-center border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6 text-white" />
        ) : (
          <Volume2 className="h-6 w-6 text-white" />
        )}
      </motion.button>
    </section>
  );
}
