import styles from "./About.module.css";
import { AboutBackground, AboutDescription, AnimateTitle } from "./components/index";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { components, constants } from "@/shared/index";

export const AboutMe = () => {
  const [, , { href }] = constants.NAV_LINKS;

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  return (
    <components.AnimateIn id={href.replace("#", "")} className={styles.about_container}>
      <AboutBackground className={styles.svg_background} startAnimation={isInView} />
      <div ref={containerRef} className={styles.content_wrapper}>
        <AnimateTitle className={styles.svg_title} />
        <AboutDescription className={styles.description_container} />
      </div>
    </components.AnimateIn>
  );
};
