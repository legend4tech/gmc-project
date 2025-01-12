// Main page component that composes all sections of the landing page
// Each section is lazy loaded for better performance
import Hero from "@/components/root/homepage/HeroSection";
import CoreValues from "@/components/root/homepage/CoreValues";
import InvestmentBenefits from "@/components/root/homepage/InvestmentBenefits";
import Mission from "@/components/root/homepage/Mission";
import Timeline from "@/components/root/homepage/Timeline";
import { NavBar } from "@/components/root/NavBar";
import OurOffer from "@/components/root/homepage/OurOffer";
import { Footer } from "@/components/root/homepage/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
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
      <Footer></Footer>
    </main>
  );
}
