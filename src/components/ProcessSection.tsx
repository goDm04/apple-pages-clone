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
      className={`w-full border-b border-border py-24 md:py-32 transition-all duration-700 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        {/* Section header */}
        <div><span className="section-kicker">02 / Process</span><h2 className="max-w-3xl font-display text-4xl font-bold leading-tight text-foreground md:text-7xl">
          {t("processTitle")}
        </h2></div>
        
        {/* Process steps grid */}
        <div className="border-t border-border">
          {processSteps.map((step) => (
            <div key={step.number} className="group grid gap-5 border-b border-border py-8 transition-colors hover:bg-muted/40 md:grid-cols-[120px_1fr_1.5fr] md:items-start md:px-6">
              {/* Step number */}
              <div className="font-display text-sm font-bold text-primary">
                {step.number}
              </div>
              
              {/* Step content */}
              <div>
                <h3 className="font-display text-xl font-bold leading-tight text-foreground md:text-2xl">
                  {step.title}
                </h3>
              </div>
                <p className="max-w-2xl font-sf text-sm leading-relaxed text-muted-foreground md:text-base">
                  {step.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
