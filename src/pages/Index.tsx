import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CardsWithSlider from "@/components/CardsWithSlider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ServicesSection />
      <AppleCardsCarouselDemo />
      <CardsWithSlider />
      <ProcessSection />
      <AboutSection />
      <FAQSection />
    </div>
  );
};

export default Index;
