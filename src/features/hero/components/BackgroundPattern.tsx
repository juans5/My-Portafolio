import { ParticleLayer } from "./ParticleLayer";

export const BackgroundPattern = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        // overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <ParticleLayer
        size="60px 60px"
        color="#e1b12c97"
        duration={25}
        xRange={[-50, 50]}
        yRange={[-90, 90]}
        opacity={0.3}
      />

      <ParticleLayer
        size="93px 93px"
        color="#e1b12c97"
        duration={18}
        xRange={[40, -40]}
        yRange={[60, -60]}
        opacity={0.5}
      />

      <ParticleLayer
        size="137px 137px"
        color="#e1b12c97"
        duration={30}
        xRange={[20, -20]}
        yRange={[-20, 20]}
        opacity={0.2}
      />
    </div>
  );
};
