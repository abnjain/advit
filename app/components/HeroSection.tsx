"use client";

import { BRAND_NAME } from "@/app/lib/brand";

const stats = [
  { num: "12+", label: "Skill Domains" },
  { num: "100+", label: "Live Projects" },
  { num: "4", label: "Global Partners" },
  { num: "1", label: "Unified Ecosystem" },
];

type Partner = {
  name: string;
  domain: string;
  href: string;
  color: string;
  logo?: string;
  logoText: string;
};

const partners: Partner[] = [
  {
    name: "Dangi Innovation Lab",
    domain: "Research and Innovation",
    href: "https://www.dangiinnovationlab.com/",
    color: "#2563EB",
    logoText: "DIL",
  },
  {
    name: "VVDx",
    domain: "Product and Engineering",
    href: "https://vvdx.in",
    color: "#7C3AED",
    logo: "/assets/partners/vvdx-icon.png",
    logoText: "V",
  },
  {
    name: "Dangi Realities",
    domain: "PropTech and Digital",
    href: "https://dangiglobal.com/",
    color: "#06B6D4",
    logoText: "DR",
  },
  {
    name: "Aggrerate AI",
    domain: "AI & Automation",
    href: "https://agripilot.ai/",
    color: "#10B981",
    logoText: "AG",
  },
];

function BrandLogo({ text, color }: { text: string; color: string }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
      <defs>
        <linearGradient
          id={`hero-grad-${text}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="32"
        height="32"
        rx="10"
        fill={`url(#hero-grad-${text})`}
        stroke="rgba(255,255,255,0.35)"
      />
      <text
        x="17"
        y="21"
        textAnchor="middle"
        fill="#FFFFFF"
        style={{
          fontSize: 11,
          fontWeight: 800,
          fontFamily: "var(--font-sans)",
          letterSpacing: "0.04em",
        }}
      >
        {text}
      </text>
    </svg>
  );
}

function BrandChip({ name, domain, href, color, logoText }: Partner) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        minWidth: 280,
        padding: "12px 16px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.04)",
        textDecoration: "none",
        transition:
          "transform 0.2s ease, border-color 0.2s ease, background 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "translateY(-2px)";
        el.style.borderColor = `${color}66`;
        el.style.background = `${color}18`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "rgba(255,255,255,0.12)";
        el.style.background = "rgba(255,255,255,0.04)";
      }}
    >
      {"logo" in arguments[0] && (arguments[0] as Partner).logo ? (
        <span
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            overflow: "hidden",
            flexShrink: 0,
            border: "1px solid rgba(255,255,255,0.35)",
            background: "rgba(255,255,255,0.08)",
          }}
        >
          <img
            src={(arguments[0] as Partner).logo}
            alt={name}
            width={34}
            height={34}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </span>
      ) : (
        <BrandLogo text={logoText} color={color} />
      )}
      <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <span
          style={{
            fontSize: 14,
            lineHeight: 1.2,
            fontWeight: 700,
            color: "#E2E8F0",
            fontFamily: "var(--font-sans)",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color,
            fontFamily: "var(--font-sans)",
          }}
        >
          {domain}
        </span>
      </span>
    </a>
  );
}

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0A0F2C 0%, #131A3D 55%, #0F1F4A 100%)",
        overflow: "hidden",
        paddingTop: 100,
      }}
    >
      {/* Tech grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }}
      />

      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
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
            "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)",
          bottom: -100,
          left: -50,
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
            "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          top: "40%",
          left: "35%",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "5px 5px 30px",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* Eyebrow badge */}
        {/* <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(59,130,246,0.12)",
            border: "1px solid rgba(59,130,246,0.28)",
            color: "#93C5FD",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.08em",
            padding: "6px 16px",
            borderRadius: 100,
            marginBottom: 28,
            fontFamily: "var(--font-sans)",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#22D3EE",
              display: "inline-block",
              animation: "heroPulse 2s infinite",
            }}
          />
          Education-First Innovation Ecosystem
        </div> */}

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#FFFFFF",
            marginBottom: 24,
            maxWidth: 820,
            fontFamily: "var(--font-sans)",
            letterSpacing: "-0.02em",
          }}
        >
          Learn real skills,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #60A5FA, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            build real products,
          </span>{" "}
          get placed.
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "#94A3B8",
            lineHeight: 1.75,
            maxWidth: 620,
            marginBottom: 40,
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
          }}
        >
          {BRAND_NAME} connects learning with real execution — practical training,
          live and freelance projects, placements.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 30,
          }}
        >
          <button
            onClick={() => scrollTo("#domains")}
            style={{
              background: "linear-gradient(135deg, #2563EB, #7C3AED)",
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              transition: "opacity 0.2s, transform 0.2s",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.opacity = "0.88";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.opacity = "1";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
            }}
          >
            Start Learning
            <span style={{ fontSize: 17 }}>→</span>
          </button>
        </div>

        <div
          style={{
            marginTop: 30,
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#22D3EE",
              marginBottom: 22,
              fontFamily: "var(--font-sans)",
            }}
          >
            Global Partnerships
          </div>

          <div
            className="hero-partner-marquee"
            style={{
              display: "flex",
              gap: 14,
              width: "max-content",
              padding: "0 24px",
            }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <BrandChip key={`${partner.name}-${i}`} {...partner} />
            ))}
          </div>
          <div
            className="hero-partner-marquee hero-partner-marquee-alt"
            style={{
              display: "flex",
              gap: 14,
              width: "max-content",
              padding: "14px 24px 0",
            }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <BrandChip key={`${partner.name}-alt-${i}`} {...partner} />
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "clamp(20px, 4vw, 56px)",
            flexWrap: "wrap",
            marginTop: 30,
            justifyContent: "center",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                minWidth: 160,
                textAlign: "center",
                paddingBottom: 12,
              }}
            >
              <div
                style={{
                  fontSize: "clamp(26px, 4vw, 36px)",
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#64748B",
                  fontFamily: "var(--font-sans)",
                  marginTop: 4,
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "rgba(255,255,255,0.3)",
          fontSize: 11,
          fontFamily: "var(--font-sans)",
          letterSpacing: "0.1em",
        }}
      >
        <span>SCROLL</span>
        <div
          style={{
            width: 1,
            height: 32,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
          }}
        />
      </div> */}

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }

        .hero-partner-marquee {
          animation: hero-partner-marquee 28s linear infinite;
        }

        .hero-partner-marquee-alt {
          animation-duration: 32s;
          animation-direction: reverse;
        }

        @keyframes hero-partner-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .hero-partner-marquee {
            animation-duration: 20s;
          }
          .hero-partner-marquee-alt {
            animation-duration: 23s;
          }
        }
      `}</style>
    </section>
  );
}
