// import { AnimateIn } from "../../Components/AnimateIn";
import { NAV_LINKS } from "../../Config/navigation";
import styles from "../../Styles/ProjectSection.module.css";
import { CarouselSection } from "./Components/Carousel";

export const ProjectSection = () => {
  const [, { href }] = NAV_LINKS;

  return (
    <section id={href} className={styles.container}>
      <CarouselSection />
    </section>
  );
};
