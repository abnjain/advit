import type { Metadata } from "next";
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  BRAND_DESCRIPTION,
  BRAND_TAGLINE_SHORT,
  BRAND_URL,
  BRAND_LOGO_PATH,
} from "@/app/lib/brand";
import JsonLd from "@/app/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BRAND_URL),
  title: {
    default: `${BRAND_NAME} — ${BRAND_TAGLINE}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: BRAND_DESCRIPTION,
  keywords: [
    "education", "tech training", "web development", "software development",
    "AI", "machine learning", "cloud", "DevOps", "placements", "freelance projects",
    "Indore", "India", "coding bootcamp", "IT training", "full stack development",
    "digital marketing", "UI/UX design", "data science",
  ],
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: BRAND_NAME,
    description: BRAND_DESCRIPTION,
    type: "website",
    url: BRAND_URL,
    siteName: BRAND_NAME,
    locale: "en_US",
    images: [
      {
        url: `${BRAND_URL}${BRAND_LOGO_PATH}`,
        width: 1200,
        height: 630,
        alt: BRAND_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_NAME,
    description: BRAND_TAGLINE_SHORT,
    images: [`${BRAND_URL}${BRAND_LOGO_PATH}`],
  },
  icons: {
    icon: BRAND_LOGO_PATH,
    apple: BRAND_LOGO_PATH,
  },
  alternates: {
    canonical: BRAND_URL,
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    yahoo: "YOUR_YAHOO_VERIFICATION_CODE",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore" />
        <meta name="geo.position" content="22.7196;75.8577" />
        <meta name="ICBM" content="22.7196, 75.8577" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="me" href="https://linkedin.com/company/advithub" />
        <link rel="llms" href="/llms.txt" type="text/plain" title="Advit Hub LLM guide" />
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
