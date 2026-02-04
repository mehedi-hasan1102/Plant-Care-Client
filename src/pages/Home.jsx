
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
  <section id="hero">
    <HeroSection />
  </section>
  
  <div className="max-w-7xl mx-auto">
    <section id="new-plants">
      <NewPlantsSection />
    </section>
    <section id="features">
      <FeaturesSection />
    </section>
    <section id="offers">
      <PromotionalOffers />
    </section>
    <section id="testimonials">
      <TestimonialsSection />
    </section>
    <section id="care-guide">
      <PlantCareGuideSection />
    </section>
    <section id="additional">
      <AdditionalSections />
    </section>
    <section id="mistakes">
      <TopMistakesSection />
    </section>
  </div>

  <section id="cta">
    <CTASection />
  </section>
</div>
  );
};

export default Home;
