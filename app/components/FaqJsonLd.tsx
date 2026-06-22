import { BRAND_URL } from "@/app/lib/brand";

const faqs = [
  {
    question: "What is Advit Hub?",
    answer:
      "Advit Hub is an education-first innovation ecosystem where students learn real skills, build live and freelance projects, develop internal products, get placed, and connect with global partners across IT, AI, cloud, design, and business technology.",
  },
  {
    question: "Who can join Advit Hub?",
    answer:
      "Anyone looking to build practical, industry-ready skills — from beginners with no coding experience to advanced learners wanting real project exposure. Students, graduates, and professionals are all welcome.",
  },
  {
    question: "What courses and domains do you offer?",
    answer:
      "We offer training across 12+ domains: IT & Software Development, Web Development, App Development, Cloud Engineering, DevOps & Automation, AI & Machine Learning, Digital Marketing, Content Creation, UI/UX Design, Business Technology, System Design, and Data & Databases.",
  },
  {
    question: "Does Advit Hub help with placements?",
    answer:
      "Yes. Top performers are placed into internal product teams, partner projects, freelance client work, and full-time roles. We build a direct pipeline from learning to earning.",
  },
  {
    question: "Is Advit Hub only for students in Indore?",
    answer:
      "No. While our primary hub is in Indore, India, we have a presence across India, USA, and Nepal. Many programs and projects can be accessed remotely.",
  },
  {
    question: "How is Advit Hub different from a traditional college or online course?",
    answer:
      "We focus on real execution — you don't just learn theory, you build real products, work on live projects, collaborate in teams, and solve actual industry problems. It's learning by doing, with mentorship and placement support built in.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact us through the form on our website. Tell us about your background and goals, and we'll guide you to the right learning path and project opportunities.",
  },
];

export default function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BRAND_URL}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
