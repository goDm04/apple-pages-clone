import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import CustomBanner from "@/components/CustomBanner";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  const { hash } = useLocation();

  // Arriving from another route with an anchor (e.g. /#kontakt) must land
  // on the right section instead of the top of the page.
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);

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
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
