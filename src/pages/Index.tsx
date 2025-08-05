import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AppleCardsCarouselDemo />
      <ServicesSection />
    </div>
  );
};

export default Index;
