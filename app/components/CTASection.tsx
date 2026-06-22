"use client";

import { BRAND_NAME, BRAND_EMAIL_HELLO, BRAND_URL, BRAND_URL_DISPLAY } from "@/app/lib/brand";

const audiences = [
  {
    icon: "student",
    title: "For Students",
    desc: "Learn real skills, work on live projects, and get placed into industry roles.",
    cta: "Start Learning",
    href: "/contact?for=student&source=cta-students",
    gradient: "linear-gradient(135deg, #2563EB, #7C3AED)",
    border: "rgba(59,130,246,0.3)",
    bg: "rgba(37,99,235,0.06)",
  },
  {
    icon: "business",
    title: "For Businesses",
    desc: "Hire trained, industry-ready talent or get digital solutions built.",
    cta: "Work With Us",
    href: "/contact?for=business&source=cta-businesses",
    gradient: "linear-gradient(135deg, #7C3AED, #06B6D4)",
    border: "rgba(124,58,237,0.3)",
    bg: "rgba(124,58,237,0.06)",
  },
  {
    icon: "partner",
    title: "For Partners",
    desc: "Collaborate on projects, hiring, and global innovation initiatives.",
    cta: "Become a Partner",
    href: "/contact?for=partner&source=cta-partners",
    gradient: "linear-gradient(135deg, #06B6D4, #10B981)",
    border: "rgba(6,182,212,0.3)",
    bg: "rgba(6,182,212,0.06)",
  },
];

function AudienceIcon({ type }: { type: string }) {
  if (type === "student") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9.5 12 5l9 4.5L12 14 3 9.5Z" stroke="#BFDBFE" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M7 11.5v3.2c0 1.4 2.2 2.8 5 2.8s5-1.4 5-2.8v-3.2" stroke="#BFDBFE" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "business") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="16" height="13" rx="2" stroke="#DDD6FE" strokeWidth="1.8" />
        <path d="M9 6V4.8C9 4 9.7 3.4 10.5 3.4h3c.8 0 1.5.6 1.5 1.4V6" stroke="#DDD6FE" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4.5 11.5h15" stroke="#DDD6FE" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="9" r="2.2" stroke="#A5F3FC" strokeWidth="1.8" />
      <circle cx="16" cy="9" r="2.2" stroke="#A5F3FC" strokeWidth="1.8" />
      <path d="M4.5 18c.8-2.3 2.4-3.6 3.9-3.6S11.6 15.7 12.4 18m0 0c.8-2.3 2.4-3.6 3.9-3.6S19.5 15.7 20.3 18" stroke="#A5F3FC" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function CTASection() {
  return (
    <section
      id="cta"
      style={{
        background:
          "linear-gradient(160deg, #0A0F2C 0%, #0F1060 50%, #0A2240 100%)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orbs */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 70%)",
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)",
          bottom: -50,
          right: 100,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)",
          bottom: -50,
          left: 100,
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
        {/* Headline */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(167,139,250,0.25)",
              color: "#A78BFA",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              padding: "6px 16px",
              borderRadius: 100,
              marginBottom: 24,
              fontFamily: "var(--font-sans)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m12 3 2.2 6.8H21l-5.4 3.9 2.1 6.8L12 16.5 6.3 20.5l2.1-6.8L3 9.8h6.8L12 3Z" stroke="#A78BFA" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            Join The Ecosystem
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
              fontFamily: "var(--font-sans)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            One ecosystem for students,
            <br />
            businesses, and partners
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "#94A3B8",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Whether you want to learn real skills, hire industry-ready talent,
            or build something together — {BRAND_NAME} is where it happens.
          </p>
        </div>

        {/* Audience cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 48,
          }}
        >
          {audiences.map((aud, i) => (
            <div
              key={i}
              style={{
                background: aud.bg,
                borderRadius: 20,
                padding: "36px 28px",
                border: `1px solid ${aud.border}`,
                transition: "all 0.25s ease",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.background = aud.bg.replace("0.06", "0.1");
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.background = aud.bg;
              }}
            >
              <div style={{ marginBottom: 16, lineHeight: 0 }}>
                <AudienceIcon type={aud.icon} />
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 12,
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "-0.01em",
                }}
              >
                {aud.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#94A3B8",
                  lineHeight: 1.7,
                  marginBottom: 28,
                  fontFamily: "var(--font-sans)",
                  flex: 1,
                }}
              >
                {aud.desc}
              </p>
              <a
                href={aud.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: aud.gradient,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 700,
                  padding: "12px 24px",
                  borderRadius: 12,
                  fontFamily: "var(--font-sans)",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
                }
              >
                {aud.cta}
                <span style={{ fontSize: 16 }}>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Contact line */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: 14,
              color: "#475569",
              fontFamily: "var(--font-sans)",
            }}
          >
            Questions?{" "}
            <a
              href={`mailto:${BRAND_EMAIL_HELLO}`}
              style={{
                color: "#60A5FA",
                fontWeight: 600,
                textDecoration: "none",
                borderBottom: "1px solid rgba(96,165,250,0.3)",
              }}
            >
              {BRAND_EMAIL_HELLO}
            </a>
            {" · "}
            <a
              href={BRAND_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#60A5FA",
                fontWeight: 600,
                textDecoration: "none",
                borderBottom: "1px solid rgba(96,165,250,0.3)",
              }}
            >
              {BRAND_URL_DISPLAY}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
