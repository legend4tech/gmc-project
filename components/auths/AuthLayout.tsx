import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
}

export default function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#263C28] to-[#4BAF47] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left side - Branding */}
          <div className="md:w-1/2 bg-[#263C28] p-8 flex flex-col justify-center items-center text-white">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Image
                src="/gmc-logo.svg"
                alt="GMC Logo"
                width={120}
                height={120}
                className="mb-6"
              />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Welcome to GMC
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-center"
            >
              Your gateway to advanced green management solutions
            </motion.p>
          </div>

          {/* Right side - Auth form */}
          <div className="md:w-1/2 p-8">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold mb-6 text-[#263C28]"
            >
              {title}
            </motion.h2>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
