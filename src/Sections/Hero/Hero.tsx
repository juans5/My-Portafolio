import styles from "../../Styles/Hero.module.css";
// import { motion } from "framer-motion";

import { LinksSpa } from "./components/LinksSpa";
import { Profile } from "./components/Profile";
import { ExternalLinks } from "./components/ExternalLinks";

import { useMouseParallax } from "../../Hooks/useMouseParallax";
import { ParallaxLayer } from "../../Components/ParallaxLayer";
import { GradientSphere } from "./components/GradientSphere";
import { BackgroundPattern } from "./components/BackgroundPattern";
import { AnimateIn } from "../../Components/AnimateIn";
import { NAV_LINKS } from "../../Config/navigation";

export const HeroSection = () => {
  // Llamar hook para los motionValues
  const { x, y } = useMouseParallax({
    stiffness: 100, // como de rapido sigue el mouse
    damping: 50, // rebote que tiene
  });

  const EXTERNAL_LINKS = [
    { href: "https://github.com/juans5", label: "Github" },
    { href: "/cv/myCV.pdf", label: "CV" },
  ];

  const [{ href }] = NAV_LINKS; // primer href del array

  return (
    // <motion.div
    //   className={styles.container}
    //   initial={{ opacity: 0, y: 50 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5, delay: 0.2 }}
    //   style={{ position: "relative", overflow: "hidden" }}
    // >

    <section
      id={href}
      className={styles.container}
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
        <AnimateIn>
          <Profile links={EXTERNAL_LINKS} />
        </AnimateIn>
        <LinksSpa />
      </div>

      {/* <ExternalLinks links={EXTERNAL_LINKS} /> */}
    </section>
  );
};
