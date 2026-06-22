"use client";

import React, { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import type { RenderedPage } from "./usePdfPages";

type FlipbookProps = {
  pages: RenderedPage[];
  onFlip?: (index: number) => void;
  className?: string;
  width?: number;
  height?: number;
  showTwoPages?: boolean;
  fixedSize?: boolean;
};

const Page = forwardRef<HTMLDivElement, { src: string; index: number }>(
  ({ src, index }, ref) => {
    return (
      <div className="brochure-page" ref={ref}>
        <img
          src={src}
          alt={`Brochure page ${index + 1}`}
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </div>
    );
  },
);
Page.displayName = "Page";

const Flipbook = forwardRef<
  { pageFlip: () => { flipNext: () => void; flipPrev: () => void; flip: (n: number) => void } },
  FlipbookProps
>(function Flipbook({ pages, onFlip, className = "", width = 420, height = 560, showTwoPages = false, fixedSize = false }, ref) {
  // Detect if the PDF is predominantly landscape
  const landscapeCount = pages.filter((p) => p.width > p.height).length;
  const isLandscape = pages.length > 0 && landscapeCount > pages.length / 2;
  // Use 2-page spread mode when showTwoPages is requested (portrait pages side by side)
  const useSpread = showTwoPages || isLandscape;
  // For showTwoPages (portrait spread), keep width > height.
  // For isLandscape (landscape spread), swap so two landscape pages stack vertically.
  const fbWidth = isLandscape ? height : width;
  const fbHeight = isLandscape ? width : height;

  return (
    <HTMLFlipBook
      ref={ref}
      width={fbWidth}
      height={fbHeight}
      size={fixedSize ? "fixed" : "stretch"}
      startPage={0}
      minWidth={240}
      maxWidth={1200}
      minHeight={100}
      maxHeight={1200}
      maxShadowOpacity={0.4}
      showCover={true}
      mobileScrollSupport={true}
      drawShadow={true}
      flippingTime={650}
      usePortrait={!useSpread}
      startZIndex={10}
      autoSize={true}
      clickEventForward={true}
      useMouseEvents={true}
      swipeDistance={20}
      showPageCorners={true}
      disableFlipByClick={false}
      className={className}
      style={{}}
      onFlip={(e: { data: number }) => {
        onFlip?.(e.data);
      }}
    >
      {pages.map((page, i) => (
        <Page key={`${i}-${page.src}`} src={page.src} index={i} />
      ))}
    </HTMLFlipBook>
  );
});

export default Flipbook;
