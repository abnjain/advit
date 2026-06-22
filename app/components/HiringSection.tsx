"use client";

import { BRAND_NAME } from "@/app/lib/brand";

const hiringPerks = [
  {
    icon: "briefcase",
    title: "Full-time roles",
    desc: `Top performers transition directly into paid full-time positions within the ${BRAND_NAME} team.`,
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    icon: "bolt",
    title: "Real product teams",
    desc: "Work alongside experienced professionals on real products with real impact.",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
  {
    icon: "growth",
    title: "Mentored growth",
    desc: "Continuous mentorship, structured feedback, and a clear path to senior roles.",
    color: "#10B981",
    bg: "#ECFDF5",
    border: "#A7F3D0",
  },
];

function PerkIcon({ type, color }: { type: string; color: string }) {
  if (type === "briefcase") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="7" width="18" height="12" rx="2.5" stroke={color} strokeWidth="1.8" />
        <path d="M9 7V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8V7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3.5 12h17" stroke={color} strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "bolt") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2 5 13h5l-1 9 10-13h-5l-1-7Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20c-2.8 0-5-2.2-5-5 0-3.3 2.9-6.2 8.6-8.7.5-.2 1 .2.9.8-.5 4.1-2.1 7.1-4.7 8.7" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 20c2.2-1 3.8-3.2 4.4-6.1" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function HiringSection() {
  return (
    <section
      id="hiring"
      style={{
        background: "var(--white)",
        padding: "25px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--green)",
              marginBottom: 12,
              fontFamily: "var(--font-sans)",
            }}
          >
            Internal Hiring
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
            Top performers get hired —
            <br />
            directly into {BRAND_NAME}
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
            The best students don&apos;t just graduate — they join us. Standout
            talent is recruited into internal product teams, partner projects,
            and full-time roles.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 48,
          }}
        >
          {hiringPerks.map((perk, i) => (
            <div
              key={i}
              style={{
                background: "var(--off-white)",
                borderRadius: 18,
                padding: "28px 24px",
                border: "1px solid var(--gray-200)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "var(--white)";
                el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.07)";
                el.style.transform = "translateY(-2px)";
                el.style.borderColor = perk.border;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "var(--off-white)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
                el.style.borderColor = "var(--gray-200)";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: perk.bg,
                  border: `1px solid ${perk.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <PerkIcon type={perk.icon} color={perk.color} />
              </div>
              <h4
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: 8,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {perk.title}
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--gray-500)",
                  lineHeight: 1.7,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {perk.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              background: "linear-gradient(135deg, #2563EB, #7C3AED)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              padding: "12px 28px",
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
            See How It Works →
          </button>
        </div>
      </div>
    </section>
  );
}
