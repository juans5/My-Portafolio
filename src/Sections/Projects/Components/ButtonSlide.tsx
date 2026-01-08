import { useState, type SetStateAction } from "react";
import styles from "../../../Styles/ProjectSection.module.css";
import { motion } from "framer-motion";

export const ButtonSlide = ({
  cardsLength,
  triggerTranslate,
  onSlideChange,
}: {
  cardsLength: number;
  triggerTranslate: number;
  onSlideChange: React.Dispatch<SetStateAction<number>>;
}) => {
  // const handleSlideChange = (idx: number) => {
  //   if (triggerTranslate < cardsLength - 3) {
  //     onSlideChange(idx);
  //   }
  // };

  return (
    <div className={styles.btn_container}>
      {Array(cardsLength)
        .fill(null)
        .map((_card, idx) => (
          <motion.button
            key={idx}
            animate={{
              opacity: idx == triggerTranslate ? 0.6 : 1,
            }}
            onClick={() => onSlideChange(idx)}
            className={styles.btn_carousel}
            transition={{ duration: 0.3 }}
          />
        ))}
    </div>
  );
};
