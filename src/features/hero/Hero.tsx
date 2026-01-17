import { GradientSphere, BackgroundPattern, LinksSpa, Profile } from "./components/index";
import { components, hooks, constants } from "@/shared/index";
import styles from "./Hero.module.css";

export const HeroSection = () => {
  // Llamar hook para los motionValues

  const { x, y } = hooks.useMouseParallax({
    stiffness: 100, // como de rapido sigue el mouse
    damping: 50, // rebote que tiene
  });

  const EXTERNAL_LINKS = [
    { href: "https://github.com/juans5", label: "Github" },
    { href: "/cv/myCV.pdf", label: "CV" },
  ];

  const [{ href }] = constants.NAV_LINKS; // primer href del array

  return (
    <section
      id={href.replace("#", "")}
      className={styles.container}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Capa de Fondo, se mueve poco y en direccion opuesta (strength negativo) */}
      <components.ParallaxLayer x={x} y={y} strength={-80} zIndex={1} className={styles.backgroundLayer}>
        <BackgroundPattern />
      </components.ParallaxLayer>
      {/* Capa Principal - Movimiento Moderado */}
      <components.ParallaxLayer x={x} y={y} strength={30} zIndex={2} className={styles.mainLayer}>
        <BackgroundPattern />
      </components.ParallaxLayer>
      {/* Capa Frontal - Movimiento más Pronunciado */}
      <components.ParallaxLayer x={x} y={y} strength={60} zIndex={3} className={styles.frontLayer}>
        <BackgroundPattern />
        <GradientSphere />
      </components.ParallaxLayer>

      {/* Contenido principal del hero */}

      <div className={styles.hero_container}>
        <components.AnimateIn>
          <Profile links={EXTERNAL_LINKS} />
        </components.AnimateIn>
        <LinksSpa />
      </div>
    </section>
  );
};
