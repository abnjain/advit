"use client";

const projectTypes = [
  {
    tag: "Live Projects",
    tagColor: "#2563EB",
    tagBg: "#EFF6FF",
    title: "Live Projects",
    desc: "Join real, in-production projects — build features, collaborate in teams, and ship work that real users depend on.",
    features: ["Team collaboration", "Production code", "Real deadlines"],
    featureColor: "#2563EB",
    featureBg: "#EFF6FF",
    featureBorder: "#BFDBFE",
    gradient: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)",
    border: "#BFDBFE",
    accentBorder: "#2563EB",
    icon: "rocket",
  },
  {
    tag: "Freelance",
    tagColor: "#7C3AED",
    tagBg: "#F5F3FF",
    title: "Freelance Business Projects",
    desc: "Take on paid freelance and client work — manage real budgets, deliver to real clients, and build a portfolio that earns.",
    features: ["Real clients", "Earn while learning", "Portfolio building"],
    featureColor: "#7C3AED",
    featureBg: "#F5F3FF",
    featureBorder: "#DDD6FE",
    gradient: "linear-gradient(135deg, #F5F3FF 0%, #ECFEFF 100%)",
    border: "#DDD6FE",
    accentBorder: "#7C3AED",
    icon: "briefcase",
  },
];

function ProjectIcon({
  type,
  color,
}: {
  type: string;
  color: string;
}) {
  if (type === "rocket") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.5 3c3.5.6 6 3.8 6.5 7.3l-4.7 4.7-4.8-4.8L14.5 3Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m9.8 11.8-3.3 3.3M10.8 14.8l-2.3 5.2-2.1-2.1 5.2-2.3Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="18" height="12" rx="2.5" stroke={color} strokeWidth="1.8" />
      <path d="M9 7V5.7C9 4.8 9.7 4 10.7 4h2.6c1 0 1.7.8 1.7 1.7V7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3.5 12h17" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        background: "var(--off-white)",
        padding: "96px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--blue)",
              marginBottom: 12,
              fontFamily: "var(--font-sans)",
            }}
          >
            Real Execution
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "var(--navy)",
              marginBottom: 16,
              fontFamily: "var(--font-sans)",
              letterSpacing: "-0.02em",
            }}
          >
            Learn by building things
            <br />
            that actually ship
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--gray-500)",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Students don&apos;t just study — they build. From internal live
            projects to paid freelance business work, every skill is applied to
            real outcomes.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
          className="projects-grid"
        >
          {projectTypes.map((project, i) => (
            <article
              key={i}
              style={{
                background: "var(--white)",
                borderRadius: 20,
                padding: "36px 32px",
                border: "1px solid var(--gray-200)",
                transition: "all 0.25s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 12px 48px rgba(0,0,0,0.08)";
                el.style.transform = "translateY(-3px)";
                el.style.borderColor = project.border;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
                el.style.borderColor = "var(--gray-200)";
              }}
            >
              {/* Accent line at top */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: project.accentBorder,
                  borderRadius: "20px 20px 0 0",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: project.tagBg,
                  border: `1px solid ${project.featureBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <ProjectIcon type={project.icon} color={project.tagColor} />
              </div>

              {/* Tag */}
              <span
                style={{
                  display: "inline-block",
                  background: project.tagBg,
                  color: project.tagColor,
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: 6,
                  marginBottom: 12,
                  fontFamily: "var(--font-sans)",
                  border: `1px solid ${project.featureBorder}`,
                }}
              >
                {project.tag}
              </span>

              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "var(--navy)",
                  marginBottom: 12,
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "-0.01em",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--gray-500)",
                  lineHeight: 1.7,
                  marginBottom: 28,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {project.desc}
              </p>

              {/* Feature chips */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {project.features.map((feat, j) => (
                  <span
                    key={j}
                    style={{
                      background: project.featureBg,
                      color: project.featureColor,
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontFamily: "var(--font-sans)",
                      border: `1px solid ${project.featureBorder}`,
                    }}
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Product studio callout */}
        <div
          style={{
            marginTop: 20,
            background: "var(--navy)",
            borderRadius: 20,
            padding: "40px 36px",
            border: "1px solid rgba(59,130,246,0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Orb */}
          <div
            style={{
              position: "absolute",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
              top: -100,
              right: 0,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 32,
              flexWrap: "wrap",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ flex: 1, minWidth: 280 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  color: "#93C5FD",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "4px 12px",
                  borderRadius: 6,
                  marginBottom: 16,
                  fontFamily: "var(--font-sans)",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#22D3EE",
                  }}
                />
                Internal Product Development
              </div>
              <h3
                style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 12,
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                Students build real products,
                <br />
                not just demos
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#94A3B8",
                  lineHeight: 1.7,
                  maxWidth: 480,
                }}
              >
                Top students join internal product teams to design, build, and
                ship software the way real companies do — from idea to launch.
              </p>
            </div>

            {/* Steps */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minWidth: 240,
              }}
            >
              {[
                {
                  step: "01",
                  title: "Design & Prototype",
                  desc: "Turn ideas into product specs, flows, and UI.",
                  color: "#2563EB",
                },
                {
                  step: "02",
                  title: "Build & Ship",
                  desc: "Write production code and release real features.",
                  color: "#7C3AED",
                },
                {
                  step: "03",
                  title: "Scale & Improve",
                  desc: "Measure, iterate, and grow real products.",
                  color: "#06B6D4",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                      background: `${s.color}20`,
                      border: `1px solid ${s.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      fontWeight: 700,
                      color: s.color,
                      fontFamily: "var(--font-sans)",
                      flexShrink: 0,
                    }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#E2E8F0",
                        fontFamily: "var(--font-sans)",
                        marginBottom: 2,
                      }}
                    >
                      {s.title}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#64748B",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
