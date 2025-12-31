"use client";

import DarkVeil from "./DarkVeil";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <DarkVeil hueShift={49} speed={1} />
      </div>
    </div>
  );
}
