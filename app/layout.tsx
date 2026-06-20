import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advit Hub — Education-First Innovation Ecosystem",
  description:
    "Advit Hub is an education-first innovation ecosystem where students learn real skills, build live projects, and grow into industry-ready professionals.",
  keywords:
    "education, tech training, web development, software development, AI, cloud, DevOps, placements, freelance projects, Indore, India",
  openGraph: {
    title: "Advit Hub",
    description:
      "Advit Hub is an education-first innovation ecosystem where students learn real skills, build live projects, and grow into industry-ready professionals.",
    type: "website",
    url: "https://advithub.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advit Hub",
    description:
      "Learn real skills, build real products, get placed.",
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
