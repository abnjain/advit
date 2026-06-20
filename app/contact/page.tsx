import ContactForm from "./ContactForm";

type ContactType = "" | "student" | "business" | "partner";

type ContactPageProps = {
  searchParams?: {
    for?: string;
  };
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  const raw = (searchParams?.for || "").toLowerCase();
  const initialQueryType: ContactType =
    raw === "student" || raw === "business" || raw === "partner" ? (raw as Exclude<ContactType, "">) : "";

  return <ContactForm initialQueryType={initialQueryType} />;
}
