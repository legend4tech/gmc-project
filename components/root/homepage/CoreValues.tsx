"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import farmerTractor from "@/public/farmer-tractor.png";
import { FaSackDollar } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Core values data
const values = [
  {
    title: "Sustainability",
    description:
      "We prioritize sustainable farming practices that minimize environmental impact while maximizing yield.",
  },
  {
    title: "Innovation",
    description:
      "We integrate the latest technologies and farming techniques to increase efficiency in agriculture.",
  },
  {
    title: "Growth",
    description:
      "We are committed to generating financial returns for our investors while contributing to the greater mission for food and agricultural progress.",
  },
];

export default function CoreValues() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Start animations when the component comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      className="py-16 bg-main-darkGreen w-full px-4 sm:px-6 lg:px-8 overflow-hidden"
      ref={ref}
    >
      <div className="grid gap-12 lg:grid-cols-2 max-w-7xl mx-auto">
        {/* Image Section */}
        <motion.div
          className="relative"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <div className="overflow-hidden rounded-xl">
            <Image
              src={farmerTractor}
              alt="Farmer on tractor"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-[30rem]"
              placeholder="blur"
              quality={65}
            />
          </div>
          {/* Profit Card */}
          <motion.div
            className="absolute -bottom-6  lg:-left-3 "
            // variants={{
            //   hidden: { opacity: 0, scale: 0.8 },
            //   visible: {
            //     opacity: 1,
            //     scale: 1,
            //     transition: { delay: 0.5, duration: 0.5 },
            //   },
            // }}
          >
            <Card>
              <CardContent className="py-2 px-3 sm:px-4 flex items-center gap-2 sm:gap-4">
                <FaSackDollar
                  size={32}
                  className="text-yellow-500 flex-shrink-0"
                />
                <div>
                  <div className="text-lg sm:text-xl font-bold text-primary">
                    60% Profit
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Up to 60% ROI Annually
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Our Core Values
          </h2>
          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="flex gap-4 text-white"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2 + 0.5, duration: 0.5 },
                  },
                }}
              >
                {/* Icon container */}
                <div className="mt-1 bg-main-lightGreen w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Check className="text-primary " />
                </div>
                {/* Value content */}
                <div className="space-y-1">
                  <h3 className="font-semibold leading-none">{value.title}</h3>
                  <p className="text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
