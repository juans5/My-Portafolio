import { constants } from "@/shared";
import styles from "./ContactSection.module.css";

export const ContactMe = () => {
  const [, , , { href }] = constants.NAV_LINKS;

  return (
    <footer id={href.replace("#", "")} className={styles.contact_container}>
      <h1>holas</h1>
    </footer>
  );
};
