import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  href?: string;
  imageScale?: number;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const getCardStep = () => {
    const el = carouselRef.current;
    const card = el?.querySelector<HTMLElement>("[data-carousel-card]");
    if (!card) return 320;
    const gap = 16;
    return card.getBoundingClientRect().width + gap;
  };

  // Interruptible, velocity-aware scroll animation (no CSS smooth scroll).
  const rafRef = useRef<number | null>(null);
  const animStateRef = useRef({ value: 0, velocity: 0, target: 0 });

  const stopAnimation = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  /**
   * Critically damped spring (damping 1.0) animating from the *current*
   * on-screen value with the handed-off velocity, so it can be grabbed
   * and redirected at any moment.
   */
  const springTo = (target: number, initialVelocity = 0, response = 0.4) => {
    const el = carouselRef.current;
    if (!el) return;
    stopAnimation();

    const max = el.scrollWidth - el.clientWidth;
    const clamped = Math.max(0, Math.min(max, target));

    if (reduceMotion) {
      el.scrollLeft = clamped;
      checkScrollability();
      return;
    }

    const state = animStateRef.current;
    state.value = el.scrollLeft;
    state.velocity = initialVelocity;
    state.target = clamped;

    const omega = (2 * Math.PI) / response; // damping ratio = 1.0
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;

      const displacement = state.value - state.target;
      const accel = -omega * omega * displacement - 2 * omega * state.velocity;
      state.velocity += accel * dt;
      state.value += state.velocity * dt;

      el.scrollLeft = state.value;

      if (Math.abs(state.value - state.target) < 0.5 && Math.abs(state.velocity) < 10) {
        el.scrollLeft = state.target;
        rafRef.current = null;
        checkScrollability();
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  /** Apple's momentum projection (Designing Fluid Interfaces sample code). */
  const project = (initialVelocity: number, decelerationRate = 0.998) =>
    (initialVelocity / 1000) * decelerationRate / (1 - decelerationRate);

  const nearestSnap = (position: number) => {
    const step = getCardStep();
    return Math.round(position / step) * step;
  };

  const scrollLeft = () => {
    const el = carouselRef.current;
    if (!el) return;
    springTo(nearestSnap(el.scrollLeft - getCardStep()), 0, 0.4);
  };

  const scrollRight = () => {
    const el = carouselRef.current;
    if (!el) return;
    springTo(nearestSnap(el.scrollLeft + getCardStep()), 0, 0.4);
  };

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const historyRef = useRef<{ x: number; t: number }[]>([]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const DRAG_THRESHOLD = 10; // hysteresis before committing to a drag
    const RUBBERBAND_CONSTANT = 0.55;

    const rubberband = (overshoot: number, dimension: number) =>
      (overshoot * dimension * RUBBERBAND_CONSTANT) /
      (dimension + RUBBERBAND_CONSTANT * Math.abs(overshoot));

    const onPointerDown = (e: PointerEvent) => {
      // Touch already has native inertial scrolling + rubber-banding: leave it alone.
      if (e.pointerType === "touch") return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      // Grabbing a moving carousel must take it over immediately.
      stopAnimation();
      isDraggingRef.current = true;
      hasDraggedRef.current = false;
      startXRef.current = e.clientX;
      scrollStartRef.current = el.scrollLeft;
      historyRef.current = [{ x: e.clientX, t: e.timeStamp }];
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - startXRef.current;

      if (!hasDraggedRef.current) {
        if (Math.abs(dx) < DRAG_THRESHOLD) return;
        hasDraggedRef.current = true;
        el.style.userSelect = "none";
      }
      e.preventDefault();

      // Keep a short velocity history rather than a single point.
      historyRef.current.push({ x: e.clientX, t: e.timeStamp });
      if (historyRef.current.length > 6) historyRef.current.shift();

      const max = el.scrollWidth - el.clientWidth;
      const raw = scrollStartRef.current - dx;

      if (raw < 0) {
        el.scrollLeft = -rubberband(-raw, el.clientWidth);
      } else if (raw > max) {
        el.scrollLeft = max + rubberband(raw - max, el.clientWidth);
      } else {
        el.scrollLeft = raw;
      }
    };

    const endDrag = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      el.style.userSelect = "";
      el.style.cursor = "grab";
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);

      const history = historyRef.current;
      const first = history[0];
      const last = history[history.length - 1];
      const dt = last && first ? last.t - first.t : 0;
      // px/s of the scroll position (inverse of pointer direction)
      const velocity = dt > 0 ? (-(last.x - first.x) / dt) * 1000 : 0;

      if (!hasDraggedRef.current) return;

      const max = el.scrollWidth - el.clientWidth;
      const projected = el.scrollLeft + project(velocity);
      const target = Math.max(0, Math.min(max, nearestSnap(projected)));
      // Hand the release velocity to the spring: no seam between drag and animation.
      springTo(target, velocity, Math.abs(velocity) > 50 ? 0.5 : 0.35);
    };

    // Prevent click on cards after dragging
    const onClick = (e: MouseEvent) => {
      if (hasDraggedRef.current) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    // Prevent native image drag
    const onDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
    el.addEventListener("dragstart", onDragStart);
    el.addEventListener("click", onClick, true);

    return () => {
      stopAnimation();
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("dragstart", onDragStart);
      el.removeEventListener("click", onClick, true);
    };
  }, []);


  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      springTo(getCardStep() * (index + 1), 0, 0.4);
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full cursor-grab overflow-x-scroll overscroll-x-auto py-10 [scrollbar-width:none] md:py-14"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={
                  reduceMotion
                    ? { duration: 0.2, ease: "easeOut" }
                    : { type: "spring", bounce: 0, duration: 0.5, delay: 0.08 * index }
                }
                key={"card" + index}
                data-carousel-card
                className="rounded-lg last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background transition-[background-color,transform] duration-100 ease-out hover:bg-muted active:scale-90 disabled:opacity-50 disabled:active:scale-100"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Předchozí projekt"
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-muted-foreground" />
          </button>
          <button
            className="relative z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background transition-[background-color,transform] duration-100 ease-out hover:bg-muted active:scale-90 disabled:opacity-50 disabled:active:scale-100"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Další projekt"
          >
            <IconArrowNarrowRight className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>

      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  // Anchor the sheet to the card that opened it, so it emerges from where it came.
  const [origin, setOrigin] = useState("50% 50%");
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

