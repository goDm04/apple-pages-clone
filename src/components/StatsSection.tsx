import React from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";

const StatsSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    { value: "20+", label: t("stat1") },
    { value: "100%", label: t("stat2") },
    { value: "3+", label: t("stat3") },
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
      className={`w-full border-b border-border py-0 transition-all duration-700 ${
        isInView ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
      }`}
      ref={elementRef}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 border-x border-border sm:grid-cols-3">
          {stats.map((item, idx) => {
            const { suffix } = parseStat(item.value);
            return (
              <div key={item.label} className={`space-y-3 px-6 py-12 text-center md:py-16 ${idx > 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""}`}>
                <div className="font-display text-5xl font-bold leading-none text-foreground md:text-7xl">
                  {values[idx]}
                  {suffix}
                </div>
                <p className="font-sf text-xs font-semibold uppercase text-muted-foreground">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

