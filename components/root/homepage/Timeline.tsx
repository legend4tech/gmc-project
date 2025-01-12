"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Planting from "@/public/planting.png";
import Watering from "@/public/watering.png";
import Fowls from "@/public/fowls.png";
import Farmland from "@/public/farmland.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Timeline data
  const timelineItems = [
    {
      year: "2024",
      title: "Q4 Investment stage",
      image: Planting,
    },
    {
      year: "2025",
      title: "Farm Remodellation",
      image: Watering,
    },
    {
      year: "2025",
      title: "Grainfarmers Formed",
      image: Fowls,
    },
    {
      year: "2026",
      title: "Start of Agriculture",
      image: Farmland,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <div className="space-y-12 px-7" ref={ref}>
      <motion.div
        className="text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold tracking-tight"
          variants={itemVariants}
        >
          Project Timeline
        </motion.h2>
        <motion.p
          className="mt-4 text-muted-foreground"
          variants={itemVariants}
        >
          Our roadmap to agricultural innovation
        </motion.p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <motion.div
          className="absolute left-0 right-0 top-6 h-0.5 bg-border"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Timeline Items */}
        <motion.div
          className="relative grid gap-8 md:grid-cols-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {timelineItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-none bg-transparent">
                <CardContent className="flex flex-col items-center p-0">
                  <motion.div
                    className="mb-4 h-3 w-3 rounded-full bg-main-darkGreen"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  />
                  <div className="mb-4 text-2xl font-bold text-main-darkGreen">
                    {item.year}
                  </div>
                  <div className="mb-4 text-sm text-muted-foreground">
                    {item.title}
                  </div>
                  <motion.div
                    className="overflow-hidden rounded-lg mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                  >
                    <Image src={item.image} alt={item.title} sizes="100vw" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
