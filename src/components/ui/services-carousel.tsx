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
import { AnimatePresence, motion } from "framer-motion";
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
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const ServicesCarousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sidePadding, setSidePadding] = useState(16);

  useEffect(() => {
    if (!carouselRef.current) return;

    const updatePaddingAndCenter = () => {
      const cardWidth = 1200; // w-80 to match About section card
      const viewportWidth = window.innerWidth;
      const computed = Math.max(16, (viewportWidth - cardWidth) / 2);
      setSidePadding(computed);
      // Keep the current card centered after resize/init
      setTimeout(() => scrollToIndex(currentIndex, computed), 0);
    };

    // Initial setup
    requestAnimationFrame(updatePaddingAndCenter);

    // Handle window resize
    window.addEventListener('resize', updatePaddingAndCenter);

    return () => {
      window.removeEventListener('resize', updatePaddingAndCenter);
    };
  }, [currentIndex]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      scrollToIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current && currentIndex < items.length - 1) {
      const newIndex = currentIndex + 1;
      scrollToIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number, paddingOverride?: number) => {
    if (carouselRef.current) {
      const cardWidth = 320; // w-80 to match About section card
      const gap = 16; // Tailwind gap-4 = 1rem = 16px
      const viewportWidth = window.innerWidth;
      const paddingLeft = typeof paddingOverride === 'number' ? paddingOverride : sidePadding;

      // Calculate exact center position for the target card
      const delta = paddingLeft + cardWidth / 2 - viewportWidth / 2;
      const target = (cardWidth + gap) * index + delta;

      // Clamp within scrollable range
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const scrollPosition = Math.max(0, Math.min(target, maxScroll));

      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
      checkScrollability();
    }
  };

  const handleCardClose = (index: number) => {
    scrollToIndex(index);
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
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
              "flex flex-row justify-start gap-4",
              "mx-auto max-w-none w-full",
            )}
            style={{ paddingLeft: sidePadding, paddingRight: sidePadding }}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                }}
                key={"card" + index}
                className="rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-muted disabled:opacity-50"
            onClick={scrollLeft}
            disabled={currentIndex === 0}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-muted-foreground" />
          </button>
          
          <div className="flex items-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-foreground' 
                    : 'w-2 bg-muted-foreground'
                }`}
                onClick={() => scrollToIndex(index)}
              />
            ))}
          </div>
          
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-muted disabled:opacity-50"
            onClick={scrollRight}
            disabled={currentIndex === items.length - 1}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const ServicesCard = ({
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
    setOpen(true);
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-background p-4 font-sf md:p-10"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-foreground"
                onClick={handleClose}
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
                className="mt-4 text-2xl font-bold text-foreground md:text-5xl"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-96 w-80 flex-col items-start justify-start overflow-hidden rounded-3xl bg-muted"
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