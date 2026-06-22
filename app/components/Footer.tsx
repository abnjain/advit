"use client";

import {
  BRAND_LOGO_PATH,
  BRAND_LOGO_ALT,
  BRAND_NAME,
  BRAND_EMAIL_CONTACT,
  BRAND_URL,
  BRAND_URL_DISPLAY,
  BRAND_COPYRIGHT,
} from "@/app/lib/brand";

const footerLinks = {
  Learn: [
    { label: "Domains", href: "#domains" },
    { label: "Student Journey", href: "#journey" },
    { label: "Placements", href: "#placement" },
  ],
  Build: [
    { label: "Live Projects", href: "#projects" },
    { label: "Products", href: "#product" },
    { label: "Events", href: "#events" },
  ],
  Company: [
    { label: "Global Partners", href: "#partners" },
    { label: "Internal Hiring", href: "#hiring" },
    { label: "Contact", href: "/contact" },
  ],
};

const locations = ["USA", "India", "Nepal"];

function LocationMarker() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2" stroke="#64748B" strokeWidth="1.8" />
    </svg>
  );
}

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#060910",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 0 28px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 56,
          }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <img
                src={BRAND_LOGO_PATH}
                alt={BRAND_LOGO_ALT}
                style={{
                  height: 32,
                  width: "auto",
                  flexShrink: 0,
                  borderRadius: 6,
                }}
              />
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "-0.02em",
                }}
              >
                {BRAND_NAME}
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "#475569",
                lineHeight: 1.75,
                maxWidth: 280,
                fontFamily: "var(--font-sans)",
              }}
            >
              An education-first innovation ecosystem where students learn real
              skills, build real products, and grow into industry-ready
              professionals.
            </p>
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 20,
                flexWrap: "wrap",
              }}
            >
              {locations.map((loc, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 11,
                    color: "#475569",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    padding: "3px 9px",
                    borderRadius: 6,
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <LocationMarker />
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#334155",
                  marginBottom: 16,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {category}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {links.map((link) =>
                  link.href.startsWith("#") ? (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#475569",
                        fontSize: 13,
                        fontWeight: 500,
                        fontFamily: "var(--font-sans)",
                        textAlign: "left",
                        padding: 0,
                        cursor: "pointer",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLButtonElement).style.color = "#94A3B8")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLButtonElement).style.color = "#475569")
                      }
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      style={{
                        color: "#475569",
                        fontSize: 13,
                        fontWeight: 500,
                        fontFamily: "var(--font-sans)",
                        textAlign: "left",
                        padding: 0,
                        cursor: "pointer",
                        transition: "color 0.2s",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLAnchorElement).style.color = "#94A3B8")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLAnchorElement).style.color = "#475569")
                      }
                    >
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.05)",
            marginBottom: 24,
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: "#334155",
              fontFamily: "var(--font-sans)",
            }}
          >
            {BRAND_COPYRIGHT}
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={`mailto:${BRAND_EMAIL_CONTACT}`}
              style={{
                fontSize: 12,
                color: "#334155",
                fontFamily: "var(--font-sans)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#60A5FA")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#334155")
              }
            >
              {BRAND_EMAIL_CONTACT}
            </a>
            <a
              href={BRAND_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                color: "#334155",
                fontFamily: "var(--font-sans)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#60A5FA")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#334155")
              }
            >
              {BRAND_URL_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > *:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
