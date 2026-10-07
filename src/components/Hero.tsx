import React, { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { GridBackground } from "@/components/ui/spotlight";

const Hero = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Keep the entrance perceptible but never on the input path.
    const timer = setTimeout(() => setShowText(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header 
      id="hero" 
      className="relative flex min-h-[92svh] w-full overflow-hidden bg-hero text-hero-foreground md:min-h-screen" 
      aria-label="Hero sekce"
    >
      {/* Grid Background */}
      <GridBackground />
      
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-b from-transparent to-hero" />

      <div className="relative z-10 mx-auto flex min-h-[92svh] w-full max-w-5xl flex-col items-center justify-center px-4 pb-32 pt-28 text-center md:min-h-screen md:pb-36 md:pt-36">
        {/* Small logo above heading */}
        <img
          src="/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png"
          alt="Logo"
          className="mb-8 h-12 w-auto opacity-90 md:mb-10 md:h-14"
        />

        {/* Main headline */}
        <h1 className={`max-w-5xl font-sf text-5xl font-bold leading-[0.96] tracking-normal text-center text-hero-foreground sm:text-6xl md:text-8xl lg:text-9xl transition-all duration-700 ease-out ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {t("heroTitle")}<br />
          <span className="bg-gradient-to-b from-hero-foreground to-hero-muted bg-clip-text text-transparent">{t("heroTitleLine2")}</span>
        </h1>

        {/* Subheading */}
        <p className={`mx-auto mt-8 max-w-2xl text-base leading-relaxed text-hero-muted sm:text-lg md:text-xl transition-all duration-700 ease-out delay-200 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {t("heroSubtitle")}<br />
          {t("heroSubtitleLine2")}
        </p>
        <div aria-hidden="true" className="absolute bottom-16 h-14 w-px bg-gradient-to-b from-hero-foreground/40 to-transparent" />
      </div>
    </header>
  );
};

export default Hero;