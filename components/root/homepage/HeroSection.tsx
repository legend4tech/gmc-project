// Hero component: Displays the main banner with navigation, headline, and call-to-action buttons

"use client";

import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-heroImage bg-no-repeat bg-cover">
      <div className="w-full h-screen grid grid-cols-2 items-center bg-blackOverlay px-12 gap-4 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-white">
            Transforming agriculture into a high-yield investment opportunity
            for everyone
          </h1>
          <Button className="p-7 mt-5">Learn More</Button>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.button
            className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex justify-center items-center border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* <button className="w-20 h-20 rounded-full bg-white flex justify-center items-center "> */}
            <PlayCircle className="h-11 w-11 text-white" />
          </motion.button>
        </motion.div>
      </div>
    </section>

    // <section className="relative h-screen bg-heroImage bg-cover bg-center bg-no-repeat overflow-hidden">
    //   <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
    //   <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
    //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    //       <motion.div
    //         initial={{ opacity: 0, y: 50 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //       >
    //         <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-white mb-6">
    //           Transforming agriculture into a{" "}
    //           <span className="text-green-400">high-yield investment</span>{" "}
    //           opportunity for everyone
    //         </h1>
    //         <p className="text-xl text-gray-300 mb-8">
    //           Join us in revolutionizing the agricultural sector through
    //           innovative investment solutions.
    //         </p>
    //         <div className="flex flex-wrap gap-4">
    //           <Button className="px-8 py-3 text-lg bg-green-500 hover:bg-green-600 text-white">
    //             Learn More
    //           </Button>
    //           <Button
    //             variant="outline"
    //             className="px-8 py-3 text-lg text-white border-white hover:bg-white hover:text-black"
    //           >
    //             Get Started
    //           </Button>
    //         </div>
    //       </motion.div>

    //       <motion.div
    //         className="flex justify-center items-center"
    //         initial={{ opacity: 0, scale: 0.5 }}
    //         animate={{ opacity: 1, scale: 1 }}
    //         transition={{ duration: 0.8, delay: 0.2 }}
    //       >
    //         <motion.button
    //           className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex justify-center items-center border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
    //           whileHover={{ scale: 1.1 }}
    //           whileTap={{ scale: 0.9 }}
    //         >
    //           <PlayCircle className="h-12 w-12 text-white" />
    //         </motion.button>
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>
  );
}
