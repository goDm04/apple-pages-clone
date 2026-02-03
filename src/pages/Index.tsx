import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import CustomBanner from "@/components/CustomBanner";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <SmoothScroll />
      <Navigation />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <CustomBanner />
      <AppleCardsCarouselDemo />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
