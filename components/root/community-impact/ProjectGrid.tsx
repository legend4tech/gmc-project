"use client";

import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Wheat, Carrot, Milk } from "lucide-react";
import Chicks from "@/public/chicks.png";
import Uprooting from "@/public/uprooting.jpg";
import Planting from "@/public/planting.png";
import Soil from "@/public/soil.png";

export interface ProjectCard {
  title: string;
  image: StaticImageData;
  icon: string;
  slug: string;
}

// Project data with exact titles and images
const projects: ProjectCard[] = [
  {
    title: "Agriculture Equipments",
    image: Uprooting,
    icon: "wheat",
    slug: "agriculture-equipments",
  },
  {
    title: "Vegetable Farming",
    image: Planting,
    icon: "carrot",
    slug: "vegetable-farming",
  },
  {
    title: "Organic Farming",
    image: Soil,
    icon: "leaf",
    slug: "organic-farming",
  },
  {
    title: "Dairy Farming",
    image: Chicks,
    icon: "milk",
    slug: "dairy-farming",
  },
];

// Icon mapping for project cards
const IconMap = {
  wheat: Wheat,
  carrot: Carrot,
  leaf: Leaf,
  milk: Milk,
};

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ProjectGrid() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="py-12  p-5"
    >
      {/* Section Header */}
      <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">
        Community Based Projects
      </motion.h2>

      {/* Main content: Projects Grid and Featured Project side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {projects.map((project) => {
            const Icon = IconMap[project.icon as keyof typeof IconMap];

            return (
              <motion.div key={project.slug} variants={itemVariants}>
                <Card className="overflow-hidden border-none shadow-sm">
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative h-[13rem]  ">
                      <Image
                        src={project.image}
                        alt={project.title}
                        sizes="100vw"
                        className=" w-full "
                        placeholder="blur"
                        quality={65}
                      />
                      {/* Icon Overlay */}
                      <div className="absolute -bottom-5 left-2 bg-[#2B432B] p-2 rounded-full">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    {/* Project Title */}
                    <div className="p-3">
                      <h3 className="text-sm font-semibold">{project.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Featured Project Section */}
        <motion.div
          variants={itemVariants}
          className="bg-cream rounded-lg p-6 lg:p-8"
        >
          <div>
            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-yellow-600 font-medium mb-2 tracking-wide text-sm"
            >
              SUSTAINABLE AGRICULTURE
            </motion.p>
            {/* Title */}
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold mb-4"
            >
              The Best Support Project Made for Farmers
            </motion.h3>
            {/* Description */}
            <motion.p variants={itemVariants} className="text-gray-600 mb-6">
              There are many variations of passages of lorem available, but the
              majority have suffered alteration in some form by injected humor
              or random word which don&apos;t look even.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 mb-6">
              There are many variations of passages of lorem available, but the
              majority have suffered alteration Lorem ipsum dolor sit amet
              consectetur adipisicing elit. in some form by injected humor or
              random word which don&apos;t look even.
            </motion.p>
            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button className="bg-[#2B432B] hover:bg-[#1F331F] text-white px-6 py-2 text-sm">
                INVEST NOW
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
