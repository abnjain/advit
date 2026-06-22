"use client";

import { useState, useEffect } from "react";
import { BRAND_LOGO_PATH, BRAND_LOGO_ALT, BRAND_NAME } from "@/app/lib/brand";

const navLinks = [
  { label: "Journey", href: "#journey" },
  { label: "Placements", href: "#placement" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(10,15,44,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(59,130,246,0.12)"
            : "1px solid transparent",
          padding: scrolled ? "12px 0" : "20px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
            }}
          >
            <img
              src={BRAND_LOGO_PATH}
              alt={BRAND_LOGO_ALT}
              style={{
                height: 34,
                width: "auto",
                flexShrink: 0,
                borderRadius: 6,
              }}
            />
            <span
              style={{
                fontSize: 17,
                fontWeight: 800,
                color: "#fff",
                fontFamily: "var(--font-sans)",
                letterSpacing: "-0.02em",
              }}
            >
              {BRAND_NAME}
            </span>
          </a>

          {/* Desktop nav links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "var(--font-sans)",
                  padding: "8px 14px",
                  borderRadius: 8,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#fff";
                  (e.target as HTMLButtonElement).style.background =
                    "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.color =
                    "rgba(255,255,255,0.75)";
                  (e.target as HTMLButtonElement).style.background = "none";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={() => {
                window.location.href = "/contact?source=navbar-join-now";
              }}
              style={{
                background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                color: "#fff",
                fontSize: 13,
                fontWeight: 700,
                padding: "9px 20px",
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                transition: "opacity 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLButtonElement).style.opacity = "0.88")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLButtonElement).style.opacity = "1")
              }
              className="desktop-nav"
            >
              Join Now
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-menu-btn"
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: 22,
                cursor: "pointer",
                padding: 6,
                display: "none",
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              background: "rgba(10,15,44,0.97)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(59,130,246,0.15)",
              padding: "16px 24px 20px",
            }}
            className="mobile-nav"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  display: "block",
                  width: "100%",
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 15,
                  fontWeight: 500,
                  fontFamily: "var(--font-sans)",
                  padding: "12px 0",
                  textAlign: "left",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                window.location.href = "/contact?source=navbar-mobile-join-now";
              }}
              style={{
                display: "block",
                width: "100%",
                background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                padding: "12px 0",
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                marginTop: 12,
              }}
            >
              Join Now
            </button>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-nav { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
