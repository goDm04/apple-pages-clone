import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll() {
  useEffect(() => {
    // Smooth/hijacked scrolling is a vestibular trigger — never run it when
    // the user asked for reduced motion.
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (query.matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let frame = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
