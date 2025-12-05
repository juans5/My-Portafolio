import styles from "../../Styles/Hero.module.css";
import { motion } from "framer-motion";

import { LinksSpa } from "./components/LinksSpa";
import { Profile } from "./components/Profile";
import { ExternalLinks } from "./components/ExternalLinks";

import { useMouseParallax } from "../../Hooks/useMouseParallax";
import { ParallaxLayer } from "../../Components/ParallaxLayer";
import { GradientSphere } from "./components/GradientSphere";
import { BackgroundPattern } from "./components/BackgroundPattern";

export const HeroSection = () => {
  // Llamar hook para los motionValues
  const { x, y } = useMouseParallax({
    stiffness: 200, // como de rapido sigue el mouse
    damping: 50, // rebote que tiene
  });

  const EXTERNAL_LINKS = [
    { href: "https://github.com/juans5", label: "Github" },
    { href: "/cv/myCV.pdf", label: "CV" },
  ];

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Capa de Fondo, se mueve poco y en direccion opuesta (strength negativo) */}
      <ParallaxLayer x={x} y={y} strength={-80} zIndex={1} className={styles.backgroundLayer}>
        <BackgroundPattern />
      </ParallaxLayer>
      {/* Capa Principal - Movimiento Moderado */}
      <ParallaxLayer x={x} y={y} strength={30} zIndex={2} className={styles.mainLayer}>
        <BackgroundPattern />
      </ParallaxLayer>
      {/* Capa Frontal - Movimiento más Pronunciado */}
      <ParallaxLayer x={x} y={y} strength={60} zIndex={3} className={styles.frontLayer}>
        <BackgroundPattern />
        <GradientSphere />
      </ParallaxLayer>

      {/* Contenido principal del hero */}
      <div className={styles.hero_container}>
        <Profile />
        <LinksSpa />
      </div>
      <ExternalLinks links={EXTERNAL_LINKS} />
    </motion.div>
  );
};
