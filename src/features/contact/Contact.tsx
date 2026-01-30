import styles from "./ContactSection.module.css";
import { constants } from "@/shared";
import { ContactInfo } from "./components/ContactInfo";
import { CallToAction } from "./components/CallToAction";

export const ContactMe = () => {
  const [, , , { href }] = constants.NAV_LINKS;

  return (
    <footer id={href.replace("#", "")} className={styles.container}>
      <CallToAction />
      <ContactInfo links={constants.EXTERNAL_LINKS} />
    </footer>
  );
};
