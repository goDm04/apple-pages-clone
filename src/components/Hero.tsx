import React from "react";

const Hero = () => {
  return (
    <header className="relative w-full isolate" aria-label="Hero sekce">
      {/* Background image */}
      <img
        src="/lovable-uploads/736fd6fb-d9aa-43c5-b152-56c2d62e9984.png"
        alt="Abstraktní vlny – pozadí hero sekce"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      {/* Readability overlay using design tokens */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />

      <div className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center py-24 text-center gap-6">
        {/* Small logo above heading */}
        <div
          className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/20 bg-background/30 backdrop-blur-sm"
          aria-hidden="true"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground"
            aria-hidden="true"
          >
            <path d="M6 18v4h8M22 10V6h-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Main headline */}
        <h1 className="font-sf text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
          Dostaňte svůj byznys z nuly na trend.
        </h1>

        {/* Subheading */}
        <p className="mx-auto max-w-3xl text-base md:text-lg text-muted-foreground">
          Pomáháme značkám růst. Od prvního nápadu až po moment, kdy se stanou těmi, o kterých se mluví.
        </p>
      </div>
    </header>
  );
};

export default Hero;
