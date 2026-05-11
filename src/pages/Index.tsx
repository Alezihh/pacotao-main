import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import TransformationSection from "@/components/TransformationSection";
import ProductSection from "@/components/ProductSection";
import ForWhoSection from "@/components/ForWhoSection";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import BonusSection from "@/components/BonusSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <ProductSection />
      <TransformationSection />
      <ForWhoSection />
      <BenefitsSection />
      <OfferSection />
      <BonusSection />
      <SocialProofSection />
      <GuaranteeSection />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
