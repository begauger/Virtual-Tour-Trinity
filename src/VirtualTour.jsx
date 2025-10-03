import React, { useState } from "react";
import TourWelcome from "./TourSections/TourWelcome";
// import other sections as you create them, e.g.:
// import TourMission from "./TourSections/TourMission";
// import TourWorship from "./TourSections/TourWorship";
// ...etc

const steps = [
  <TourWelcome />,
  // <TourMission />,
  // <TourWorship />,
  // ...add more as you build them
];

export default function VirtualTour() {
  const [current, setCurrent] = useState(0);

  // Navigation helpers
  const isFirst = current === 0;
  const isLast = current === steps.length - 1;

  // Clone the current step and inject navigation props
  const CurrentStep = React.cloneElement(steps[current], {
    onNext: () => setCurrent((c) => Math.min(steps.length - 1, c + 1)),
    onPrev: () => setCurrent((c) => Math.max(0, c - 1)),
    isFirst,
    isLast,
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #2d3748 0%, #4c51bf 100%)",
        color: "#fff",
      }}
    >
      {CurrentStep}
    </main>
  );
}