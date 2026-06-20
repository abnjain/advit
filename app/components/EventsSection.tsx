"use client";

const events = [
  {
    icon: "bolt",
    title: "Hackathons",
    desc: "Intense build sprints to ship real products against the clock.",
    freq: "Quarterly",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    freqColor: "#1D4ED8",
    freqBg: "#EFF6FF",
  },
  {
    icon: "run",
    title: "Marathons",
    desc: "Endurance learning and build marathons that level up skills fast.",
    freq: "Bi-annual",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    freqColor: "#6D28D9",
    freqBg: "#F5F3FF",
  },
  {
    icon: "brain",
    title: "Quiz Competitions",
    desc: "Test and sharpen technical knowledge in fast-paced quizzes.",
    freq: "Monthly",
    color: "#06B6D4",
    bg: "#ECFEFF",
    border: "#A5F3FC",
    freqColor: "#0E7490",
    freqBg: "#ECFEFF",
  },
  {
    icon: "tools",
    title: "Workshops",
    desc: "Hands-on sessions led by industry mentors and practitioners.",
    freq: "Weekly",
    color: "#10B981",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    freqColor: "#065F46",
    freqBg: "#ECFDF5",
  },
  {
    icon: "trophy",
    title: "Competitions",
    desc: "Showcase work, win recognition, and stand out to recruiters.",
    freq: "Ongoing",
    color: "#F59E0B",
    bg: "#FEF3C7",
    border: "#FDE68A",
    freqColor: "#92400E",
    freqBg: "#FEF3C7",
  },
  {
    icon: "community",
    title: "Community & Meetups",
    desc: "Engagement events that connect students, mentors, and partners.",
    freq: "Monthly",
    color: "#EC4899",
    bg: "#FDF2F8",
    border: "#FBCFE8",
    freqColor: "#9D174D",
    freqBg: "#FDF2F8",
  },
];

function EventIcon({ type, color }: { type: string; color: string }) {
  if (type === "bolt") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2 5 13h5l-1 9 10-13h-5l-1-7Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "run") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="15" cy="5" r="2" stroke={color} strokeWidth="1.8" />
        <path d="m6 14 4-2 2 2 3-1 3 4M10 12l2-4 4 1" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "brain") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 6a3 3 0 1 1 6 0v12a3 3 0 1 1-6 0V6Z" stroke={color} strokeWidth="1.8" />
        <path d="M9 9H7a2 2 0 1 0 0 4h2m6-4h2a2 2 0 1 1 0 4h-2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "tools") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m4 20 7-7m0 0 2-2m-2 2 4 4m0 0 5-5-4-4-5 5Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "trophy") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 4h8v3a4 4 0 0 1-8 0V4Zm4 7v4m-3 4h6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 6H5a2 2 0 0 0 2 3h1m8-3h3a2 2 0 0 1-2 3h-1" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="10" r="2.3" stroke={color} strokeWidth="1.8" />
      <circle cx="16" cy="10" r="2.3" stroke={color} strokeWidth="1.8" />
      <path d="M4 18c.7-2.2 2.3-3.5 4-3.5s3.3 1.3 4 3.5m0 0c.7-2.2 2.3-3.5 4-3.5s3.3 1.3 4 3.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function EventsSection() {
  return (
    <section
      id="events"
      style={{
        background: "var(--off-white)",
        padding: "96px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--violet)",
              marginBottom: 12,
              fontFamily: "var(--font-sans)",
            }}
          >
            Events & Engagement
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "var(--navy)",
              marginBottom: 16,
              fontFamily: "var(--font-sans)",
              letterSpacing: "-0.02em",
            }}
          >
            Where students compete,
            <br />
            create, and connect
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--gray-500)",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A year-round calendar of hands-on events that push students to learn
            faster, build bolder, and grow together.
          </p>
        </div>

        {/* Events grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 16,
          }}
        >
          {events.map((event, i) => (
            <div
              key={i}
              style={{
                background: "var(--white)",
                borderRadius: 16,
                padding: "24px",
                border: "1px solid var(--gray-200)",
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 6px 24px rgba(0,0,0,0.07)";
                el.style.transform = "translateY(-2px)";
                el.style.borderColor = event.border;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
                el.style.borderColor = "var(--gray-200)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: event.bg,
                  border: `1px solid ${event.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <EventIcon type={event.icon} color={event.color} />
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <h4
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--navy)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {event.title}
                  </h4>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: event.freqColor,
                      background: event.freqBg,
                      padding: "3px 8px",
                      borderRadius: 6,
                      fontFamily: "var(--font-sans)",
                      border: `1px solid ${event.border}`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {event.freq}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--gray-500)",
                    lineHeight: 1.6,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
