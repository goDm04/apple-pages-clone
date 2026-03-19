import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Spotlight, GridBackground, CenterGlow } from "@/components/ui/spotlight";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useLanguage();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      id="hero"
      className="relative w-full min-h-[95vh] md:min-h-screen bg-black overflow-hidden"
      aria-label="Hero sekce"
    >
      <GridBackground />
      <CenterGlow />
      <Spotlight />

      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center min-h-[95vh] md:min-h-screen py-24 text-center gap-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <img
            src="/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png"
            alt="Logo"
            className="h-5 w-auto"
          />
          <span className="text-sm font-medium text-neutral-400 tracking-wide uppercase">
            Creative Studio
          </span>
        </motion.div>

        {/* Main headline */}
        <h1
          className={`font-sf text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-center leading-[1.1] md:leading-[1.1] lg:leading-[1.1] transition-all duration-700 ease-out ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500">
            {t("heroTitle")}
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300">
            {t("heroTitleLine2")}
          </span>
        </h1>

        {/* Subheading */}
        <p
          className={`mx-auto max-w-2xl text-lg md:text-xl font-normal text-neutral-400 text-center leading-relaxed transition-all duration-700 ease-out delay-200 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("heroSubtitle")}
          <br />
          {t("heroSubtitleLine2")}
        </p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: showText ? 1 : 0, y: showText ? 0 : 16 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 mt-2"
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-neutral-200 transition-colors duration-200"
          >
            {t("contactUs")}
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("services");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-full border border-white/20 text-neutral-300 font-semibold text-sm tracking-wide hover:bg-white/5 transition-colors duration-200"
          >
            {t("services")}
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </header>
  );
};

export default Hero;
