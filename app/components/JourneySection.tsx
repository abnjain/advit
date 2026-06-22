"use client";

const steps = [
  {
    num: "01",
    label: "Learn",
    title: "Learn",
    desc: "Master practical, industry-relevant skills through structured training and mentorship.",
    gradient: "linear-gradient(135deg, #2563EB, #3B82F6)",
    accent: "#2563EB",
    items: ["Structured curriculum", "Industry mentors", "Hands-on labs", "Live Q&A sessions"],
  },
  {
    num: "02",
    label: "Build",
    title: "Build",
    desc: "Apply skills on live projects, freelance work, and internal product builds.",
    gradient: "linear-gradient(135deg, #7C3AED, #8B5CF6)",
    accent: "#7C3AED",
    items: ["Live project teams", "Freelance client work", "Internal products", "Real codebases"],
  },
  {
    num: "03",
    label: "Work",
    title: "Work",
    desc: "Gain real experience on client and business projects that actually ship.",
    gradient: "linear-gradient(135deg, #06B6D4, #22D3EE)",
    accent: "#06B6D4",
    items: ["Client delivery", "Business projects", "Revenue-generating work", "Professional workflow"],
  },
  {
    num: "04",
    label: "Get Placed",
    title: "Get Placed",
    desc: "Move into placements, internal hiring, or launch your own venture.",
    gradient: "linear-gradient(135deg, #10B981, #34D399)",
    accent: "#10B981",
    items: ["Placement drives", "Internal hiring", "Partner companies", "Startup opportunities"],
  },
];

export default function JourneySection() {
  return (
    <section
      id="journey"
      style={{
        background: "var(--white)",
        padding: "96px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--violet)",
              marginBottom: 12,
              fontFamily: "var(--font-sans)",
            }}
          >
            The Student Journey
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
            Learn. Build. Work. Get placed.
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
            A clear path from your first skill to a real career — designed to
            turn students into industry-ready professionals.
          </p>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20,
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <article
              key={i}
              style={{
                background: "var(--off-white)",
                borderRadius: 20,
                padding: "32px 28px",
                border: "1px solid var(--gray-200)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "var(--white)";
                el.style.boxShadow = `0 8px 40px rgba(0,0,0,0.08)`;
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "var(--off-white)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Background number */}
              <div
                style={{
                  position: "absolute",
                  top: -10,
                  right: -10,
                  fontSize: 90,
                  fontWeight: 800,
                  color: "rgba(0,0,0,0.035)",
                  fontFamily: "var(--font-sans)",
                  lineHeight: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {step.num}
              </div>

              {/* Circle */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: step.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: "var(--font-sans)",
                  marginBottom: 20,
                  letterSpacing: "-0.02em",
                }}
              >
                {step.num}
              </div>

              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "var(--navy)",
                  marginBottom: 10,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--gray-500)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {step.desc}
              </p>

              {/* Items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {step.items.map((item, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 13,
                      color: "var(--gray-600)",
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: step.accent,
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
