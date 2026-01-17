import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";

interface ParallaxLayerProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  strength: number;
  children: React.ReactNode;
  className?: string;
  zIndex?: number;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ x, y, strength, children, className, zIndex = 1 }) => {
  // Esto es lo que nuevos MotionValues actualizando (x) y (y) automaticamente cuando cambian
  const offsetX = useTransform(x, (value) => value + strength);
  const offsetY = useTransform(y, (value) => value + strength);

  return (
    <motion.div
      className={className}
      style={{ x: offsetX, y: offsetY, zIndex, translateX: "-50%", translateY: "-35%" }}
    >
      {children}
    </motion.div>
  );
};
