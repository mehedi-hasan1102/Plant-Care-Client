
import AdditionalSections from "../Components/AdditionalSections";
import HeroSection from "../Components/HeroSection";

import NewPlantsSection from "../Components/NewPlantsSection";
import PromotionalOffers from "../Components/PromotionalOffers";
import TopMistakesSection from "../Components/TopMistakesSection";


const Home = () => {
  return (
    

    <div>
  <HeroSection />
  
  <div className="max-w-7xl mx-auto">
    <NewPlantsSection />
    <PromotionalOffers />
    <AdditionalSections />
    <TopMistakesSection />
  </div>
</div>

  );
};

export default Home;
