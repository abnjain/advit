import type { Metadata } from "next";
import { BRAND_NAME, BRAND_TAGLINE, BRAND_DESCRIPTION, BRAND_TAGLINE_SHORT, BRAND_URL } from "@/app/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  title: `${BRAND_NAME} — ${BRAND_TAGLINE}`,
  description: BRAND_DESCRIPTION,
  keywords:
    "education, tech training, web development, software development, AI, cloud, DevOps, placements, freelance projects, Indore, India",
  openGraph: {
    title: BRAND_NAME,
    description: BRAND_DESCRIPTION,
    type: "website",
    url: BRAND_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_NAME,
    description: BRAND_TAGLINE_SHORT,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
