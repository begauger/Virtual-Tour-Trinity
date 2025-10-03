import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slideshowImages = [
  "/first1.jpg",
  "/first2.jpg",
  "/first3.jpg",
  "/first4.jpg",
];

export default function TourFirstSecond() {
  const [step, setStep] = useState(0);
  const [slide, setSlide] = useState(0);
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

  return (
    <section
      style={{
        minHeight: "92vh",
        width: "96vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e6fff7 0%, #38b2ac 100%)",
        borderRadius: "1.2rem",
        boxShadow: "0 6px 24px 0 rgba(44, 62, 80, 0.13)",
        padding: "2.8rem 2rem",
        margin: "2vh auto",
        position: "relative",
        overflow: "hidden",
        maxWidth: "100vw",
      }}
    >
      {/* Left: Teacher Image, Titles, and Next Button */}
      <div
        style={{
          flex: "0 0 50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: 540,
          position: "relative",
          height: "100%",
        }}
      >
        <img
          src="/firstgradeteacher.jpg"
          alt="First and Second Grade Teacher"
          style={{
            width: "360px",
            height: "468px",
            borderRadius: "1.2rem",
            objectFit: "cover",
            boxShadow: "0 10px 38px 0 rgba(44, 62, 80, 0.16)",
            background: "#fff",
            marginTop: "2vh",
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
            fontSize: "1.8rem",
            color: "#319795",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 2,
            width: "100%",
            background: "rgba(255,255,255,0.95)",
            borderRadius: "0.6rem",
            padding: "0.4rem 1.7rem",
          }}
        >
          First &amp; Second Grade Teacher
        </div>
        <div style={{ height: "1.2rem" }} />
        <div
          style={{
            opacity: step >= 3 ? 1 : 0,
            transition: "opacity 0.7s",
            fontSize: "1.5rem",
            color: "#234e52",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 2,
            width: "100%",
            letterSpacing: "1px",
            background: "rgba(255,255,255,0.95)",
            borderRadius: "0.6rem",
            padding: "0.4rem 1.7rem",
          }}
        >
          Mrs. Diana Bormann
        </div>
        <button
          onClick={() => navigate("/tour-thirdfourth")}
          style={{
            marginTop: "2.2rem",
            background: "linear-gradient(90deg, #38b2ac 0%, #81e6d9 100%)",
            color: "#234e52",
            border: "none",
            borderRadius: "999px",
            padding: "0.7rem 1.8rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: "0 3px 18px #38b2ac55",
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
            e.currentTarget.style.boxShadow = "0 6px 24px #81e6d988";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 3px 18px #38b2ac55";
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
      </div>
      {/* Right: Heading, Slideshow */}
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "60%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "170px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #81e6d977 0%, transparent 75%)",
            filter: "blur(32px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <h2
          style={{
            color: "#319795",
            fontSize: "2.8rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            letterSpacing: "1.2px",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            textShadow: "0 4px 24px #fff",
            opacity: step >= 4 ? 1 : 0,
            transition: "opacity 0.7s",
            background: "rgba(255,255,255,0.85)",
            borderRadius: "0.6rem",
            padding: "0.4rem 1.7rem",
          }}
        >
          Welcome to Our First &amp; Second Grade Room!
        </h2>
        <div
          style={{
            width: "700px",
            height: "650px",
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 7px 28px 0 rgba(44, 62, 80, 0.16)",
            background: "#fff",
            marginBottom: "2.5rem",
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: step >= 5 ? 1 : 0,
            transition: "opacity 0.7s",
          }}
        >
          <img
            src={slideshowImages[slide]}
            alt={`First & Second Grade Slide ${slide + 1}`}
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