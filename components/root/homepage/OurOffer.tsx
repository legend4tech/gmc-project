"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Production from "@/public/production.png";
import farmBarn from "@/public/farm_barn.png";
import FarmLogo from "@/public/farm_logo.png";
import Organic from "@/public/organic.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OurOffer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-16" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Card className="border-none rounded-none bg-main-darkGreen p-4">
          <CardContent className="grid gap-12 items-center p-0 md:grid-cols-2">
            {/* Content */}
            <motion.div
              className="space-y-16 bg-white py-16 rounded-lg pl-4"
              variants={itemVariants}
            >
              <motion.h2
                className="text-5xl font-bold tracking-tight"
                variants={itemVariants}
              >
                Build the best agriculture Project
              </motion.h2>
              <motion.p className="text-base" variants={itemVariants}>
                Join us in transforming agriculture into a sustainable and
                profitable venture. Our innovative approach combines traditional
                farming wisdom with modern technology to create exceptional
                returns for our investors.
              </motion.p>
            </motion.div>
            {/* Image */}
            <motion.div
              className="overflow-hidden rounded-xl flex justify-center"
              variants={imageVariants}
            >
              <Image
                src={Production}
                alt="Stability in Agriculture"
                sizes="100vw"
                className="w-[30rem]"
              />
            </motion.div>
          </CardContent>
        </Card>

        {/* Logos */}
        <motion.div
          className="mt-12 flex justify-center items-center gap-10"
          variants={containerVariants}
        >
          {[Organic, farmBarn, FarmLogo].map((logo, index) => (
            <motion.div key={index} variants={imageVariants}>
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                sizes="100vw"
                className=" w-[4rem] sm:w-[6rem]"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
