import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
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
      className="relative flex min-h-[92vh] w-full overflow-hidden border-b border-border bg-background"
      aria-label="Hero sekce"
    >
      <div className="homepage-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 pb-16 pt-32 text-center md:px-8 md:pb-20 md:pt-40">
        <img
          src="/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png"
          alt="Tension Creative"
          className={`mb-9 h-9 w-auto transition-all duration-700 md:h-11 ${showText ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        />

        <h1 className={`max-w-5xl font-display text-5xl font-bold leading-[0.98] text-foreground transition-all duration-700 ease-out sm:text-6xl md:text-7xl lg:text-[6.6rem] ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {t("heroTitle")}<br />
          <span className="text-primary">{t("heroTitleLine2")}</span>
        </h1>

        <p className={`mt-8 max-w-2xl font-sf text-base leading-relaxed text-muted-foreground transition-all delay-150 duration-700 ease-out md:text-xl ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {t("heroSubtitle")}<br />
          {t("heroSubtitleLine2")}
        </p>
        <Button
          size="lg"
          onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
          className={`mt-9 rounded-full bg-primary px-7 font-sf font-bold text-primary-foreground hover:bg-primary/90 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {t("ctaButton")}
          <ArrowDownRight className="h-4 w-4" />
        </Button>
        <div className="mt-14 grid w-full grid-cols-2 border-y border-border text-left md:grid-cols-4">
          {[t("websitesTitle"), t("socialMediaTitle"), t("graphicsTitle"), "Branding"].map((item, index) => (
            <span key={item} className={`border-border px-4 py-4 font-sf text-[11px] font-semibold uppercase text-muted-foreground md:px-6 ${index > 0 ? "border-l" : ""}`} style={{ letterSpacing: "0.12em" }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;