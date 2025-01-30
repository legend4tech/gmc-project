"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Farm from "@/public/farm_img.png"; // Import your image

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen">
      {/* Background image with blur placeholder */}
      <Image
        src={Farm}
        alt="Agricultural landscape"
        layout="fill"
        objectFit="cover"
        quality={100}
        placeholder="blur"
        priority
      />

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-darkGreen/80 to-lightGreen/60" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-white mb-6 mt-8">
              Transforming agriculture into a{" "}
              <span className="text-main-lightGreen">
                high-yield investment
              </span>{" "}
              opportunity for everyone
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Join us in revolutionizing the agricultural sector through
              innovative investment solutions.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                className="p-8 text-lg bg-main-lightGreen hover:bg-main-hover text-white"
                onClick={() => router.push("/signup")}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
