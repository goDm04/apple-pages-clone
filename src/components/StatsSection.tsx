import React from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const StatsSection = () => {
  const stats = [
    { value: "20+", label: "dokončených projektů" },
    { value: "100%", label: "spokojených klientů" },
    { value: "3+", label: "roky zkušeností" },
    { value: "14 dní", label: "maximální doba dodání webu" },
  ];

  const { elementRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  const [started, setStarted] = React.useState(false);
  const [values, setValues] = React.useState<number[]>(stats.map(() => 0));

  const parseStat = (value: string) => {
    const match = value.match(/^(\d+)\s*(.*)$/);
    if (!match) return { target: 0, suffix: "" };
    return { target: parseInt(match[1], 10), suffix: value.slice(match[1].length) };
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [elementRef]);

  React.useEffect(() => {
    if (!started) return;
    const targets = stats.map((s) => parseStat(s.value).target);
    const duration = 1200; // ms
    const start = performance.now();
    let raf = 0 as number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValues(targets.map((t) => Math.round(t * progress)));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started]);

  return (
    <section
      id="statistiky"
      aria-label="Statistiky"
      className={`pt-16 md:pt-20 pb-20 px-8 max-w-7xl mx-auto transition-all duration-700 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="space-y-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => {
            const { suffix } = parseStat(item.value);
            return (
              <div key={item.label} className="space-y-3 text-center">
                <div className="text-6xl md:text-7xl font-bold font-sf text-foreground leading-none tracking-tight">
                  {values[idx]}
                  {suffix}
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

