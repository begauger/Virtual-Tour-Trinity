import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VirtualTour from "./VirtualTour";
import TourIntro from "./TourSections/TourIntro";
import TourWelcome from "./TourSections/TourWelcome";
import TourPreschool from "./TourSections/TourPreschool";
import TourKindergarten from "./TourSections/TourKindergarten";
import TourFirstSecond from "./TourSections/TourFirstSecond";
import TourThirdFourth from "./TourSections/TourThirdFourth";
import TourFifthSixth from "./TourSections/TourFifthSixth";
import TourSeventhEighth from "./TourSections/TourSeventhEighth";
import TourEnd from "./TourSections/TourEnd"; // Import the end slide

function useIsMobile() {
  return window.matchMedia("(max-width: 700px)").matches;
}

function Home() {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#2d3748",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fullscreen translucent video background */}
      <video
        src="/navbarcomp.mp4"
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
        loop
        muted
        playsInline
      />
      {/* Optional: extra overlay for more contrast */}
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
      {/* Main content, above video */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "2rem 0.5rem" : "0",
        }}
      >
        {/* Left: Large Image */}
        <div
          style={{
            flex: isMobile ? "unset" : "0 0 45%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            minWidth: isMobile ? "unset" : 320,
            marginBottom: isMobile ? "2rem" : 0,
          }}
        >
          {!isMobile && (
            <div
              style={{
                position: "absolute",
                width: "420px",
                height: "420px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #63b3ed55 0%, transparent 70%)",
                filter: "blur(16px)",
                zIndex: 0,
              }}
            />
          )}
          <img
            src="/logo.webp"
            alt="Church"
            style={{
              width: isMobile ? "220px" : "350px",
              maxWidth: "95vw",
              height: "auto",
              borderRadius: "2rem",
              boxShadow: "0 8px 32px 0 rgba(44, 62, 80, 0.2)",
              objectFit: "cover",
              background: "#fff",
              padding: isMobile ? "0.8rem" : "1.5rem",
              position: "relative",
              zIndex: 1,
            }}
          />
          <div
            style={{
              marginTop: "1.2rem",
              color: "#bee3f8",
              fontWeight: "bold",
              fontSize: isMobile ? "1.05rem" : "1.3rem",
              textAlign: "center",
              textShadow: "0 2px 8px #2227",
              position: "relative",
              zIndex: 1,
              maxWidth: isMobile ? "90vw" : "unset",
            }}
          >
            Thank you for taking the Virtual Tour!
          </div>
        </div>
        {/* Vertical Divider */}
        {!isMobile && (
          <div
            style={{
              width: "4px",
              height: "60vh",
              background: "linear-gradient(180deg, #90cdf4 0%, #63b3ed 100%)",
              borderRadius: "2px",
              margin: "0 3vw",
              boxShadow: "0 0 12px #63b3ed55",
            }}
          />
        )}
        {/* Right: Welcome Text and Button */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: isMobile ? "100%" : "unset",
          }}
        >
          <div style={{ position: "relative", marginBottom: isMobile ? "1.2rem" : "2rem", width: "fit-content" }}>
            {/* Expanded Glow effect under heading */}
            {!isMobile && (
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "65%",
                  transform: "translate(-50%, -50%)",
                  width: "600px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #63b3ed77 0%, transparent 75%)",
                  filter: "blur(24px)",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />
            )}
            <h1
              style={{
                fontSize: isMobile ? "1.5rem" : "2.7rem",
                marginBottom: 0,
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                letterSpacing: "1px",
                maxWidth: isMobile ? "90vw" : "unset",
              }}
            >
              Welcome to Our Church & School
            </h1>
          </div>
          <Link
            to="/tour-intro"
            style={{
              background: "linear-gradient(90deg, #63b3ed 0%, #38b2ac 100%)",
              color: "#222",
              border: "none",
              borderRadius: "999px",
              padding: isMobile ? "0.7rem 1.4rem" : "0.9rem 2.2rem",
              fontSize: isMobile ? "1rem" : "1.2rem",
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "none",
              boxShadow: "0 2px 12px #63b3ed55",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.8rem",
              transition: "transform 0.18s, box-shadow 0.18s",
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
            Give me the tour
            <span style={{
              display: "inline-block",
              transition: "transform 0.18s",
              fontSize: isMobile ? "1.1em" : "1.3em",
              marginLeft: "0.2em"
            }}>➔</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour-intro" element={<TourIntro />} />
        <Route path="/tour" element={<VirtualTour />} />
        <Route path="/tour-welcome" element={<TourWelcome />} />
        <Route path="/tour-preschool" element={<TourPreschool />} />
        <Route path="/tour-kindergarten" element={<TourKindergarten />} />
        <Route path="/tour-firstsecond" element={<TourFirstSecond />} />
        <Route path="/tour-thirdfourth" element={<TourThirdFourth />} />
        <Route path="/tour-fifth-sixth" element={<TourFifthSixth />} />
        <Route path="/tour-seventh-eighth" element={<TourSeventhEighth />} />
        <Route path="/tour-end" element={<TourEnd />} /> {/* End slide */}
      </Routes>
    </Router>
  );
}

export default App;