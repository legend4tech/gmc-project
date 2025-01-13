"use client";

import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Footer component with newsletter and links
export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <footer className="bg-main-darkGreen text-white py-16" ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Company info */}
          <motion.div className="lg:col-span-4" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">GMC</h3>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse
              platea dictumst. Duis porta,quam ut febus.
            </p>
            <motion.div className="flex space-x-6" variants={containerVariants}>
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="hover:text-green-200 transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Useful links */}
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6">Useful Links</h4>
            <motion.ul className="space-y-4" variants={containerVariants}>
              {[
                "New Projects",
                "Our Services",
                "Testimonials",
                "About Us",
                "Contact us",
              ].map((link) => (
                <motion.li key={link} variants={itemVariants}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div className="lg:col-span-5" variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Input
                type="email"
                placeholder="Enter your email..."
                className="bg-white"
              />
              <motion.button
                className="bg-white text-[#2B432B] hover:bg-green-100 p-1 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GO
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <motion.div
          className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-300">
            Copyright © {new Date().getFullYear()} GMC. All Rights Reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <motion.a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Terms & Conditions
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
