import styles from "./ProjectSection.module.css";
import { NAV_LINKS } from "@/shared/constants/index";
import { Carousel } from "./components/index";

export const ProjectSection = () => {
  const [, { href }] = NAV_LINKS;

  return (
    <section id={href.replace("#", "")} className={styles.container}>
      <Carousel />
    </section>
  );
};
