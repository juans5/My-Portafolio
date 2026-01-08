import { useState } from "react";
import { AnimateIn } from "../../../Components/AnimateIn";
import styles from "../../../Styles/ProjectSection.module.css";
import { Card } from "./Card";
import { motion, useMotionValue } from "framer-motion";
import { ButtonSlide } from "./ButtonSlide";

export const CarouselSection = () => {
  const [triggerTranslate, setTriggerTranslate] = useState(0);
  const dragX = useMotionValue(0);
  const cardsContent = [
    {
      title: "Memorama",
      paragraph:
        "Diviertete y trabajando tu mente y mejorando tu memorización con este simple juego",
      img: "./imgs/memorama.png",
    },
    {
      title: "ChatBot",
      paragraph:
        "Tienes preguntas diarias respecto a tus labores?, preguntale sin compromisos a este agente de IA y el te dara respuesta",
      img: "image1.png",
    },
    {
      title: "Pocket Professor",
      paragraph:
        "Sistema con simuladores para promover el ahorro, calcular metas, crear colchones de seguridad",
      img: "image1.png",
    },
    {
      title: "MicroServices Ecommerce",
      paragraph:
        "Sistema con simuladores para promover el ahorro, calcular metas, crear colchones de seguridad",
      img: "image1.png",
    },
    {
      title: "Pocket Professor",
      paragraph:
        "Sistema con simuladores para promover el ahorro, calcular metas, crear colchones de seguridad",
      img: "image1.png",
    },
  ];

  // const dragStart = () => {
  //   const x = dragX.get();
  // };

  const dragEnd = () => {
    const x = dragX.get();

    // aqui modificamos cuando se puede arrastrar las cards segun el length
    if (x <= -50 && triggerTranslate < cardsContent.length - 3) {
      setTriggerTranslate((prev) => prev + 1);
    } else if (x >= 50 && triggerTranslate > 0) {
      setTriggerTranslate((prev) => prev - 1);
    }

    dragX.set(0);
  };

  return (
    <AnimateIn className={styles.carousel_container}>
      <motion.div
        className={styles.carousel}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        dragTransition={{ bounceDamping: 20, bounceStiffness: 600 }}
        dragMomentum={false}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        // onDragStart={dragStart}
        onDragEnd={dragEnd}
        style={{
          x: dragX,
        }}
        animate={{ translateX: `-${triggerTranslate * 37}%` }}
      >
        <Card {...cardsContent[0]} />
        <Card {...cardsContent[1]} />
        <Card {...cardsContent[2]} />
        <Card {...cardsContent[3]} />
        <Card {...cardsContent[4]} />
      </motion.div>
      <ButtonSlide
        cardsLength={cardsContent.length}
        triggerTranslate={triggerTranslate}
        onSlideChange={setTriggerTranslate}
      />
    </AnimateIn>
  );
};
