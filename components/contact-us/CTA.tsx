"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTA() {
  // Initialize intersection observer
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-main-darkGreen to-green-700  text-white rounded-xl p-8 shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-4">
        We&#39;d love to hear from you!
      </h2>
      <p className="text-xl">
        Reach out with any questions or feedback. We&#39;re here to help!
      </p>
    </motion.div>
  );
}
