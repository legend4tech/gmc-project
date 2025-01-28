'use client'

import { Phone, Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ContactInfo() {
  // Initialize intersection observer
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // Contact information items
  const contactItems = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'contact@example.com', href: 'mailto:contact@example.com' },
    { icon: MapPin, text: '123 Green Street, Eco City, 12345', href: 'https://maps.google.com' },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-white shadow-lg rounded-xl p-6 overflow-hidden"
    >
      <h2 className="text-2xl font-semibold text-green-800 mb-6">Contact Information</h2>
      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="h-6 w-6 text-green-600 mr-3" />
            <span className="text-green-800">{item.text}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

