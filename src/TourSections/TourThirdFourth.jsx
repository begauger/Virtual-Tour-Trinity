import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slideshowImages = [
  "/th1.jpg",
  "/th2.jpg",
  "/th3.jpg",
  "/th4.jpg",
  // Add more images as needed
];

export default function TourThirdFourth() {
  const [step, setStep] = useState(0);
  const [slide, setSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const navigate = useNavigate();

  useEffect(() => {
    if (step < 6) {
      const delays = [1200, 900, 900, 900, 900, 900];
      const timer = setTimeout(() => setStep(step + 1), delays[step]);
      return () => clearTimeout(timer);
    }
  }, [step]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        minHeight: "92vh",
        width: "96vw",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #ede9fe 0%, #7c3aed 100%)",
        borderRadius: "1.2rem",
        boxShadow: "0 6px 24px 0 rgba(124, 58, 237, 0.13)",
        padding: isMobile ? "1.2rem 0.5rem" : "2.8rem 2rem",
        margin: "2vh auto",
        position: "relative",
        overflow: "hidden",
        maxWidth: "100vw",
        gap: isMobile ? "2rem" : "0",
      }}
    >
      {/* Left: Teacher Image, Titles, and Next/Previous Buttons */}
      <div
        style={{
          flex: isMobile ? "unset" : "0 0 50%",
          width: isMobile ? "100%" : "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: isMobile ? "unset" : 540,
          position: "relative",
          height: "100%",
        }}
      >
        <img
          src="/thirdgradeteacher.jpg"
          alt="Third and Fourth Grade Teacher"
          style={{
            width: isMobile ? "90vw" : "360px",
            maxWidth: "100%",
            height: isMobile ? "auto" : "468px",
            borderRadius: "1.2rem",
            objectFit: "cover",
            boxShadow: "0 10px 38px 0 rgba(124, 58, 237, 0.16)",
            background: "#fff",
            marginTop: isMobile ? "1vh" : "2vh",
            opacity: step >= 1 ? 1 : 0,
            transform: step >= 1
              ? "translateY(0)"
              : "translateY(80px)",
            transition: "transform 0.8s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.8s",
            zIndex: 2,
          }}
        />
        <div
          style={{
            marginTop: "1.2rem",
            opacity: step >= 2 ? 1 : 0,
            transition: "opacity 0.7s",
            fontSize: isMobile ? "1.2rem" : "1.8rem",
            color: "#7c3aed",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 2,
            width: "100%",
            background: "rgba(255,255,255,0.95)",
            borderRadius: "0.6rem",
            padding: isMobile ? "0.3rem 1rem" : "0.4rem 1.7rem",
          }}
        >
          Third &amp; Fourth Grade Teacher
        </div>
        <div style={{ height: "1.2rem" }} />
        <div
          style={{
            opacity: step >= 3 ? 1 : 0,
            transition: "opacity 0.7s",
            fontSize: isMobile ? "1rem" : "1.5rem",
            color: "#4c1d95",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 2,
            width: "100%",
            letterSpacing: "1px",
            background: "rgba(255,255,255,0.95)",
            borderRadius: "0.6rem",
            padding: isMobile ? "0.3rem 1rem" : "0.4rem 1.7rem",
          }}
        >
          Mrs. Katie Hosbach
        </div>
        <button
          onClick={() => navigate("/tour-fifth-sixth")}
          style={{
            marginTop: "2.2rem",
            background: "linear-gradient(90deg, #d6bcfa 0%, #7c3aed 100%)",
            color: "#4c1d95",
            border: "none",
            borderRadius: "999px",
            padding: isMobile ? "0.7rem 1.5rem" : "0.7rem 1.8rem",
            fontSize: isMobile ? "1rem" : "1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: "0 3px 18px #d6bcfa55",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.7rem",
            transition: "transform 0.09s, box-shadow 0.09s, opacity 0.7s",
            position: "relative",
            zIndex: 1,
            opacity: step >= 6 ? 1 : 0,
            pointerEvents: step >= 6 ? "auto" : "none",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.07)";
            e.currentTarget.style.boxShadow = "0 6px 24px #d6bcfa88";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 3px 18px #d6bcfa55";
          }}
        >
          Next
          <span style={{
            display: "inline-block",
            transition: "transform 0.09s",
            fontSize: "1.4em",
            marginLeft: "0.2em"
          }}>➔</span>
        </button>
        {/* Previous Button */}
        <button
          onClick={() => navigate("/tour-firstsecond")}
          style={{
            marginTop: "1.2rem",
            background: "linear-gradient(90deg, #63b3ed 0%, #38b2ac 100%)",
            color: "#222",
            border: "none",
            borderRadius: "999px",
            padding: isMobile ? "0.7rem 1.5rem" : "0.7rem 1.8rem",
            fontSize: isMobile ? "1rem" : "1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: "0 3px 18px #63b3ed55",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.7rem",
            transition: "transform 0.09s, box-shadow 0.09s, opacity 0.7s",
            position: "relative",
            zIndex: 1,
            opacity: step >= 6 ? 1 : 0,
            pointerEvents: step >= 6 ? "auto" : "none",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.07)";
            e.currentTarget.style.boxShadow = "0 6px 24px #38b2ac88";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 3px 18px #63b3ed55";
          }}
        >
          <span style={{
            display: "inline-block",
            transition: "transform 0.09s",
            fontSize: "1.4em",
            marginRight: "0.2em"
          }}>←</span>
          Previous
        </button>
      </div>
      {/* Right: Heading, Slideshow */}
      <div
        style={{
          flex: "1",
          width: isMobile ? "100%" : "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "60%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "60vw" : "800px",
            height: isMobile ? "40vw" : "170px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #d6bcfaaa 0%, transparent 75%)",
            filter: "blur(32px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <h2
          style={{
            color: "#5b21b6",
            fontSize: isMobile ? "1.5rem" : "2.8rem",
            fontWeight: "bold",
            marginBottom: isMobile ? "1rem" : "2rem",
            letterSpacing: "1.2px",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            textShadow: "0 4px 24px #fff",
            opacity: step >= 4 ? 1 : 0,
            transition: "opacity 0.7s",
            background: "rgba(255,255,255,0.85)",
            borderRadius: "0.6rem",
            padding: isMobile ? "0.3rem 1rem" : "0.4rem 1.7rem",
          }}
        >
          Welcome to Our Third &amp; Fourth Grade Room!
        </h2>
        <div
          style={{
            width: isMobile ? "95vw" : "700px",
            maxWidth: "100%",
            height: isMobile ? "45vw" : "650px",
            maxHeight: isMobile ? "60vw" : "650px",
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 7px 28px 0 rgba(124, 58, 237, 0.16)",
            background: "#fff",
            marginBottom: isMobile ? "1.2rem" : "2.5rem",
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: step >= 5 ? 1 : 0,
            transition: "opacity 0.7s",
            aspectRatio: isMobile ? "4/3" : undefined,
          }}
        >
          <img
            src={slideshowImages[slide]}
            alt={`Third & Fourth Grade Slide ${slide + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 0.7s",
              background: "#fff",
            }}
          />
        </div>
      </div>
    </section>
  );
}