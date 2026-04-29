import { useCallback, useEffect, useRef, useState } from "react";

export type ScreenshotSlide = { src: string; alt: string };

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function ScreenshotCarousel({
  screenshots,
  className = "",
}: {
  screenshots: ScreenshotSlide[];
  className?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const syncIndexFromScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el || el.clientWidth === 0) return;
    const next = Math.round(el.scrollLeft / el.clientWidth);
    setIndex(Math.min(Math.max(next, 0), Math.max(screenshots.length - 1, 0)));
  }, [screenshots.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", syncIndexFromScroll, { passive: true });
    return () => el.removeEventListener("scroll", syncIndexFromScroll);
  }, [syncIndexFromScroll]);

  const scrollByPage = useCallback((direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollByPage(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollByPage(1);
      }
    },
    [scrollByPage],
  );

  const atStart = index <= 0;
  const atEnd = index >= screenshots.length - 1;
  const showNav = screenshots.length > 1;

  return (
    <div
      className={`group relative h-full min-h-[200px] w-full overflow-hidden rounded-lg border border-white/20 bg-[var(--color-surface)] shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-mint)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] ${className}`}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
      onKeyDown={onKeyDown}
    >
      <div
        ref={scrollerRef}
        className="flex h-full min-h-[200px] snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {screenshots.map((shot, i) => (
          <div
            key={`${shot.src}-${i}`}
            className="relative h-full min-h-[200px] w-full min-w-full shrink-0 snap-start"
          >
            <a
              href={shot.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-mint)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
              aria-label={`View full size image: ${shot.alt}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                className="pointer-events-none h-full w-full object-contain"
                loading={i === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            </a>
          </div>
        ))}
      </div>

      {showNav && (
        <>
          <button
            type="button"
            className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[var(--color-surface-elevated)]/95 text-white shadow-md backdrop-blur-sm transition-opacity hover:bg-[var(--color-surface-elevated)] disabled:pointer-events-none disabled:opacity-35"
            aria-label="Previous screenshot"
            disabled={atStart}
            onClick={() => scrollByPage(-1)}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[var(--color-surface-elevated)]/95 text-white shadow-md backdrop-blur-sm transition-opacity hover:bg-[var(--color-surface-elevated)] disabled:pointer-events-none disabled:opacity-35"
            aria-label="Next screenshot"
            disabled={atEnd}
            onClick={() => scrollByPage(1)}
          >
            <ChevronRight />
          </button>
          <div
            className="pointer-events-none absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5"
            aria-hidden
          >
            {screenshots.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/35"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
