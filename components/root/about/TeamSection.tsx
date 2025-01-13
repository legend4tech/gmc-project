"use client";

import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf } from "lucide-react";
import Grain from "@/public/grain.png";
import Field from "@/public/field.png";
import Grapes from "@/public/grapes.png";

// Define the structure for team member data
interface TeamMember {
  name: string;
  role: string;
  image: StaticImageData;
}

// Team member data
const teamMembers: TeamMember[] = [
  { name: "Jane Doe", role: "Lead", image: Grain },
  { name: "Magret Brown", role: "Second", image: Field },
  { name: "John Martin", role: "Third", image: Grapes },
];

// Animation variants for Framer Motion
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Component for individual team member card
const TeamMemberCard = ({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) => {
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
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      custom={index}
    >
      <Card className="overflow-hidden border-none">
        <CardContent className="bg-primary/5 pt-4">
          <Image
            src={member.image}
            alt={member.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto aspect-square object-cover"
          />
          <div className="flex items-center gap-3 p-2">
            <div className="bg-[#2B432B] p-2 rounded-lg">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Main TeamSection component
export function TeamSection() {
  return (
    <section className="py-20">
      <div className="px-5 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-green-600">The Team</span>
          <h2 className="text-3xl font-bold mt-2">Meet Our Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
