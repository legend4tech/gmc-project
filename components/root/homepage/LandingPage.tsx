"use client";

import Hero from "@/components/root/homepage/HeroSection";
import CoreValues from "@/components/root/homepage/CoreValues";
import InvestmentBenefits from "@/components/root/homepage/InvestmentBenefits";
import { NavBar } from "@/components/root/NavBar";
import { Footer } from "@/components/root/Footer";
import OurOffer from "@/components/root/homepage/OurOffer";
import Timeline from "@/components/root/homepage/Timeline";
import Mission from "@/components/root/homepage/Mission";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PopupLoginForm from "@/components/auths/PopupLoginForm";

export default function LandingPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [hasShownDialog, setHasShownDialog] = useState(false);
  const { ref: investmentRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasShownDialog) {
      setDialogOpen(true);
      setHasShownDialog(true);
    }
  }, [inView, hasShownDialog]);

  return (
    <main className="min-h-screen bg-[#FFFBE8]">
      <NavBar />
      <Hero />
      <section className="relative">
        <CoreValues />
      </section>
      <section ref={investmentRef} className="mt-11 relative py-16">
        <InvestmentBenefits />
      </section>
      <section className="mt-11 relative">
        <Mission />
      </section>
      <section className="mt-11 relative py-16">
        <Timeline />
      </section>
      <section>
        <OurOffer />
      </section>
      <Footer />
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <span style={{ display: "none" }} />
        </DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent className="sm:max-w-[425px]">
          <PopupLoginForm />
        </DialogContent>
      </Dialog>
    </main>
  );
}
