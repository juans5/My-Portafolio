import styles from "../ProjectSection.module.css";
import { motion } from "framer-motion";
import { technologies } from "../data";

interface HandleDropUpCard {
  stateDropUp: boolean;
  handleDropUp: React.Dispatch<React.SetStateAction<boolean>>;
  tecnology: number[];
}

export const DropUpCard = ({ stateDropUp, handleDropUp, tecnology }: HandleDropUpCard) => {
  return (
    <motion.div
      className={styles.card_dropup}
      initial={{ opacity: 0, y: 20 }}
      animate={stateDropUp ? { opacity: 1, y: 0 } : ""}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <h1> Stack</h1>
      <ul>
        {tecnology.map((techId) => {
          const tech = technologies.find((t) => t.id === techId);
          if (!tech) return null;
          const { label, icon: Icon } = tech;
          return (
            <li key={label} title={label}>
              <Icon aria-label={label} />
            </li>
          );
        })}
      </ul>
      <button onClick={() => handleDropUp(false)}>Show Card</button>
    </motion.div>
  );
};
