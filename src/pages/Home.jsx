
import AdditionalSections from "../Components/AdditionalSections";
import HeroSection from "../Components/HeroSection";
import NewPlantsSection from "../Components/NewPlantsSection";
import PromotionalOffers from "../Components/PromotionalOffers";
import TopMistakesSection from "../Components/TopMistakesSection";
import FeaturesSection from "../Components/FeaturesSection";
import TestimonialsSection from "../Components/TestimonialsSection";
import PlantCareGuideSection from "../Components/PlantCareGuideSection";
import CTASection from "../Components/CTASection";


const Home = () => {
  return (
    <div>
  <HeroSection />
  
  <div className="max-w-7xl mx-auto">
    <NewPlantsSection />
    <FeaturesSection />
    <PromotionalOffers />
    <TestimonialsSection />
    <PlantCareGuideSection />
    <AdditionalSections />
    <TopMistakesSection />
  </div>

  <CTASection />
</div>
  );
};

export default Home;
