import React, { useState, useEffect } from "react";
// import PanoramaViewer from "react-panorama-viewer"; // Uncomment if you add 360 viewer

export default function TourSchool({ onNext, onPrev, isFirst, isLast }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        minHeight: isMobile ? "80vh" : "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e9d8fd 0%, #bee3f8 100%)",
        borderRadius: isMobile ? "1.2rem" : "2rem",
        boxShadow: "0 8px 32px 0 rgba(44, 62, 80, 0.15)",
        padding: isMobile ? "1.2rem 0.5rem" : "2.5rem 1.5rem",
        margin: isMobile ? "1rem 0" : "2rem 0",
        position: "relative",
        overflow: "hidden",
        width: "96vw",
        maxWidth: "100vw",
      }}
    >
      <h2
        style={{
          color: "#553c9a",
          fontSize: isMobile ? "1.5rem" : "2.2rem",
          fontWeight: "bold",
          marginBottom: isMobile ? "1rem" : "1.5rem",
          letterSpacing: "1px",
          textAlign: "center",
        }}
      >
        Welcome to Trinity Church & School
      </h2>

      {/* 360 Image Placeholder */}
      <div
        style={{
          width: isMobile ? "95vw" : "100%",
          maxWidth: isMobile ? 320 : 500,
          height: isMobile ? 160 : 250,
          background: "#f7fafc",
          borderRadius: "1.2rem",
          marginBottom: isMobile ? "1.2rem" : "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 12px 0 rgba(85,60,154,0.08)",
          overflow: "hidden",
        }}
      >
        {/* Replace this with your 360 viewer when ready */}
        {/* <PanoramaViewer imagePath="/images/school-360.webp" width={500} height={250} /> */}
        <span style={{ color: "#a0aec0", fontSize: isMobile ? "0.95rem" : "1.1rem", textAlign: "center" }}>
          [360° School Image Coming Soon]
        </span>
      </div>

      {/* Info Card */}
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: "1rem",
          boxShadow: "0 4px 24px 0 rgba(85,60,154,0.10)",
          padding: isMobile ? "1rem 1rem" : "1.5rem 2rem",
          maxWidth: isMobile ? 320 : 420,
          margin: "0 auto 1.2rem auto",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "#3182ce", fontSize: isMobile ? "1.1rem" : "1.3rem", marginBottom: "0.7rem" }}>
          Our School Community
        </h3>
        <p style={{ color: "#2d3748", fontSize: isMobile ? "0.98rem" : "1.08rem", marginBottom: "0.5rem" }}>
          Trinity offers a nurturing, faith-filled environment where students grow academically and spiritually. Our dedicated teachers, small class sizes, and vibrant programs help every child thrive.
        </p>
        <ul style={{ color: "#4a5568", textAlign: "left", margin: "0 auto", maxWidth: 320, paddingLeft: 18, fontSize: isMobile ? "0.98rem" : "1rem" }}>
          <li>• Christ-centered curriculum</li>
          <li>• Modern classrooms & technology</li>
          <li>• Arts, music, and athletics</li>
          <li>• Supportive, welcoming community</li>
        </ul>
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", gap: "1.5rem", marginTop: isMobile ? "0.5rem" : "1rem" }}>
        <button
          onClick={onPrev}
          disabled={isFirst}
          style={{
            background: isFirst ? "#cbd5e1" : "#805ad5",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            padding: isMobile ? "0.6rem 1.5rem" : "0.7rem 2.2rem",
            fontWeight: "bold",
            fontSize: isMobile ? "0.95rem" : "1rem",
            cursor: isFirst ? "not-allowed" : "pointer",
            opacity: isFirst ? 0.6 : 1,
            transition: "background 0.2s",
          }}
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={isLast}
          style={{
            background: isLast ? "#cbd5e1" : "#38b2ac",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            padding: isMobile ? "0.6rem 1.5rem" : "0.7rem 2.2rem",
            fontWeight: "bold",
            fontSize: isMobile ? "0.95rem" : "1rem",
            cursor: isLast ? "not-allowed" : "pointer",
            opacity: isLast ? 0.6 : 1,
            transition: "background 0.2s",
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
}