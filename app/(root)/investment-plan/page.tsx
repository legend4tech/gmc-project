import { Footer } from "@/components/root/Footer";
import GeneralHeroSection from "@/components/root/GeneralHeroSection";
import { CryptoAssets } from "@/components/root/investment-plan/CryptoAssets";
import { FAQ } from "@/components/root/investment-plan/Faq";
import { InvestmentPlans } from "@/components/root/investment-plan/InvestmentPlans";
import { NavBar } from "@/components/root/NavBar";

function InvestmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main>
        <GeneralHeroSection title="Our Investment Plan" />

        <div className=" mx-auto px-4">
          <CryptoAssets />
          <InvestmentPlans />
          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default InvestmentPage;
