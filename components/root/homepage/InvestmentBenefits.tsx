"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import images
import ArrowRight from "@/public/arrowRight.png";
import Cash from "@/public/cash.png";
import Impact_img from "@/public/impact_img.png";

// Define animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Define the structure for benefit items
interface BenefitItem {
  image: StaticImageData;
  title: string;
  description: string;
  size: string;
}

// Array of benefit items
const benefitItems: BenefitItem[] = [
  {
    image: ArrowRight,
    title: "Stability in Agriculture",
    description: "Secure and stable agricultural investments",
    size: "w-20 md:w-28",
  },
  {
    image: Cash,
    title: "High Returns",
    description: "Competitive returns on your investment",
    size: "w-24 md:w-32",
  },
  {
    image: Impact_img,
    title: "Global Impact",
    description: "Contributing to sustainable global agriculture",
    size: "w-20 md:w-28",
  },
];

export default function InvestmentBenefits() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Start animation when component comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="space-y-12 px-4 py-16 md:px-6 lg:px-8" ref={ref}>
      <motion.div
        className="text-center"
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-main-darkGreen tracking-tight"
          variants={fadeInUp}
        >
          Why Invest with Us
        </motion.h2>
        <motion.p className="mt-4 text-muted-foreground" variants={fadeInUp}>
          Discover the advantages of investing in agricultural innovation
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
      >
        {benefitItems.map((item, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Card className="border-none bg-primary/5 h-full">
              <CardContent className="flex flex-col items-center justify-between space-y-6 p-6 h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className={`${item.size} object-contain`}
                  placeholder="blur"
                  quality={65}
                />
                <div className="text-center">
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
