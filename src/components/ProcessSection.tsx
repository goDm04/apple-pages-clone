import React from 'react';
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";

const ProcessSection = () => {
  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();
  
  const processSteps = [
    {
      number: "01",
      title: t("process1Title"),
      description: t("process1Desc")
    },
    {
      number: "02", 
      title: t("process2Title"),
      description: t("process2Desc")
    },
    {
      number: "03",
      title: t("process3Title"), 
      description: t("process3Desc")
    },
    {
      number: "04",
      title: t("process4Title"),
      description: t("process4Desc")
    }
  ];

  return (
    <section 
      className={`w-full bg-gradient-ink py-24 text-background transition-all duration-700 md:py-32 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        {/* Section header */}
        <h2 className="max-w-3xl font-sf text-4xl font-bold leading-tight tracking-normal text-background md:text-6xl">
          {t("processTitle")}
        </h2>
        
        {/* Process steps grid */}
        <div className="relative grid border-t border-background/20 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.number} className="relative space-y-8 border-b border-background/20 py-8 md:border-r md:px-8 lg:border-b-0 first:md:pl-0 last:md:border-r-0 last:md:pr-0">
              {/* Step number */}
              <div className="font-sf text-sm font-semibold text-background/50">
                {step.number}
              </div>
              
              {/* Step content */}
              <div className="space-y-3">
                <h3 className="font-sf text-xl font-bold leading-tight text-background">
                  {step.title}
                </h3>
                <p className="font-sf text-sm leading-relaxed text-background/60">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
