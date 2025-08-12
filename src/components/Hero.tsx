import React from "react";

const Hero = () => {
  return (
    <header className="relative w-full isolate" aria-label="Hero sekce">
      {/* Background image */}
      <img
        src="/lovable-uploads/7cc33aec-a3cc-4201-9de1-1b8d9d0991b6.png"
        alt="Abstraktní vlny – pozadí hero sekce"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      {/* Readability overlay using design tokens */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />

      <div className="container mx-auto flex min-h-[95vh] md:min-h-screen flex-col items-center justify-center py-24 text-center gap-6">
        {/* Small logo above heading */}
        <img
          src="/lovable-uploads/08bd3a2e-1841-421d-a162-79292032a5a6.png"
          alt="Logo"
          className="h-10 w-auto"
        />

        {/* Main headline */}
        <h1 className="font-sf text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-foreground">
          Dostaňte svůj byznys z nuly na trend.
        </h1>

        {/* Subheading */}
        <p className="mx-auto max-w-3xl text-base md:text-lg font-medium text-primary-foreground">
          Pomáháme značkám růst. Od prvního nápadu až po moment, kdy se stanou těmi, o kterých se mluví.
        </p>
      </div>
    </header>
  );
};

export default Hero;
