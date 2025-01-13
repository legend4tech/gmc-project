import { ProjectGrid } from "@/components/root/community-impact/ProjectGrid";
import { RatingTestimonials } from "@/components/root/community-impact/RatingTestimonials";
import { Footer } from "@/components/root/Footer";
import GeneralHeroSection from "@/components/root/GeneralHeroSection";
import GeneralVideoPreview from "@/components/root/GeneralVideoPreview";
import { NavBar } from "@/components/root/NavBar";

function page() {
  return (
    <div className="bg-[#FFFBE8]">
      <NavBar />
      <main className="space-y-20 mb-14">
        <GeneralHeroSection title="Community Impact" />
        <ProjectGrid />
        <GeneralVideoPreview title="Community Projects" />

        <RatingTestimonials />
      </main>
      <Footer />
    </div>
  );
}

export default page;
