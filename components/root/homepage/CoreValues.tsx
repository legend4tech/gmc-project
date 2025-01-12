"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import farmerTractor from "@/public/farmer-tractor.png";
import { FaSackDollar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CoreValues() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <div
      className="py-16 bg-main-darkGreen w-full px-8 overflow-hidden"
      ref={ref}
    >
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Image Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="overflow-hidden rounded-xl">
            <Image src={farmerTractor} alt="Farmer on tractor" sizes="100vw" />
          </div>
          {/* Profit Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Card className="absolute -bottom-6 right-40">
              <CardContent className="p-6 flex items-center gap-6">
                <FaSackDollar size={40} className="text-yellow-500" />

                <div>
                  <div className="text-2xl font-bold text-primary">
                    60% Profit
                  </div>
                  <p className="text-sm text-muted-foreground">
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
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Our Core Values
          </h2>
          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="flex gap-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
              >
                <div className="mt-1 bg-main-lightGreen flex-1 p-2 w-10 h-10 rounded-full">
                  <Check className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold leading-none">{value.title}</h3>
                  <p className="text-sm ">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
