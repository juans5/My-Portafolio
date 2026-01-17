import { type SetStateAction } from "react";
import styles from "../ProjectSection.module.css";
import { motion } from "framer-motion";

export const ButtonSlide = ({
  maxIndex,
  triggerTranslate,
  onSlideChange,
}: {
  maxIndex: number;
  triggerTranslate: number;
  onSlideChange: React.Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className={styles.btn_container}>
      {Array(maxIndex + 1)
        .fill(null)
        .map((_card, idx) => (
          <motion.button
            key={idx}
            animate={{
              opacity: idx == triggerTranslate ? 0.6 : 1,
            }}
            onClick={() => onSlideChange(idx)}
            className={styles.btn_carousel}
            aria-label={`Ir a la diapositiva ${idx + 1}`}
            transition={{ duration: 0.3 }}
          />
        ))}
    </div>
  );
};
