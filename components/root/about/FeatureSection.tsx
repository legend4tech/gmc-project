"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Harvesting from "@/public/harvesting.png";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Feature section with image and content
export function FeatureSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="mx-auto py-12 md:py-24 px-5 max-w-7xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <motion.div
          variants={itemVariants}
          className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden"
        >
          <Image
            src={Harvesting}
            alt="Agricultural worker with tractor"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        {/* Right side - Content */}
        <div className="space-y-6">
          <motion.span
            variants={itemVariants}
            className="text-[#4CAF50] font-medium text-lg"
          >
            Get to know us
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#2B432B]"
          >
            The Best Agriculture Investment Project
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[#4CAF50] font-medium"
          >
            There are many variations of passa of lorem available, but the
            majority have suffered alteration.
          </motion.p>
          <div className="space-y-6 text-gray-600">
            {[...Array(3)].map((_, i) => (
              <motion.p key={i} variants={itemVariants}>
                There are many variations of passages of lorem ipsum available
                but the majority have suffered alteration in some form by
                injected humor or random word which don't look even.
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
