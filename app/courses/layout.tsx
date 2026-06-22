import type { Metadata } from "next";
import { BRAND_NAME, BRAND_TAGLINE, BRAND_URL } from "@/app/lib/brand";

export const metadata: Metadata = {
  title: `Courses | ${BRAND_NAME}`,
  description: `Browse all courses at ${BRAND_NAME} — Java Full Stack, Web Development, Content Creation, Digital Marketing, and more. Flip through detailed brochures for each course.`,
  openGraph: {
    title: `Courses — ${BRAND_NAME} ${BRAND_TAGLINE}`,
    description: "Explore every course we offer at Advit Hub. Detailed curriculum, projects, and outcomes in every brochure.",
    url: `${BRAND_URL}/courses`,
    type: "website",
  },
  alternates: {
    canonical: `${BRAND_URL}/courses`,
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
