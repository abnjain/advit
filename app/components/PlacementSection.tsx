"use client";

const placementStats = [
  { num: "92%", label: "Placement readiness rate" },
  { num: "50+", label: "Hiring & recruiter partners" },
  { num: "4", label: "Countries of opportunity" },
  { num: "1:1", label: "Career mentorship support" },
];

const features = [
  "Dedicated placement & career mentorship",
  "Mock interviews, resume & portfolio prep",
  "Internal hiring fast-track for top students",
  "Access to a global partner & recruiter network",
];

export default function PlacementSection() {
  return (
    <section
      id="placement"
      style={{
        background: "var(--navy)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orb */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          top: -150,
          right: -100,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          bottom: -100,
          left: 50,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="placement-grid"
        >
          {/* Left — content */}
          <div>
            <div
              style={{
                display: "inline-block",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#22D3EE",
                marginBottom: 12,
                fontFamily: "var(--font-sans)",
              }}
            >
              Placement Program
            </div>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 20,
                fontFamily: "var(--font-sans)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              A structured path from
              <br />
              skills to a signed offer
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#94A3B8",
                lineHeight: 1.75,
                marginBottom: 36,
                fontFamily: "var(--font-sans)",
              }}
            >
              Our placement program prepares students with interview practice,
              portfolio building, and direct access to hiring partners — plus an
              internal hiring fast-track for top performers.
            </p>

            {/* Feature list */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginBottom: 40,
              }}
            >
              {features.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "rgba(16,185,129,0.15)",
                      border: "1px solid rgba(16,185,129,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <span style={{ fontSize: 11, color: "#10B981" }}>✓</span>
                  </div>
                  <span
                    style={{
                      fontSize: 14,
                      color: "#CBD5E1",
                      lineHeight: 1.6,
                      fontWeight: 500,
                    }}
                  >
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            <button
              style={{
                background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                padding: "12px 24px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                transition: "opacity 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.opacity = "0.88")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.opacity = "1")
              }
            >
              Explore Placements →
            </button>
          </div>

          {/* Right — stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {placementStats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "28px 24px",
                  textAlign: "center",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(37,99,235,0.1)";
                  el.style.borderColor = "rgba(59,130,246,0.25)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.04)";
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(28px, 3vw, 38px)",
                    fontWeight: 800,
                    color: "#fff",
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "-0.02em",
                    marginBottom: 8,
                    background: "linear-gradient(135deg, #60A5FA, #A78BFA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#64748B",
                    fontFamily: "var(--font-sans)",
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .placement-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
