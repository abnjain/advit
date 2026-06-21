"use client";

import { useEffect, useRef, useState } from "react";
import { BROCHURE_DOWNLOAD_NAME, BROCHURE_PDF_URL, brochurePages } from "./brochureData";
import Flipbook from "./Flipbook";

type FlipBookRef = {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
    flip: (n: number) => void;
  };
};

const navArrowStyle: React.CSSProperties = {
  flexShrink: 0,
  width: 44,
  height: 44,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "#fff",
  fontSize: 24,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 12px",
};

export default function BrochureModal({ onClose }: { onClose: () => void }) {
  const [page, setPage] = useState(0);
  const flipRef = useRef<FlipBookRef>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") flipRef.current?.pageFlip().flipNext();
      if (e.key === "ArrowLeft") flipRef.current?.pageFlip().flipPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Advit Hub brochure viewer"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background:
          "radial-gradient(circle at 50% 30%, rgba(28,38,84,0.95) 0%, rgba(6,9,16,0.98) 70%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 28px",
          fontFamily: "var(--font-sans)",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontWeight: 600 }}>
          {brochurePages[page]?.label || "Advit Hub Brochure"} · Page {page + 1} of{" "}
          {brochurePages.length}
        </span>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a
            href={BROCHURE_PDF_URL}
            download={BROCHURE_DOWNLOAD_NAME}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              padding: "8px 16px",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            Download PDF ⬇
          </a>
          <button
            onClick={onClose}
            aria-label="Close brochure viewer"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff",
              fontSize: 16,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Flipbook stage */}
      <div
        style={{
          width: "100%",
          maxWidth: 920,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => flipRef.current?.pageFlip().flipPrev()}
          aria-label="Previous page"
          className="brochure-nav-arrow"
          style={navArrowStyle}
        >
          ‹
        </button>

        <div style={{ width: "100%", maxWidth: 760 }}>
          <Flipbook ref={flipRef} onFlip={setPage} width={380} height={520} />
        </div>

        <button
          onClick={() => flipRef.current?.pageFlip().flipNext()}
          aria-label="Next page"
          className="brochure-nav-arrow"
          style={navArrowStyle}
        >
          ›
        </button>
      </div>

      {/* Thumbnail rail */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 24,
          overflowX: "auto",
          maxWidth: "100%",
          padding: "4px 8px",
        }}
      >
        {brochurePages.map((p, i) => (
          <button
            key={p.src}
            onClick={() => flipRef.current?.pageFlip().flip(i)}
            aria-label={`Go to page ${i + 1}: ${p.label}`}
            style={{
              flexShrink: 0,
              width: 40,
              height: 53,
              borderRadius: 6,
              overflow: "hidden",
              border:
                page === i ? "2px solid #60A5FA" : "1px solid rgba(255,255,255,0.18)",
              opacity: page === i ? 1 : 0.55,
              cursor: "pointer",
              padding: 0,
              backgroundImage: `url(${p.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 0.2s, border-color 0.2s",
            }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .brochure-nav-arrow { display: none !important; }
        }
      `}</style>
    </div>
  );
}
