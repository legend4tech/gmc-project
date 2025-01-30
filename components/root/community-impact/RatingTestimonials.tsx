"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Define the structure for a testimonial
export interface Testimonial {
  id: number;
  author: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Matthew J. Wyman",
    role: "SENIOR CONSULTANT",
    quote:
      "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don't look even..",
    rating: 4.5,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    author: "Sarah Johnson",
    role: "INVESTMENT ADVISOR",
    quote:
      "The platform's community impact initiatives have shown remarkable results. The agricultural projects particularly stand out for their sustainability focus.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    author: "David Chen",
    role: "PORTFOLIO MANAGER",
    quote:
      "What sets this apart is the attention to detail in project implementation and the measurable impact on local farming communities.",
    rating: 4.8,
    image: "/placeholder.svg",
  },
];

// Animation variants for the testimonial content
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

export function RatingTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to safely get the current testimonial
  const getCurrentTestimonial = () =>
    testimonials[currentIndex % testimonials.length];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [isAnimating]);

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => {
      const filled = index < Math.floor(rating);
      const halfFilled = !filled && index < Math.ceil(rating);

      return (
        <Star
          key={index}
          className={`w-6 h-6 ${
            filled
              ? "fill-yellow-400 text-yellow-400"
              : halfFilled
              ? "fill-yellow-400/50 text-yellow-400"
              : "text-gray-300"
          }`}
        />
      );
    });
  };

  // Function to handle dot navigation
  const handleDotClick = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="text-center space-y-4 mb-12">
        <p className="text-green-600 font-medium">The Reviews</p>
        <h2 className="text-4xl font-bold">What Investors say?</h2>
      </div>

      <Card className="bg-white shadow-lg">
        <CardContent className="p-8">
          <AnimatePresence
            mode="wait"
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={currentIndex}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
              className="space-y-6 text-center"
            >
              {/* Rating Stars */}
              <div className="flex justify-center gap-1">
                {renderStars(getCurrentTestimonial().rating)}
              </div>

              {/* Quote */}
              <blockquote className="text-xl">
                &quot;{getCurrentTestimonial().quote}&quot;
              </blockquote>

              {/* Author Info */}
              <div className="pt-6">
                <Avatar className="w-16 h-16 mx-auto mb-4">
                  <AvatarImage src={getCurrentTestimonial().image} />
                  <AvatarFallback>
                    {getCurrentTestimonial().author[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-semibold">
                    {getCurrentTestimonial().author}
                  </h4>
                  <p className="text-green-600 text-sm">
                    {getCurrentTestimonial().role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 pt-4">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-3 h-3 rounded-full p-0 ${
                  currentIndex % testimonials.length === index
                    ? "bg-green-600"
                    : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
                disabled={isAnimating}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
