"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type LifePhoto = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

const photos: LifePhoto[] = [
  {
    src: "/assets/journey/IMG_20240830_172107.jpg%20(2).jpeg",
    alt: "Advit Hub team discussion around a table",
    title: "Collaborative sessions",
    caption:
      "Open conversations, active listening, and shared problem-solving.",
  },
  {
    src: "/assets/journey/vvd.jpeg",
    alt: "Advit Hub community gathering in a workshop space",
    title: "Community workshops",
    caption: "Hands-on sessions where ideas move from whiteboard to workbench.",
  },
  {
    src: "/assets/journey/vvdBangalore.jpeg",
    alt: "Advit Hub group session in a modern workspace",
    title: "Life at the hub",
    caption:
      "A real environment for learning, building, and meeting collaborators.",
  },
];

const AUTOPLAY_DELAY = 4000;
const TRANSITION_DURATION = 420; // ms

export default function LifeAtAdvitHubSection() {
  // We clone first+last for infinite feel: [last, ...photos, first]
  const total = photos.length;
  const [current, setCurrent] = useState(1);
  const [transitioning, setTransitioning] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);
  const dragStartX = useRef(0);
  const dragDeltaX = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isJumping = useRef(false);

  // Slides: [clone of last, ...photos, clone of first]
  const slides = [photos[total - 1], ...photos, photos[0]];

  const goTo = useCallback((index: number, withTransition = true) => {
    setTransitioning(withTransition);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    if (isJumping.current) return;
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    if (isJumping.current) return;
    goTo(current - 1);
  }, [current, goTo]);

  // After sliding to clone, silently jump to real slide
  useEffect(() => {
    if (current === slides.length - 1) {
      // Slid to clone-of-first → jump to real first
      isJumping.current = true;
      const t = setTimeout(() => {
        goTo(1, false);
        setTimeout(() => {
          isJumping.current = false;
        }, 50);
      }, TRANSITION_DURATION);
      return () => clearTimeout(t);
    }
    if (current === 0) {
      // Slid to clone-of-last → jump to real last
      isJumping.current = true;
      const t = setTimeout(() => {
        goTo(total, false);
        setTimeout(() => {
          isJumping.current = false;
        }, 50);
      }, TRANSITION_DURATION);
      return () => clearTimeout(t);
    }
  }, [current, slides.length, total, goTo]);

  // Detect mobile
  useEffect(() => {
    const check = () =>
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Autoplay
  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      next();
    }, AUTOPLAY_DELAY);
  }, [next]);

  useEffect(() => {
    setTappedIndex(null);
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    };
  }, [current, resetAutoplay]);

  // Real slide index (0-based) for dots
  const realIndex =
    current === 0 ? total - 1 : current === slides.length - 1 ? 0 : current - 1;

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    dragDeltaX.current = 0;
    setIsDragging(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    dragDeltaX.current = e.clientX - dragStartX.current;
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDeltaX.current < -50) next();
    else if (dragDeltaX.current > 50) prev();
    dragDeltaX.current = 0;
  };

  // Touch drag
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragDeltaX.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    dragDeltaX.current = e.touches[0].clientX - dragStartX.current;
  };

  const onTouchEnd = () => {
    const delta = dragDeltaX.current;
    if (delta < -50) {
      setTappedIndex(null);
      next();
    } else if (delta > 50) {
      setTappedIndex(null);
      prev();
    } else if (Math.abs(delta) < 5) {
      // It's a tap, not a swipe — toggle caption
      setTappedIndex((prev) => (prev === realIndex ? null : realIndex));
    }
    dragDeltaX.current = 0;
  };

  return (
    <section
      id="life-at-advit-hub"
      style={{
        padding: "96px 0",
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#7C3AED",
              marginBottom: 12,
              fontFamily: "var(--font-sans)",
            }}
          >
            Life at Advit Hub
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#0A0F2C",
              marginBottom: 14,
              fontFamily: "var(--font-sans)",
              letterSpacing: "-0.02em",
            }}
          >
            The journey, captured in moments
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#64748B",
              maxWidth: 760,
              margin: "0 auto",
              lineHeight: 1.7,
              fontFamily: "var(--font-sans)",
            }}
          >
            A visual carousel of the people, rooms, and conversations that shape
            everyday life at Advit Hub.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div
          style={{
            position: "relative",
            borderRadius: 28,
            border: "1px solid rgba(15, 23, 42, 0.08)",
            background: "rgba(255,255,255,0.8)",
            boxShadow: "0 24px 60px rgba(15,23,42,0.08)",
            overflow: "hidden",
            userSelect: "none",
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Radial gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top left, rgba(124,58,237,0.08), transparent 45%), radial-gradient(circle at bottom right, rgba(37,99,235,0.08), transparent 40%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          {/* Track */}
          <div
            ref={trackRef}
            style={{
              display: "flex",
              width: `${slides.length * 100}%`,
              transform: `translateX(-${(current / slides.length) * 100}%)`,
              transition: transitioning
                ? `transform ${TRANSITION_DURATION}ms cubic-bezier(0.4,0,0.2,1)`
                : "none",
              cursor: isDragging ? "grabbing" : "grab",
            }}
          >
            {slides.map((photo, index) => (
              <article
                key={index}
                style={{
                  width: `${100 / slides.length}%`,
                  flexShrink: 0,
                  padding: 20,
                  boxSizing: "border-box",
                }}
              >
                <div
                  className={`life-slide-inner${isMobile && tappedIndex === (index === 0 ? total - 1 : index === slides.length - 1 ? 0 : index - 1) ? " tapped" : ""}`}
                  style={{
                    borderRadius: 28,
                    overflow: "hidden",
                    background: "#0A0F2C",
                    minHeight: 520,
                    position: "relative",
                    boxShadow: "0 14px 40px rgba(15,23,42,0.18)",
                  }}
                >
                  <div
                    style={{ position: "relative", width: "100%", height: 520 }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="100vw"
                      style={{ objectFit: "cover", pointerEvents: "none" }}
                      priority={index === 1}
                      draggable={false}
                    />
                  </div>

                  {/* Hint badge — shown when caption is hidden */}
                  <div
                    className="life-hint-badge"
                    style={{
                      position: "absolute",
                      inset: "auto 18px 18px auto",
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.14)",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      backdropFilter: "blur(8px)",
                      zIndex: 3,
                      transition: "opacity 0.3s ease",
                      pointerEvents: "none",
                    }}
                  >
                    {isMobile ? "Tap for story" : "Hover for story"}
                  </div>

                  {/* Caption overlay — hover on desktop, tap on mobile */}
                  <div
                    className="life-caption-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "flex-end",
                      background:
                        "linear-gradient(180deg, rgba(10,15,44,0.02) 0%, rgba(10,15,44,0.35) 45%, rgba(10,15,44,0.94) 100%)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      zIndex: 2,
                    }}
                  >
                    <div style={{ padding: 28, color: "#fff", width: "100%" }}>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "#A78BFA",
                          marginBottom: 8,
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {photo.title}
                      </div>
                      <p
                        style={{
                          fontSize: 15,
                          lineHeight: 1.7,
                          color: "rgba(255,255,255,0.86)",
                          fontFamily: "var(--font-sans)",
                          maxWidth: 780,
                          margin: 0,
                        }}
                      >
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Prev arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
              resetAutoplay();
            }}
            aria-label="Previous photo"
            style={{
              position: "absolute",
              left: 28,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.32)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.18)")
            }
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
              resetAutoplay();
            }}
            aria-label="Next photo"
            style={{
              position: "absolute",
              right: 28,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.32)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.18)")
            }
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18l6-6-6-6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dot indicators */}
          <div
            style={{
              position: "absolute",
              bottom: 36,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(i + 1);
                  resetAutoplay();
                }}
                aria-label={`Go to photo ${i + 1}`}
                style={{
                  width: realIndex === i ? 28 : 8,
                  height: 8,
                  borderRadius: 999,
                  background:
                    realIndex === i ? "#A78BFA" : "rgba(255,255,255,0.4)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
  /* Desktop hover reveals caption, hides hint */
  @media (hover: hover) and (pointer: fine) {
    .life-slide-inner:hover .life-caption-overlay {
      opacity: 1 !important;
    }
    .life-slide-inner:hover .life-hint-badge {
      opacity: 0 !important;
    }
  }

  /* Mobile tap-active class (applied via JS) */
  .life-slide-inner.tapped .life-caption-overlay {
    opacity: 1 !important;
  }
  .life-slide-inner.tapped .life-hint-badge {
    opacity: 0 !important;
  }

  @media (max-width: 768px) {
    #life-at-advit-hub {
      padding: 72px 0;
    }
  }
`}</style>
    </section>
  );
}
