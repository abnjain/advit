import { BRAND } from "@/app/lib/brand";

export default function JsonLd() {
  const { name, description, url, logoPath, sameAs, address, foundingDate, telephone, keywords } = BRAND;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    name,
    url,
    logo: `${url}${logoPath}`,
    description,
    foundingDate,
    telephone,
    keywords,
    sameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postCode,
      addressCountry: address.country,
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name,
    description,
    publisher: { "@id": `${url}/#organization` },
    inLanguage: "en-US",
  };

  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${url}/courses/#course`,
    name: `${name} Training Programs`,
    description: "Industry-ready skill development across IT, AI, cloud, DevOps, design, and business technology.",
    provider: { "@id": `${url}/#organization` },
    educationalCredentialAwarded: "Certificate of Completion",
    teaches: [
      "Web Development",
      "Software Development",
      "AI & Machine Learning",
      "Cloud Engineering",
      "DevOps & Automation",
      "UI/UX Design",
      "Digital Marketing",
      "Content Creation",
    ],
    offers: {
      "@type": "Offer",
      category: "Paid",
      price: "0",
      priceCurrency: "INR",
    },
  };

  const educationalOccupationalCredential = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    "@id": `${url}/#credential`,
    name: "Advit Hub Certificate",
    description: "Awarded upon completion of training and live project milestones.",
    credentialCategory: "Certificate",
    recognizedBy: { "@id": `${url}/#organization` },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: url },
      { "@type": "ListItem", position: 2, name: "Courses", item: `${url}/courses` },
    ],
  };

  const jsonLd = [organization, website, course, educationalOccupationalCredential, breadcrumb];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
