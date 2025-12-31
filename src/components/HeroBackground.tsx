"use client";

import DarkVeil from "./DarkVeil";

// import LiquidEther from "./LiquidEther";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* <LiquidEther
        colors={["#10b981", "#34d399", "#0f766e"]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      /> */}
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <DarkVeil hueShift={49} speed={1} />
      </div>
    </div>
  );
}
