import styles from "./About.module.css";
import { AnimateIn } from "@/shared/components";
import { AboutDescription } from "./components/AboutDescription";
import { AnimateStroke } from "./components/AnimateStroke";
import { NAV_LINKS } from "@/shared/constants";

export const AboutMe = () => {
  const [, , { href }] = NAV_LINKS;

  return (
    <AnimateIn id={href.replace("#", "")} className={styles.about_container}>
      <AnimateStroke />
      <AboutDescription />
    </AnimateIn>
  );
};