const handleOpen = () => {
  // Enable modal open for FINPRO21 Reality and Centrum pojištění Vlašim
  if (card.title === "FINPRO21 Reality" || card.title === "Centrum pojištění Vlašim") {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (rect) {
      setOrigin(`${rect.left + rect.width / 2}px ${rect.top + rect.height / 2}px`);
    }
    setOpen(true);
    return;
  }
  
  
  // For other cards, open external link if provided
  if (card.href) {
    const url = card.href.startsWith("http") ? card.href : `https://${card.href}`;
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }
  
  // Intentionally do nothing for cards without href
};

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ type: "spring", bounce: 0, duration: 0.35 }}
              className="fixed inset-0 h-full w-full bg-black/80"
            />
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
              transition={
                reduceMotion
                  ? { duration: 0.2, ease: "easeOut" }
                  : { type: "spring", bounce: 0, duration: 0.4 }
              }
              style={{ transformOrigin: origin }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-background p-4 font-sf md:p-10"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-foreground transition-transform duration-100 ease-out active:scale-90"
                onClick={handleClose}
                aria-label="Zavřít"
              >
                <IconX className="h-6 w-6 text-background" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-foreground"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-5xl"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        ref={triggerRef}
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-80 flex-col items-start justify-start overflow-hidden rounded-lg bg-muted transition-transform duration-100 ease-out active:scale-[0.97] md:h-[40rem] md:w-96"
      >

        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sf text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sf text-xl font-bold [text-wrap:balance] text-white md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          className="absolute inset-0 z-10 object-cover"
          style={{ transform: `scale(${card.imageScale ?? 1.65})` }}
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  src,
  className,
  alt,
  ...rest
}: {
  src: string;
  className?: string;
  alt?: string;
  [key: string]: any;
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};