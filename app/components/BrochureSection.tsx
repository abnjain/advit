"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BROCHURE_DOWNLOAD_NAME, BROCHURE_PDF_URL } from "./brochureData";
import BrochureModal from "./BrochureModal";
import { usePdfPages } from "./usePdfPages";

export default function BrochureSection() {
  const [open, setOpen] = useState(false);
  const { pages } = usePdfPages(BROCHURE_PDF_URL);

  const previewStack = [
    { src: pages[6]?.src, rotate: -8, z: 1, top: 36, left: 6 },
    { src: pages[4]?.src, rotate: 5, z: 2, top: 14, left: 26 },
    { src: pages[0]?.src, rotate: -2, z: 3, top: 0, left: 46 },
  ].filter(
    (page): page is { src: string; rotate: number; z: number; top: number; left: number } =>
      Boolean(page.src),
  );

  return (
    <section
      id="brochure"
      style={{
        background: "var(--navy)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orbs to match site language */}
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)",
          top: -180,
          left: -120,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          bottom: -140,
          right: -80,
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
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "center",
        }}
        className="brochure-teaser-grid"
      >
        {/* Left: copy */}
        <div>
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#93C5FD",
              marginBottom: 12,
              fontFamily: "var(--font-sans)",
            }}
          >
            The Brochure
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
              fontFamily: "var(--font-sans)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Flip through what
            <br />
            we actually offer
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#94A3B8",
              lineHeight: 1.75,
              maxWidth: 460,
              marginBottom: 32,
              fontFamily: "var(--font-sans)",
            }}
          >
            Every service, every project, every reason to work with us — laid
            out page by page. Open it like a real brochure, turn the pages,
            and download a copy whenever you need one.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button
              onClick={() => setOpen(true)}
              style={{
                background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                padding: "13px 26px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                transition: "opacity 0.2s, transform 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.88";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
              }}
            >
              Open Full View
              <span style={{ fontSize: 16 }}>↗</span>
            </button>

            <a
              href={BROCHURE_PDF_URL}
              download={BROCHURE_DOWNLOAD_NAME}
              style={{
                background: "rgba(255,255,255,0.07)",
                color: "#E2E8F0",
                fontSize: 14,
                fontWeight: 600,
                padding: "13px 26px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.15)",
                fontFamily: "var(--font-sans)",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)";
              }}
            >
              Download PDF
              <span style={{ fontSize: 14 }}>⬇</span>
            </a>
          </div>

          <Link
            href="/brochure"
            style={{
              display: "inline-block",
              marginTop: 20,
              fontSize: 13,
              color: "#60A5FA",
              fontWeight: 600,
              fontFamily: "var(--font-sans)",
              borderBottom: "1px solid rgba(96,165,250,0.3)",
            }}
          >
            Or view it on its own page →
          </Link>
        </div>

        {/* Right: stacked preview, click to open modal */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open brochure full view"
          style={{
            position: "relative",
            height: 380,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          className="brochure-preview-stack"
        >
          {previewStack.map((p, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: p.top,
                left: `${p.left}%`,
                width: "48%",
                aspectRatio: "3 / 4",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
                border: "1px solid rgba(255,255,255,0.1)",
                transform: `rotate(${p.rotate}deg)`,
                zIndex: p.z,
                transition: "transform 0.35s ease",
              }}
              className="brochure-stack-item"
            >
              <Image
                src={p.src}
                alt="Brochure preview page"
                fill
                sizes="320px"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}

          <div
            style={{
              position: "absolute",
              bottom: -4,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 4,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(10,15,44,0.85)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 700,
              padding: "8px 16px",
              borderRadius: 100,
              fontFamily: "var(--font-sans)",
              backdropFilter: "blur(6px)",
              whiteSpace: "nowrap",
            }}
          >
            Tap to flip through →
          </div>
        </button>
      </div>

      {open && <BrochureModal onClose={() => setOpen(false)} />}

      <style>{`
        .brochure-preview-stack:hover .brochure-stack-item {
          transform: translateY(-6px) rotate(0deg) !important;
        }
        @media (max-width: 860px) {
          .brochure-teaser-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .brochure-preview-stack { order: -1; height: 320px !important; }
        }
      `}</style>
    </section>
  );
}
