"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BrochureViewer from "@/app/components/BrochureViewer";
import { usePdfPages } from "@/app/components/usePdfPages";
import { BROCHURE_PDF_URL } from "@/app/lib/brand";

const courses = [
  {
    name: "Java Full Stack",
    desc: "Backend & frontend with Spring Boot + React",
    pdfUrl: BROCHURE_PDF_URL,
  },
  {
    name: "Web Development",
    desc: "Modern responsive websites and full-stack apps",
    pdfUrl: BROCHURE_PDF_URL,
  },
  {
    name: "Content Creation",
    desc: "Writing, video, and content that builds audiences",
    pdfUrl: BROCHURE_PDF_URL,
  },
  {
    name: "Digital Marketing",
    desc: "Growth, SEO, ads, and performance marketing",
    pdfUrl: BROCHURE_PDF_URL,
  },
];

export default function CoursesPage() {
  const { pages, loading } = usePdfPages(BROCHURE_PDF_URL);
  const [viewing, setViewing] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main
        style={{
          background: "var(--navy)",
          minHeight: "100vh",
          padding: "120px 24px 80px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Header */}
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#93C5FD",
              marginBottom: 12,
              fontFamily: "var(--font-sans)",
            }}
          >
            Our Courses
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
              fontFamily: "var(--font-sans)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Browse every course
            <br />
            we offer
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "#94A3B8",
              lineHeight: 1.75,
              maxWidth: 560,
              marginBottom: 48,
              fontFamily: "var(--font-sans)",
            }}
          >
            Flip through the brochure for any course — each one has its own
            detailed breakdown of curriculum, projects, and outcomes.
          </p>

          {/* Course grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {courses.map((course) => (
              <div
                key={course.name}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  padding: 0,
                  fontFamily: "var(--font-sans)",
                  transition: "border-color 0.25s, transform 0.25s",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(96,165,250,0.4)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Preview thumbnails */}
                <div
                  onClick={() => setViewing(course.name)}
                  style={{
                    position: "relative",
                    height: 180,
                    background: "rgba(255,255,255,0.02)",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  {!loading && pages.length > 0 && (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          top: 28,
                          left: "18%",
                          width: "38%",
                          aspectRatio: "3 / 4",
                          borderRadius: 10,
                          overflow: "hidden",
                          boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          transform: "rotate(-6deg)",
                          zIndex: 1,
                        }}
                      >
                        <Image
                          src={pages[2]?.src || pages[0].src}
                          alt=""
                          fill
                          sizes="180px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: 8,
                          left: "38%",
                          width: "38%",
                          aspectRatio: "3 / 4",
                          borderRadius: 10,
                          overflow: "hidden",
                          boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          transform: "rotate(3deg)",
                          zIndex: 2,
                        }}
                      >
                        <Image
                          src={pages[4]?.src || pages[0].src}
                          alt=""
                          fill
                          sizes="180px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: -8,
                          left: "58%",
                          width: "38%",
                          aspectRatio: "3 / 4",
                          borderRadius: 10,
                          overflow: "hidden",
                          boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          transform: "rotate(-2deg)",
                          zIndex: 3,
                        }}
                      >
                        <Image
                          src={pages[0]?.src || pages[0].src}
                          alt=""
                          fill
                          sizes="180px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </>
                  )}
                  {loading && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        color: "rgba(255,255,255,0.2)",
                        fontSize: 12,
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      Loading…
                    </div>
                  )}
                </div>

                {/* Course info */}
                <div style={{ padding: "16px 20px 20px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 10,
                      marginBottom: 6,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {course.name}
                    </h3>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setViewing(course.name);
                        }}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 28,
                          height: 28,
                          borderRadius: 7,
                          background:
                            "linear-gradient(135deg, #2563EB, #7C3AED)",
                          border: "none",
                          cursor: "pointer",
                          color: "#fff",
                          transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.opacity = "0.8")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.opacity = "1")
                        }
                        title="View brochure"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                      <a
                        href={course.pdfUrl}
                        download={`${course.name.replace(/\s+/g, "-")}-Brochure.pdf`}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 28,
                          height: 28,
                          borderRadius: 7,
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          color: "#E2E8F0",
                          cursor: "pointer",
                          textDecoration: "none",
                          transition: "background 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background =
                            "rgba(255,255,255,0.15)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background =
                            "rgba(255,255,255,0.07)")
                        }
                        title="Download PDF"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#64748B",
                      lineHeight: 1.5,
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {course.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* And more */}
          <p
            style={{
              marginTop: 40,
              fontSize: 15,
              color: "#64748B",
              textAlign: "center",
              fontFamily: "var(--font-sans)",
              fontStyle: "italic",
            }}
          >
            …and more courses coming soon.
          </p>
        </div>
      </main>
      <Footer />

      {/* Brochure viewer modal */}
      {viewing && (
        <BrochureViewer
          pdfUrl={courses.find((c) => c.name === viewing)?.pdfUrl || BROCHURE_PDF_URL}
          downloadName={`${viewing.replace(/\s+/g, "-")}-Brochure.pdf`}
          open={!!viewing}
          onClose={() => setViewing(null)}
        />
      )}
    </>
  );
}
