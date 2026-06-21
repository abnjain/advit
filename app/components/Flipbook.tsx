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
            objectFit: "cover",
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
>(function Flipbook({ pages, onFlip, className = "", width = 420, height = 560 }, ref) {

  return (
    <HTMLFlipBook
      ref={ref}
      width={width}
      height={height}
      size="stretch"
      startPage={0}
      minWidth={240}
      maxWidth={640}
      minHeight={320}
      maxHeight={860}
      maxShadowOpacity={0.4}
      showCover={true}
      mobileScrollSupport={true}
      drawShadow={true}
      flippingTime={650}
      usePortrait={true}
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
