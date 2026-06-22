"use client";

import { useEffect, useState } from "react";
import { BROCHURE_PDF_URL, BROCHURE_DOWNLOAD_NAME } from "@/app/lib/brand";

export type RenderedPage = {
  src: string; // data URL
  width: number;
  height: number;
};

type PdfPagesState = {
  pages: RenderedPage[];
  loading: boolean;
  error: string | null;
};

// Module-level cache so the PDF is only fetched/rendered once per session,
// even if multiple components (teaser + modal) mount the hook.
let cachedPromise: Promise<RenderedPage[]> | null = null;
let cachedUrl: string | null = null;

const RENDER_SCALE = 2; // ~devicePixelRatio-ish crispness for a flipbook

async function renderPdfToPages(url: string): Promise<RenderedPage[]> {
  // pdfjs-dist must be imported dynamically — it touches `window`/DOM APIs
  // and must never run during Next.js server rendering.
  const pdfjsLib = await import("pdfjs-dist");
  pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf-worker/pdf.worker.min.mjs";

  const loadingTask = pdfjsLib.getDocument({ url });
  const pdf = await loadingTask.promise;

  const pages: RenderedPage[] = [];

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: RENDER_SCALE });

    const canvas = document.createElement("canvas");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const context = canvas.getContext("2d");
    if (!context) continue;

    await page.render({
      canvas,
      canvasContext: context,
      viewport,
    }).promise;

    pages.push({
      src: canvas.toDataURL("image/jpeg", 0.85),
      width: viewport.width,
      height: viewport.height,
    });

    // Free canvas memory as we go.
    canvas.width = 0;
    canvas.height = 0;
  }

  return pages;
}

/**
 * Loads the brochure PDF and renders every page to an image, client-side.
 * Swap the PDF at the given URL any time — no rebuild or asset regeneration
 * needed, this hook always reflects whatever file is currently being served.
 */
export function usePdfPages(url: string): PdfPagesState {
  const [pages, setPages] = useState<RenderedPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setError(null);

    if (cachedUrl !== url) {
      cachedPromise = null;
      cachedUrl = url;
    }

    if (!cachedPromise) {
      cachedPromise = renderPdfToPages(url);
    }

    cachedPromise
      .then((result) => {
        if (!cancelled) {
          setPages(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error("Failed to render brochure PDF:", err);
          setError("Couldn't load the brochure. Please try again shortly.");
          setLoading(false);
          cachedPromise = null; // allow retry on next mount
        }
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { pages, loading, error };
}