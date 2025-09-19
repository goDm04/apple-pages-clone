import React, { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Spotlight, GridBackground } from "@/components/ui/spotlight";

const Hero = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header 
      id="hero" 
      className="relative w-full min-h-[95vh] md:min-h-screen bg-black overflow-hidden" 
      aria-label="Hero sekce"
    >
      {/* Grid Background */}
      <GridBackground />
      
      {/* Spotlight Effect */}
      <Spotlight 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .15) 0, hsla(210, 100%, 55%, .08) 50%, hsla(210, 100%, 45%, .03) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .12) 0, hsla(210, 100%, 55%, .06) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 45%, .04) 80%, transparent 100%)"
      />
      
      {/* Additional ambient lighting */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent z-5" />

      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center min-h-[95vh] md:min-h-screen py-24 text-center gap-6">
        {/* Small logo above heading */}
        <img
          src="/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png"
          alt="Logo"
          className="h-10 w-auto"
        />

        {/* Main headline */}
        <h1 className={`font-sf text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight py-2 md:py-0 md:leading-tight lg:leading-tight transition-all duration-700 ease-out ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {t("heroTitle")}<br />
          {t("heroTitleLine2")}
        </h1>

        {/* Subheading */}
        <p className={`mx-auto max-w-3xl text-lg md:text-xl font-regular text-neutral-300 text-center transition-all duration-700 ease-out delay-200 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {t("heroSubtitle")}<br />
          {t("heroSubtitleLine2")}
        </p>
      </div>
    </header>
  );
};

export default Hero;