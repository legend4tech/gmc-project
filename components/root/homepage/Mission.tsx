"use client";

import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, PauseCircle, VolumeX, Volume2 } from "lucide-react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HouseSketch from "@/public/house-sketch.png";

export default function Mission() {
  // State for video play/pause
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Animation controls
  const controls = useAnimation();

  // Intersection observer hook
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Start animations when component comes into view
  if (inView) {
    controls.start("visible");
  }

  // Key statistics data
  const stats = [
    { value: "38K", label: "Trusted Customers" },
    { value: "28M", label: "Total Investment" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Toggle video play/pause
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="bg-[#1B2E1B] py-16 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid gap-12 md:grid-cols-2"
        >
          {/* Mission statement and statistics */}
          <div className="relative space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-300">
                We prioritize sustainable farming practices that minimize
                environmental impact while generating stable returns for our
                investors. Our commitment to innovation and efficiency drives
                our success in transforming agriculture into a profitable
                investment opportunity.
              </p>
            </motion.div>
            {/* Statistics cards */}
            <motion.div
              variants={itemVariants}
              className="grid gap-4 sm:grid-cols-2"
            >
              {stats.map((stat) => (
                <Card key={stat.label} className="bg-[#2A3F2A] border-none">
                  <CardContent className="p-4">
                    <div className="text-3xl font-bold text-yellow-500">
                      {stat.value}
                    </div>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 w-[30rem]"
              initial={{ scale: 1.3, y: 61 }}
              animate={{ scale: 1, y: 61 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={HouseSketch}
                alt="Global Impact"
                sizes="100vw"
                className="w-full"
              />
            </motion.div>
          </div>

          {/* Video preview section */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg"
          >
            <video
              ref={videoRef}
              src="./002 Section Overview.mp4"
              loop
              muted
              className="w-full h-full object-cover"
            />
            {/* Play/Pause button overlay */}
            <div className="absolute left-1/2 bottom-28 transform -translate-x-1/2 flex space-x-4">
              <motion.button
                className="rounded-full bg-white/10 border-2 border-white/20 hover:bg-white/20 p-4 text-white"
                aria-label={isPlaying ? "Pause video" : "Play video"}
                onClick={toggleVideo}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? (
                  <PauseCircle className="h-6 w-6" />
                ) : (
                  <PlayCircle className="h-6 w-6" />
                )}
              </motion.button>
              <motion.button
                className="rounded-full bg-white/10 border-2 border-white/20 hover:bg-white/20 p-4 text-white"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                onClick={toggleMute}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMuted ? (
                  <VolumeX className="h-6 w-6" />
                ) : (
                  <Volume2 className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
