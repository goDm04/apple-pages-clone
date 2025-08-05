import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AppleCardsCarouselDemo />
      <ServicesSection />
      <ProcessSection />
    </div>
  );
};

export default Index;
