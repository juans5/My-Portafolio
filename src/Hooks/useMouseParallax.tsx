import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

interface ParallaxConfig {
  stiffness?: number;
  damping?: number;
  restDelta?: number;
}

export const useMouseParallax = ({ stiffness = 100, damping = 20, restDelta = 0.001 }: ParallaxConfig = {}) => {
  // Estos valores van de -0.5 a 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseEvent = (e: MouseEvent) => {
      // const { clientX, clientY } = e;
      // const { innerWidth, innerHeight } = window;

      // Metodo para pasar metodo de pixeles a coordenadas (entre 0 y 1)
      // const x = clientX / innerWidth;
      // const y = clientY / innerHeight;

      // set el motionValue (actualizar)
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseEvent);

    return () => {
      window.removeEventListener("mousemove", handleMouseEvent);
    };
  }, [mouseX, mouseY]);

  // definir useSpring para dar un movimiento suave y preciso

  const springX = useSpring(mouseX, {
    stiffness,
    damping,
    restDelta,
  });

  const springY = useSpring(mouseY, {
    stiffness,
    damping,
    restDelta,
  });

  return { x: springX, y: springY };
};
