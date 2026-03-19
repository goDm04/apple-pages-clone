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
      className={`w-full py-20 transition-all duration-700 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        {/* Section header */}
        <h2 className="text-xl md:text-5xl font-bold text-foreground font-sf">
          {t("processTitle")}
        </h2>
        
        {/* Process steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div key={step.number} className="bg-muted rounded-3xl p-8 space-y-4">
              {/* Step number */}
              <div className="text-5xl font-bold font-sf text-foreground/15">
                {step.number}
              </div>
              
              {/* Step content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold font-sf text-foreground leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm font-sf text-muted-foreground leading-relaxed">
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
