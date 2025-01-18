"use client";

import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Wrapper components for animations
const AnimatedCard = motion(Card);
const AnimatedBadge = motion(Badge);

// Investment plan data
const plans = [
  {
    name: "Basic",
    price: "200",
    features: [
      "40% ROI Returns",
      "Hands-Off Management",
      "Dedicated 24/7 Support",
      "Chat Support",
    ],
  },
  {
    name: "Premium",
    price: "1500",
    features: [
      "60% ROI Returns",
      "Hands-Off Management",
      "Dedicated 24/7 Support",
      "Chat Support",
    ],
  },
  {
    name: "Advanced",
    price: "5000",
    features: [
      "40% ROI Returns",
      "Hands-Off Management",
      "Dedicated 24/7 Support",
      "Chat Support",
    ],
  },
];

export function InvestmentPlans() {
  // Setup intersection observer for scroll-based animations
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="py-12 bg-[#1B3329]/5">
      <div className=" mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          CHOOSE AN INVESTMENT MODEL
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {plans.map((plan) => (
            <AnimatedCard
              key={plan.price}
              className={cn(
                "relative hover:shadow-xl transition-shadow duration-300",
                plan.name === "Premium" && "border border-main-darkGreen"
              )}
              variants={fadeInUp}
            >
              <CardHeader>
                <div className="flex justify-between items-center mb-4 ">
                  <AnimatedBadge
                    className={cn(
                      plan.name === "Premium" && "bg-yellow-500 text-black",
                      plan.name === "Advanced" && "bg-main-darkGreen text-white"
                    )}
                    variant={plan.name === "Premium" ? "default" : "outline"}
                    variants={scaleIn}
                  >
                    {plan.name}
                  </AnimatedBadge>
                  {/* {plan.popular && (
                    <AnimatedBadge className="bg-yellow-500" variants={scaleIn}>
                      Premium
                    </AnimatedBadge>
                  )} */}
                </div>
                <CardTitle className="text-4xl font-bold">
                  {plan.price} USD
                  <span className="text-base font-normal text-muted-foreground ml-2">
                    /Month
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <motion.li
                      key={feature}
                      className="flex items-center space-x-3"
                      variants={fadeInUp}
                    >
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-[#1B3329] hover:bg-[#2C4E3E] text-white"
                  size="lg"
                >
                  CHOOSE PLAN
                </Button>
              </CardFooter>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
