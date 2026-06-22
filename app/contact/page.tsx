import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { BRAND_NAME, BRAND_DESCRIPTION, BRAND_URL } from "@/app/lib/brand";

type ContactType = "" | "student" | "business" | "partner";

type ContactPageProps = {
  searchParams?: Promise<{
    for?: string;
  }>;
};

export const metadata: Metadata = {
  title: `Contact | ${BRAND_NAME}`,
  description:
    "Get in touch with Advit Hub. Whether you're a student looking to learn, a business seeking talent, or a partner wanting to collaborate — we'd love to hear from you.",
  openGraph: {
    title: `Contact ${BRAND_NAME}`,
    description: "Start your journey with Advit Hub. Learn, build, work, and get placed.",
    url: `${BRAND_URL}/contact`,
    type: "website",
  },
  alternates: {
    canonical: `${BRAND_URL}/contact`,
  },
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;
  const raw = (resolvedSearchParams?.for || "").toLowerCase();
  const initialQueryType: ContactType =
    raw === "student" || raw === "business" || raw === "partner" ? (raw as Exclude<ContactType, "">) : "";

  return <ContactForm initialQueryType={initialQueryType} />;
}
