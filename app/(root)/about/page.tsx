import { FeatureSection } from "@/components/root/about/FeatureSection";
import { TeamSection } from "@/components/root/about/TeamSection";
import { Footer } from "@/components/root/Footer";
import { NavBar } from "@/components/root/NavBar";
import GeneralHeroSection from "@/components/root/GeneralHeroSection";
import GeneralVideoPreview from "@/components/root/GeneralVideoPreview";

function AboutPage() {
  return (
    <div className="bg-[#FFFBE8]">
      <NavBar />
      <main>
        <GeneralHeroSection title="About Us" />
        <FeatureSection />
        <GeneralVideoPreview title="Our Project Timeline" />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
