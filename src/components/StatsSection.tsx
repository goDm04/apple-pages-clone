import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "20+", label: "dokončených projektů" },
    { value: "100%", label: "spokojených klientů" },
    { value: "3+", label: "roky zkušeností" },
    { value: "14 dní", label: "maximální doba dodání webu" },
  ];

  return (
    <section id="statistiky" aria-labelledby="stats-heading" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="space-y-16">
        <h2 id="stats-heading" className="text-xl md:text-5xl font-bold text-foreground font-sf">
          Statistiky
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div key={item.label} className="space-y-3">
              <div className="text-6xl md:text-7xl font-bold font-sf text-foreground leading-none tracking-tight">
                {item.value}
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
