"use client";

import { useEffect, useRef, useState } from "react";
import Flipbook from "./Flipbook";
import { BRAND_NAME } from "@/app/lib/brand";
import { usePdfPages } from "./usePdfPages";

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

type BrochureViewerProps = {
  pdfUrl: string;
  downloadName?: string;
  open: boolean;
  onClose: () => void;
};

export default function BrochureViewer({
  pdfUrl,
  downloadName = "brochure.pdf",
  open,
  onClose,
}: BrochureViewerProps) {
  const [page, setPage] = useState(0);
  const flipRef = useRef<FlipBookRef>(null);
  const { pages, loading } = usePdfPages(pdfUrl);
  const totalPages = pages.length;
  const visiblePage = Math.min(page + 1, Math.max(totalPages, 1));

  // Detect if the PDF is predominantly portrait
  const portraitCount = pages.filter((p) => p.height >= p.width).length;
  const isPortrait = pages.length > 0 && portraitCount > pages.length / 2;

  const goPrev = () => {
    flipRef.current?.pageFlip().flipPrev();
  };

  const goNext = () => {
    flipRef.current?.pageFlip().flipNext();
  };

  const goToPage = (i: number) => {
    flipRef.current?.pageFlip().flip(i);
  };

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${BRAND_NAME} brochure viewer`}
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
          {BRAND_NAME} Brochure · Page {visiblePage} of {totalPages || "--"}
        </span>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a
            href={pdfUrl}
            download={downloadName}
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

      {/* Viewer stage */}
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={goPrev}
          aria-label="Previous page"
          className="brochure-nav-arrow"
          style={navArrowStyle}
          disabled={loading || pages.length === 0}
        >
          ‹
        </button>

        <div style={{ width: "100%", maxWidth: 1500, position: "relative" }}>
          {loading && (
            <div
              style={{
                textAlign: "center",
                color: "rgba(255,255,255,0.4)",
                fontSize: 14,
                fontFamily: "var(--font-sans)",
                padding: 80,
              }}
            >
              Loading brochure…
            </div>
          )}
          {!loading && pages.length > 0 && (
            <Flipbook
              ref={flipRef}
              pages={pages}
              onFlip={setPage}
              width={isPortrait ? 320 : 380}
              height={isPortrait ? 450 : 520}
              showTwoPages={isPortrait}
              fixedSize={isPortrait}
            />
          )}
        </div>

        <button
          onClick={goNext}
          aria-label="Next page"
          className="brochure-nav-arrow"
          style={navArrowStyle}
          disabled={loading || pages.length === 0}
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
        {pages.map((p, i) => {
          const thumbH = 48;
          const thumbW = Math.round(thumbH * (p.width / p.height));
          return (
            <button
              key={`${i}-${p.src}`}
              onClick={() => goToPage(i)}
              aria-label={`Go to page ${i + 1}`}
              style={{
                flexShrink: 0,
                width: thumbW,
                height: thumbH,
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
          );
        })}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .brochure-nav-arrow { display: none !important; }
        }
      `}</style>
    </div>
  );
}
