// Core values section showcasing company principles
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

// CoreValue Section
export default function CoreValues() {
  // Core values data
  const values = [
    {
      title: "Sustainability",
      description:
        "We prioritize sustainable farming practices that minimize environmental impact while maximizing yield.",
    },
    {
      title: "Innovation",
      description:
        "We integrate the latest technologies and farming techniques to increase efficiency in agriculture.",
    },
    {
      title: "Growth",
      description:
        "We are committed to generating financial returns for our investors while contributing to the greater mission for food and agricultural progress.",
    },
  ];

  return (
    <div className="py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Image Section */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg"
              alt="Farmer on tractor"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
          {/* Profit Card */}
          <Card className="absolute -bottom-6 -left-6 w-48">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary">80% Profit</div>
              <p className="text-sm text-muted-foreground">
                Up to $50K Monthly
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Our Core Values</h2>
          <div className="space-y-6">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold leading-none">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
