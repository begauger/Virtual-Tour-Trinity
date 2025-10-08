import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function TourIntro() {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const videoRef = useRef(null);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => setShowWelcome(true), 15000); // 15 seconds
    const buttonTimer = setTimeout(() => setShowButton(true), 17000); // 17 seconds (2s after welcome)
    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pause on last frame when video ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => {
      video.currentTime = video.duration;
      video.pause();
    };
    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        background: "#000",
        zIndex: 1000,
        overflow: "hidden",
      }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        src="/walkingcomp.mp4"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.35,
          pointerEvents: "none",
        }}
        autoPlay
        muted
        playsInline
      />
      {/* Optional overlay for contrast */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(44,55,80,0.35)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {/* Content above video */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "0 1rem" : 0,
        }}
      >
        <span
          style={{
            color: "#bee3f8",
            fontSize: isMobile ? "1.3rem" : "2rem",
            fontWeight: "bold",
            marginBottom: isMobile ? "1.2rem" : "2rem",
            opacity: showWelcome ? 1 : 0,
            transition: "opacity 1.2s",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Welcome to the Virtual Tour!
        </span>
        <button
          onClick={() => navigate("/tour")}
          style={{
            background: "linear-gradient(90deg, #63b3ed 0%, #38b2ac 100%)",
            color: "#222",
            border: "none",
            borderRadius: "999px",
            padding: isMobile ? "0.7rem 1.5rem" : "0.9rem 2.2rem",
            fontSize: isMobile ? "1rem" : "1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: "0 2px 12px #63b3ed55",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.8rem",
            transition: "opacity 1.2s, transform 0.18s, box-shadow 0.18s",
            opacity: showButton ? 1 : 0,
            pointerEvents: showButton ? "auto" : "none",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.07)";
            e.currentTarget.style.boxShadow = "0 4px 24px #38b2ac88";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 12px #63b3ed55";
          }}
        >
          Start
          <span style={{
            display: "inline-block",
            transition: "transform 0.18s",
            fontSize: "1.3em",
            marginLeft: "0.2em"
          }}>➔</span>
        </button>
      </div>
    </div>
  );
}