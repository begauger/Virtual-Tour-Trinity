import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slideshowImages = [
  "/end1.jpg",
  "/end2.jpg",
  "/end3.jpg",
  "/end11.jpg",
  "/end5.jpg",
  "/end6.jpg",
  "/end7.jpg",
  "/end8.jpg",
  "/end12.jpg",
  "/end13.jpg",

  // Add more images as needed
];

const featuredPeople = [
  {
    name: "Mr. Dean Kelly",
    title: "Interim Administrator",
    img: "/dean.jpg",
  },
  {
    name: "Mrs. Kathy Minzlaff",
    title: "School Secretary",
    img: "/kathy.jpg",
  },
];

export default function TourEnd() {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e0ecff 0%, #2563eb 100%)", // Blue gradient
        borderRadius: "1.2rem",
        boxShadow: "0 6px 24px 0 rgba(37, 99, 235, 0.13)",
        padding: "2.8rem 2rem",
        margin: "2vh auto",
        position: "relative",
        overflow: "hidden",
        maxWidth: "100vw",
      }}
    >
      <h2
        style={{
          color: "#2563eb",
          fontSize: "2.8rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          letterSpacing: "1.2px",
          textAlign: "center",
          textShadow: "0 4px 24px #fff",
          background: "rgba(255,255,255,0.85)",
          borderRadius: "0.6rem",
          padding: "0.4rem 1.7rem",
        }}
      >
        Thank You for Visiting!
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "3rem",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        {/* Slideshow */}
        <div
          style={{
            width: "600px",
            height: "500px",
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 7px 28px 0 rgba(37, 99, 235, 0.16)",
            background: "#fff",
            marginBottom: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={slideshowImages[slide]}
            alt={`Tour End Slide ${slide + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 0.7s",
              background: "#fff",
            }}
          />
        </div>
        {/* Featured People */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "320px",
          }}
        >
          {featuredPeople.map((person) => (
            <div
              key={person.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(255,255,255,0.95)",
                borderRadius: "1rem",
                boxShadow: "0 4px 18px 0 rgba(37, 99, 235, 0.13)",
                padding: "1.2rem 2.2rem",
                minWidth: "260px",
                maxWidth: "320px",
              }}
            >
              <img
                src={person.img}
                alt={person.name}
                style={{
                  width: "160px",
                  height: "200px",
                  borderRadius: "0.8rem",
                  objectFit: "cover",
                  boxShadow: "0 4px 18px 0 rgba(37, 99, 235, 0.13)",
                  background: "#fff",
                  marginBottom: "1rem",
                }}
              />
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  color: "#2563eb",
                  marginBottom: "0.3rem",
                  textAlign: "center",
                }}
              >
                {person.name}
              </div>
              <div
                style={{
                  fontSize: "1.1rem",
                  color: "#1e293b",
                  textAlign: "center",
                }}
              >
                {person.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => navigate("/tour-intro")}
        style={{
          marginTop: "1.5rem",
          background: "linear-gradient(90deg, #60a5fa 0%, #2563eb 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "999px",
          padding: "0.9rem 2.2rem",
          fontSize: "1.2rem",
          fontWeight: "bold",
          cursor: "pointer",
          textDecoration: "none",
          boxShadow: "0 3px 18px #2563eb55",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.7rem",
          transition: "transform 0.09s, box-shadow 0.09s, opacity 0.7s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "scale(1.07)";
          e.currentTarget.style.boxShadow = "0 6px 24px #60a5fa88";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 3px 18px #2563eb55";
        }}
      >
        Start Tour Again
        <span style={{
          display: "inline-block",
          transition: "transform 0.09s",
          fontSize: "1.4em",
          marginLeft: "0.2em"
        }}>⟳</span>
      </button>
      <div
        style={{
          marginTop: "2rem",
          color: "#1e293b",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
          background: "rgba(255,255,255,0.85)",
          borderRadius: "0.6rem",
          padding: "0.7rem 2.2rem",
          boxShadow: "0 2px 8px #2563eb44",
        }}
      >
        We hope you enjoyed your tour! Please contact us if you have any questions.
      </div>
    </section>
  );
}