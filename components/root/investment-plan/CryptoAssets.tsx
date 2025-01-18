"use client";

import { Bitcoin, EclipseIcon as Ethereum } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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

// Wrapper component for animated cards
const AnimatedCard = motion(Card);

export function CryptoAssets() {
  // Setup intersection observer with threshold
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Asset data for supported cryptocurrencies
  const assets = [
    { icon: Bitcoin, name: "BTC", pair: "USDT", network: "Bitcoin" },
    { icon: Ethereum, name: "ETH", pair: "USDT", network: "Ethereum" },
    { name: "BNB", pair: "USDT", network: "Binance" },
    { name: "ZTC", pair: "USDT", network: "Bitcoin" },
  ];

  return (
    <div className="py-8">
      <motion.h3
        className="text-lg font-semibold mb-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        All Supported Crypto Assets
      </motion.h3>

      <motion.div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        variants={staggerChildren}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {assets.map((asset) => (
          <AnimatedCard
            key={asset.name}
            className="hover:shadow-lg transition-shadow"
            variants={fadeInUp}
          >
            <CardContent className="flex items-center p-4 space-x-3">
              {asset.icon && <asset.icon className="w-8 h-8 text-yellow-500" />}
              <div>
                <div className="font-semibold">
                  {asset.name}/{asset.pair}
                </div>
                <div className="text-sm text-muted-foreground">
                  {asset.network}
                </div>
              </div>
            </CardContent>
          </AnimatedCard>
        ))}
      </motion.div>
    </div>
  );
}
