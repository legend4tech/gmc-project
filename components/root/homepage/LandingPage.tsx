import Hero from "@/components/root/homepage/HeroSection";
import CoreValues from "@/components/root/homepage/CoreValues";
import InvestmentBenefits from "@/components/root/homepage/InvestmentBenefits";
import { NavBar } from "@/components/root/NavBar";
import { Footer } from "@/components/root/Footer";
import OurOffer from "@/components/root/homepage/OurOffer";
import Timeline from "@/components/root/homepage/Timeline";
import Mission from "@/components/root/homepage/Mission";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FFFBE8]">
      <NavBar />
      {/* Hero Section */}
      <Hero />
      {/* Core Values Section */}
      <section className="relative">
        <CoreValues />
      </section>
      {/* Investment Benefits Section */}
      <section className="mt-11 relative py-16">
        <InvestmentBenefits />
      </section>
      {/* Mission Section */}
      <section className="mt-11 relative ">
        <Mission />
      </section>
      {/* Timeline Section */}
      <section className=" mt-11 relative py-16">
        <Timeline />
      </section>
      {/* Offer Section */}
      <section>
        <OurOffer />
      </section>
      <Footer />
    </main>
  );
}
