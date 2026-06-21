export const BROCHURE_PDF_URL = "/assets/brochure/advit-hub-brochure.pdf";
export const BROCHURE_DOWNLOAD_NAME = "Advit-Hub-Brochure.pdf";

export type BrochurePage = {
  src: string;
  label: string;
};

// Rendered from /assets/brochure/advit-hub-brochure.pdf — keep in sync if the PDF changes.
export const brochurePages: BrochurePage[] = [
  { src: "/assets/brochure/pages/page-01.jpg", label: "Cover" },
  { src: "/assets/brochure/pages/page-02.jpg", label: "About" },
  { src: "/assets/brochure/pages/page-03.jpg", label: "Services" },
  { src: "/assets/brochure/pages/page-04.jpg", label: "The Problem" },
  { src: "/assets/brochure/pages/page-05.jpg", label: "The Solution" },
  { src: "/assets/brochure/pages/page-06.jpg", label: "Complete Solutions" },
  { src: "/assets/brochure/pages/page-07.jpg", label: "Projects & Work" },
  { src: "/assets/brochure/pages/page-08.jpg", label: "Tailored For You" },
  { src: "/assets/brochure/pages/page-09.jpg", label: "Why Work With Me" },
  { src: "/assets/brochure/pages/page-10.jpg", label: "Our Process" },
  { src: "/assets/brochure/pages/page-11.jpg", label: "Let's Talk" },
];
