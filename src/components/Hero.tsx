import React from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <header 
      id="hero" 
      className="relative w-full isolate" 
      aria-label="Hero sekce"
    >
      {/* Background image */}
      <img
        src="https://imgur.com/7oafTW3.jpeg"
        alt="Moderní kancelář s kreativním týmem pracujícím na digitálních projektech a brandingu"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      {/* Readability overlay using design tokens */}
      

      <div className="container mx-auto flex min-h-[95vh] md:min-h-screen flex-col items-center justify-center py-24 text-center gap-6">
        {/* Small logo above heading */}
        <img
          src="/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png"
          alt="Tension Creative logo - digitální kreativní agentura"
          className="h-10 w-auto"
        />

        {/* Main headline */}
        <h1 className="font-sf text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary-foreground">
          {t("heroTitle")}<br />
          {t("heroTitleLine2")}
        </h1>

        {/* Subheading */}
        <p className="mx-auto max-w-3xl text-lg md:text-xl font-regular text-primary-foreground">
          {t("heroSubtitle")}<br />
          {t("heroSubtitleLine2")}
        </p>
      </div>
    </header>
  );
};

export default Hero;
