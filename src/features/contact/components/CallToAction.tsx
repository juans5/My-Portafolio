import s from "../ContactSection.module.css";
import { motion } from "framer-motion";

export const CallToAction = () => {
  const phone = "573168505764";
  const message = "Hola, vi tu portafolio y me gustaría hablar contigo";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <motion.div
      className={s.cta_container}
      whileHover={{
        backgroundColor: "#e1b12c",
        y: -10,
        border: "1px",
      }}
    >
      <h1>
        <a
          href={whatsappUrl}
          title="Hablemos por WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¿TRABAJAMOS JUNTOS?
        </a>
      </h1>
    </motion.div>
  );
};
