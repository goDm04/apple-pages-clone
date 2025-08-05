import React from 'react';

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Navrhneme vizuální strategii",
      description: "Grafika, web nebo content – každý výstup má smysl, tón a estetiku. Vytvoříme koncept, který propojí váš brand s vaším cílovým publikem."
    },
    {
      number: "02", 
      title: "Navrhneme vizuální strategii",
      description: "Grafika, web nebo content – každý výstup má smysl, tón a estetiku. Vytvoříme koncept, který propojí váš brand s vaším cílovým publikem."
    },
    {
      number: "03",
      title: "Vytvoříme a společně spustíme", 
      description: "Kreativu převedeme do funkční reality – weby, vizuály i kampaně připravujeme tak, aby nejen vypadaly skvěle, ale taky měly dopad."
    },
    {
      number: "04",
      title: "Spravujeme a posouváme dál",
      description: "Značka nekončí spuštěním. Sledujeme, co funguje, co je potřeba ladit a jak vás dál rozvpět – třeba skrze správu sítí nebo další obsah."
    }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="space-y-16">
        {/* Section header */}
        <h2 className="text-xl md:text-5xl font-bold text-foreground font-sf">
          Jak to probíhá?
        </h2>
        
        {/* Process steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.number} className="space-y-4">
              {/* Step number */}
              <div className="text-6xl font-bold font-sf text-foreground opacity-20">
                {step.number}
              </div>
              
              {/* Step content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold font-sf text-foreground leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm font-sf text-[#1D1D1F] leading-relaxed">
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