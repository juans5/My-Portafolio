import { motion } from "framer-motion";

interface ParticleLayerProps {
  color: string;
  size: string;
  opacity: number;
  duration: number;
  yRange: number[];
  xRange: number[];
}

export const ParticleLayer = ({ color, size, opacity, duration, yRange, xRange }: ParticleLayerProps) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        top: "-10%",
        left: "-10%",
        width: "180%", // La capa sigue siendo ENORME
        height: "180%",
        borderRadius: "50%",
        translateX: "-20%",
        translateY: "-25%",
        backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        backgroundSize: size,
        opacity: opacity,
        zIndex: 1,
      }}
      animate={{
        x: xRange,
        y: yRange,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear",
      }}
    />
  );
};
