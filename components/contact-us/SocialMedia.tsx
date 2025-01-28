"use client";

import { Facebook, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaXTwitter } from "react-icons/fa6";
export default function SocialMedia() {
  // Initialize intersection observer
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Social media links
  const socialLinks = [
    { icon: Facebook, href: "#", color: "bg-blue-600" },
    { icon: FaXTwitter, href: "#", color: "bg-black" },
    { icon: Linkedin, href: "#", color: "bg-blue-700" },
    { icon: Instagram, href: "#", color: "bg-pink-600" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-white shadow-lg rounded-xl p-6"
    >
      <h2 className="text-2xl font-semibold text-green-800 mb-6">
        Connect With Us
      </h2>
      <div className="flex justify-between">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            className={`${link.color} text-white p-3 rounded-full hover:opacity-80 transition-all duration-300`}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <link.icon className="h-6 w-6" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
