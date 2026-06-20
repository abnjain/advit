"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type ContactType = "" | "student" | "business" | "partner";

const contactOptions: Array<{ value: ContactType; label: string }> = [
  { value: "", label: "Select an option" },
  { value: "student", label: "Student" },
  { value: "business", label: "Business" },
  { value: "partner", label: "Partner" },
];

const typeLabelMap: Record<Exclude<ContactType, "">, string> = {
  student: "Student",
  business: "Business",
  partner: "Partner",
};

export default function ContactPage() {
  const searchParams = useSearchParams();

  const queryType = useMemo(() => {
    const raw = (searchParams.get("for") || "").toLowerCase();
    if (raw === "student" || raw === "business" || raw === "partner") {
      return raw as Exclude<ContactType, "">;
    }
    return "";
  }, [searchParams]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [contactingFor, setContactingFor] = useState<ContactType>("");
  const [error, setError] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const targetEmail = process.env.CONTACT_TO_EMAIL

  useEffect(() => {
    if (queryType) {
      setContactingFor(queryType);
    }
  }, [queryType]);

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    const timeout = window.setTimeout(() => setToastMessage(""), 3200);
    return () => window.clearTimeout(timeout);
  }, [toastMessage]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (isSubmitting) {
      return;
    }

    if (!name.trim() || !email.trim() || !phone.trim() || !contactingFor) {
      setError("Please fill name, email, phone and select who you are contacting for.");
      return;
    }

    const label = typeLabelMap[contactingFor as Exclude<ContactType, "">];

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          contactingFor: label,
          description: description.trim(),
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(payload.message || "Unable to send your message right now.");
      }

      setToastMessage(payload.message || "Message sent successfully.");
      setName("");
      setEmail("");
      setPhone("");
      setDescription("");
      setContactingFor("");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to send your message right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "112px 24px 64px",
        background: "linear-gradient(160deg, #F8FAFC 0%, #EEF2FF 42%, #ECFEFF 100%)",
      }}
    >
      <div
        style={{
          maxWidth: 820,
          margin: "0 auto",
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: 20,
          padding: "36px 28px",
          boxShadow: "0 16px 40px rgba(15,23,42,0.08)",
        }}
      >
        <div style={{ marginBottom: 24 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              fontWeight: 700,
              color: "#1D4ED8",
              background: "#EFF6FF",
              border: "1px solid #BFDBFE",
              borderRadius: 999,
              padding: "6px 12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Contact Advit Hub
          </div>
          <h1
            style={{
              marginTop: 14,
              fontSize: "clamp(30px, 5vw, 42px)",
              lineHeight: 1.15,
              color: "#0A0F2C",
              letterSpacing: "-0.02em",
            }}
          >
            One contact page for students, businesses, and partners
          </h1>
          <p style={{ marginTop: 12, color: "#475569", fontSize: 15 }}>
            Fill the form below and we’ll send it directly through SMTP.
          </p>
        </div>

        {toastMessage ? (
          <div
            role="status"
            aria-live="polite"
            style={{
              marginBottom: 16,
              borderRadius: 14,
              border: "1px solid #BBF7D0",
              background: "#F0FDF4",
              color: "#166534",
              padding: "12px 14px",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {toastMessage}
          </div>
        ) : null}

        <form onSubmit={onSubmit} style={{ display: "grid", gap: 14 }}>
          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              required
              style={{
                border: "1px solid #CBD5E1",
                borderRadius: 12,
                padding: "11px 12px",
                fontSize: 14,
              }}
            />
          </label>

          <div
            style={{
              display: "grid",
              gap: 14,
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                style={{
                  border: "1px solid #CBD5E1",
                  borderRadius: 12,
                  padding: "11px 12px",
                  fontSize: 14,
                }}
              />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>Phone</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                required
                style={{
                  border: "1px solid #CBD5E1",
                  borderRadius: 12,
                  padding: "11px 12px",
                  fontSize: 14,
                }}
              />
            </label>
          </div>

          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>Contacting For</span>
            <select
              value={contactingFor}
              onChange={(e) => setContactingFor(e.target.value as ContactType)}
              style={{
                border: "1px solid #CBD5E1",
                borderRadius: 12,
                padding: "11px 12px",
                fontSize: 14,
                background: "#FFFFFF",
              }}
            >
              {contactOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>Description (optional)</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Share your requirement or message"
              rows={5}
              style={{
                border: "1px solid #CBD5E1",
                borderRadius: 12,
                padding: "11px 12px",
                fontSize: 14,
                resize: "vertical",
              }}
            />
          </label>

          {error ? (
            <p style={{ color: "#B91C1C", fontSize: 13, fontWeight: 600 }}>{error}</p>
          ) : null}

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 6 }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                color: "#FFFFFF",
                borderRadius: 12,
                padding: "12px 18px",
                fontSize: 14,
                fontWeight: 700,
                opacity: isSubmitting ? 0.75 : 1,
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Sending..." : "Send Email"}
            </button>
            <a
              href={`mailto:${targetEmail}`}
              style={{
                border: "1px solid #CBD5E1",
                borderRadius: 12,
                padding: "12px 18px",
                fontSize: 14,
                fontWeight: 600,
                color: "#334155",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Open Mail App
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
