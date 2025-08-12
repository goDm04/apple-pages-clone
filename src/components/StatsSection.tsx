import React from "react";
import { Card } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    { value: "20+", label: "dokončených projektů" },
    { value: "100%", label: "spokojených klientů" },
    { value: "3+", label: "roky zkušeností" },
    { value: "14 dní", label: "maximální doba dodání webu" },
  ];

  return (
    <section aria-labelledby="stats-heading" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto">
        <h2 id="stats-heading" className="sr-only">Statistiky</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item) => (
            <Card key={item.label} className="bg-card/60 backdrop-blur border-border">
              <div className="flex flex-col items-center justify-center text-center px-6 py-8 md:py-10">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
                  {item.value}
                </div>
                <div className="mt-2 text-sm md:text-base text-muted-foreground">
                  {item.label}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
