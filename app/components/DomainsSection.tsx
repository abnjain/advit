"use client";

const domains = [
  {
    icon: "code",
    title: "IT & Software Development",
    desc: "Programming foundations, OOP, and production-grade software engineering.",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    icon: "web",
    title: "Web Development",
    desc: "Modern responsive websites and full-stack web applications.",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
  {
    icon: "mobile",
    title: "App Development",
    desc: "Cross-platform mobile apps from concept to launch.",
    color: "#06B6D4",
    bg: "#ECFEFF",
    border: "#A5F3FC",
  },
  {
    icon: "cloud",
    title: "Cloud Engineering",
    desc: "Deploy, scale, and manage applications in the cloud.",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    icon: "devops",
    title: "DevOps & Automation",
    desc: "CI/CD, containers, and automated delivery pipelines.",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
  {
    icon: "ai",
    title: "AI & Machine Learning",
    desc: "Build intelligent systems, models, and real AI products.",
    color: "#06B6D4",
    bg: "#ECFEFF",
    border: "#A5F3FC",
  },
  {
    icon: "marketing",
    title: "Digital Marketing",
    desc: "Growth, SEO, ads, and performance marketing.",
    color: "#10B981",
    bg: "#ECFDF5",
    border: "#A7F3D0",
  },
  {
    icon: "content",
    title: "Content Creation",
    desc: "Writing, video, and content that builds audiences.",
    color: "#F59E0B",
    bg: "#FEF3C7",
    border: "#FDE68A",
  },
  {
    icon: "design",
    title: "UI/UX Design",
    desc: "Design intuitive, beautiful product experiences.",
    color: "#EC4899",
    bg: "#FDF2F8",
    border: "#FBCFE8",
  },
  {
    icon: "business",
    title: "Business Technology",
    desc: "Tech that drives real business operations and growth.",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    icon: "system",
    title: "System Design",
    desc: "Architect scalable, reliable, high-performance systems.",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
  {
    icon: "data",
    title: "Data & Databases",
    desc: "Model, store, and work with data at scale.",
    color: "#06B6D4",
    bg: "#ECFEFF",
    border: "#A5F3FC",
  },
];

function DomainIcon({ type, color }: { type: string; color: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "code":
      return (
        <svg {...common}>
          <path d="M8 17 3 12l5-5" />
          <path d="m16 7 5 5-5 5" />
          <path d="m14 4-4 16" />
        </svg>
      );
    case "web":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...common}>
          <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
          <path d="M11 18.5h2" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 18h10a4 4 0 0 0 .4-8A5.2 5.2 0 0 0 7.3 8.5 3.8 3.8 0 0 0 7 18Z" />
        </svg>
      );
    case "devops":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.6 5.4l-1.7 1.7M7.1 16.9l-1.7 1.7M18.6 18.6l-1.7-1.7M7.1 7.1 5.4 5.4" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="M9 9h.01M15 9h.01M9 15h6" />
          <path d="M12 1.8v2.5M12 19.7v2.5M1.8 12h2.5M19.7 12h2.5" />
        </svg>
      );
    case "marketing":
      return (
        <svg {...common}>
          <path d="M4 19h16" />
          <path d="M7 16V9M12 16V5M17 16v-3" />
        </svg>
      );
    case "content":
      return (
        <svg {...common}>
          <path d="M5 4h10l4 4v12H5z" />
          <path d="M15 4v4h4" />
          <path d="M8 13h8M8 17h6" />
        </svg>
      );
    case "design":
      return (
        <svg {...common}>
          <circle cx="7.5" cy="7.5" r="3.5" />
          <circle cx="16.5" cy="7.5" r="3.5" />
          <circle cx="12" cy="15.5" r="3.5" />
          <path d="M8.6 10.6 10.3 13M15.4 10.6 13.7 13" />
        </svg>
      );
    case "business":
      return (
        <svg {...common}>
          <rect x="3.5" y="7" width="17" height="12" rx="2" />
          <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
          <path d="M3.5 11.5h17" />
        </svg>
      );
    case "system":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="1.6" />
          <rect x="3" y="14" width="18" height="6" rx="1.6" />
          <path d="M7 7h.01M7 17h.01" />
        </svg>
      );
    case "data":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function DomainsSection() {
  return (
    <section
      id="domains"
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
            Learning Domains
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
            Industry-ready skills across
            <br />
            the entire tech stack
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--gray-500)",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
              fontFamily: "var(--font-sans)",
            }}
          >
            From first line of code to system design — learn practical,
            job-relevant skills taught the way the industry actually works.
          </p>
        </div>

        {/* Domain grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {domains.map((domain, i) => (
            <div
              key={i}
              style={{
                background: "var(--white)",
                borderRadius: 16,
                padding: "24px",
                border: "1px solid var(--gray-200)",
                transition: "all 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px ${domain.border}`;
                el.style.transform = "translateY(-2px)";
                el.style.borderColor = domain.border;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
                el.style.borderColor = "var(--gray-200)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: domain.bg,
                  border: `1px solid ${domain.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <DomainIcon type={domain.icon} color={domain.color} />
              </div>

              <h4
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: 8,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {domain.title}
              </h4>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--gray-500)",
                  lineHeight: 1.65,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {domain.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
