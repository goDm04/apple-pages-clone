import React from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Spotlight, GridBackground } from "@/components/ui/spotlight";

const Hero = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <header 
      id="hero" 
      className="relative w-full min-h-[95vh] md:min-h-screen bg-black overflow-hidden" 
      aria-label="Hero sekce"
    >
      {/* Grid Background */}
      <GridBackground />
      
      {/* Spotlight Effect */}
      <Spotlight />

      <div className="relative z-50 container mx-auto flex flex-col items-center justify-center min-h-[95vh] md:min-h-screen py-24 text-center gap-6">
        {/* Small logo above heading */}
        <img
          src="/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png"
          alt="Logo"
          className="h-10 w-auto"
        />

        {/* Main headline */}
        <h1 className="font-sf text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight py-2">
          {t("heroTitle")}<br />
          {t("heroTitleLine2")}
        </h1>

        {/* Subheading */}
        <p className="mx-auto max-w-3xl text-lg md:text-xl font-regular text-neutral-300 text-center">
          {t("heroSubtitle")}<br />
          {t("heroSubtitleLine2")}
        </p>
      </div>
    </header>
  );
};

export default Hero;