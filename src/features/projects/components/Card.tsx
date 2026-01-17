import styles from "../ProjectSection.module.css";
import { useState } from "react";
import { DropUpCard } from "./DropUpCard";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

interface CardProps {
  title: string;
  paragraph: string;
  img: string;
  tecnology: number[];
  github?: string;
}

export const Card = ({ title, paragraph, img, tecnology, github }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.card_container}>
      {isOpen ? (
        <DropUpCard stateDropUp={isOpen} tecnology={tecnology} handleDropUp={setIsOpen} />
      ) : (
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={!isOpen ? { opacity: 1, y: 0 } : ""}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <h3>{title}</h3>
          <img src={img} alt="imagen del projecto" width={"100%"} height={"50%"} />
          <p>{paragraph}</p>
          <div>
            <button onClick={() => setIsOpen(true)}>See Stack</button>
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="Ver código en GitHub">
                <SiGithub />
              </a>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};
