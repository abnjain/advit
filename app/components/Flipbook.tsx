"use client";

import Image from "next/image";
import React, { forwardRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { brochurePages } from "./brochureData";

type FlipbookProps = {
  onFlip?: (index: number) => void;
  className?: string;
  width?: number;
  height?: number;
};

const Page = forwardRef<HTMLDivElement, { src: string; index: number }>(
  ({ src, index }, ref) => {
    return (
      <div className="brochure-page" ref={ref}>
        <Image
          src={src}
          alt={`Brochure page ${index + 1}`}
          fill
          sizes="(max-width: 768px) 90vw, 480px"
          style={{ objectFit: "cover" }}
          priority={index < 2}
          draggable={false}
        />
      </div>
    );
  },
);
Page.displayName = "Page";

const Flipbook = forwardRef<
  { pageFlip: () => { flipNext: () => void; flipPrev: () => void; flip: (n: number) => void } },
  FlipbookProps
>(function Flipbook({ onFlip, className = "", width = 420, height = 560 }, ref) {
  const [, setActive] = useState(0);

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
        setActive(e.data);
        onFlip?.(e.data);
      }}
    >
      {brochurePages.map((page, i) => (
        <Page key={page.src} src={page.src} index={i} />
      ))}
    </HTMLFlipBook>
  );
});

export default Flipbook;
