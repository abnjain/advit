import ContactForm from "./ContactForm";

type ContactType = "" | "student" | "business" | "partner";

type ContactPageProps = {
  searchParams?: Promise<{
    for?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;
  const raw = (resolvedSearchParams?.for || "").toLowerCase();
  const initialQueryType: ContactType =
    raw === "student" || raw === "business" || raw === "partner" ? (raw as Exclude<ContactType, "">) : "";

  return <ContactForm initialQueryType={initialQueryType} />;
}
