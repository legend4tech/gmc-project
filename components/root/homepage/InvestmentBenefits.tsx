"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ArrowRight from "@/public/arrowRight.png";
import Cash from "@/public/cash.png";
import Impact_img from "@/public/impact_img.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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

export default function InvestmentBenefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="space-y-12" ref={ref}>
      <motion.div
        className="text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <motion.h2
          className="text-4xl font-bold text-main-darkGreen tracking-tight"
          variants={fadeInUp}
        >
          Why Invest with Us
        </motion.h2>
        <motion.p className="mt-4 text-muted-foreground" variants={fadeInUp}>
          Discover the advantages of investing in agricultural innovation
        </motion.p>
      </motion.div>

      <motion.div
        className="flex justify-around"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        {[
          {
            image: ArrowRight,
            title: "Stability in Agriculture",
            description: "Secure and stable agricultural investments",
          },
          {
            image: Cash,
            title: "High Returns",
            description: "Competitive returns on your investment",
          },
          {
            image: Impact_img,
            title: "Global Impact",
            description: "Contributing to sustainable global agriculture",
          },
        ].map((item, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Card className="border-none bg-primary/5">
              <CardContent className="flex items-center flex-col space-y-9 p-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  sizes="100vw"
                  className="w-[7rem]"
                />
                <div className="flex flex-col items-center">
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
