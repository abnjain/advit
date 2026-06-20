"use client";

import Image from "next/image";

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
    caption: "Open conversations, active listening, and shared problem-solving.",
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
    caption: "A real environment for learning, building, and meeting collaborators.",
  },
];

export default function LifeAtAdvitHubSection() {
  const loopedPhotos = [...photos, ...photos];

  return (
    <section
      id="life-at-advit-hub"
      style={{
        padding: "96px 0",
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
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

        <div
          style={{
            position: "relative",
            borderRadius: 28,
            border: "1px solid rgba(15, 23, 42, 0.08)",
            background: "rgba(255,255,255,0.8)",
            boxShadow: "0 24px 60px rgba(15,23,42,0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top left, rgba(124,58,237,0.08), transparent 45%), radial-gradient(circle at bottom right, rgba(37,99,235,0.08), transparent 40%)",
              pointerEvents: "none",
            }}
          />

          <div
            className="life-carousel-track"
            style={{
              display: "flex",
              width: "200%",
              willChange: "transform",
            }}
          >
            {loopedPhotos.map((photo, index) => (
              <article
                key={`${photo.src}-${index}`}
                style={{
                  width: "50%",
                  flexShrink: 0,
                  padding: 20,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    borderRadius: 28,
                    overflow: "hidden",
                    background: "#0A0F2C",
                    minHeight: 520,
                    position: "relative",
                    boxShadow: "0 14px 40px rgba(15,23,42,0.18)",
                  }}
                >
                  <div style={{ position: "relative", width: "100%", height: 520 }}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="100vw"
                      style={{ objectFit: "cover" }}
                      priority={index === 0}
                    />
                  </div>

                  <div
                    className="life-carousel-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "flex-end",
                      background:
                        "linear-gradient(180deg, rgba(10,15,44,0.02) 0%, rgba(10,15,44,0.35) 45%, rgba(10,15,44,0.94) 100%)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <div style={{ padding: 24, color: "#fff", width: "100%" }}>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "#A78BFA",
                          marginBottom: 10,
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
                        }}
                      >
                        {photo.caption}
                      </p>
                    </div>
                  </div>

                  <div
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
                    }}
                  >
                    Hover for story
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .life-carousel-track {
          animation: life-carousel-slide 20s linear infinite;
        }

        .life-carousel-track:hover {
          animation-play-state: paused;
        }

        .life-carousel-track:hover .life-carousel-overlay {
          opacity: 1;
        }

        @keyframes life-carousel-slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          #life-at-advit-hub {
            padding: 72px 0;
          }

          .life-carousel-track {
            animation-duration: 20s;
          }

          .life-carousel-track > article {
            width: 50%;
            padding: 12px;
          }

          .life-carousel-track > article > div {
            min-height: 360px;
          }

          .life-carousel-track > article > div > div:first-child {
            height: 360px;
          }
        }
      `}</style>
    </section>
  );
}