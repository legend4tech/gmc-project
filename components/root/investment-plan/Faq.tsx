"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

// FAQ data
const faqs = [
  {
    question: "What is the minimum investment amount?",
    answer:
      "The minimum investment amount starts at $200 USD with our Basic plan.",
  },
  {
    question: "How are returns calculated?",
    answer:
      "Returns are calculated based on your chosen plan, ranging from 40% to 60% ROI, and are paid out monthly.",
  },
  {
    question: "Is my investment secure?",
    answer:
      "We implement industry-standard security measures and provide hands-off management to ensure your investment is secure.",
  },
  {
    question: "Can I withdraw my investment anytime?",
    answer:
      "Withdrawal terms vary by plan. Please contact our support team for specific details about your investment.",
  },
];

// Animated accordion item wrapper
const AnimatedAccordionItem = motion(AccordionItem);

export function FAQ() {
  // Setup intersection observer for scroll-based animations
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto"
          variants={staggerChildren}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Accordion type="single" collapsible className="w-full ">
            {faqs.map((faq, index) => (
              <AnimatedAccordionItem
                key={index}
                value={`item-${index}`}
                variants={fadeInUp}
              >
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  {faq.answer}
                </AccordionContent>
              </AnimatedAccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
