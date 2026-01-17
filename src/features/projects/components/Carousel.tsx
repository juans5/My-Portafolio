import styles from "../ProjectSection.module.css";
import { motion } from "framer-motion";
import { AnimateIn } from "@/shared/components/index";
import { useCarousel } from "../hooks/useCarousel";
import { Card, ButtonSlide } from "./index";
import { cardContent } from "../data";
export const CarouselSection = () => {
  const {
    triggerTranslate,
    setTriggerTranslate,
    dragX,
    handleDragEnd,
    cardRefs,
    carouselRef,
    translateValue,
    maxIndex,
  } = useCarousel(cardContent.length);

  return (
    <AnimateIn className={styles.carousel_container}>
      <motion.div
        ref={carouselRef}
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
        onDragEnd={handleDragEnd}
        style={{
          x: dragX,
        }}
        animate={{ translateX: translateValue }}
      >
        {cardContent.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={styles.card_container}
          >
            <Card {...card} />
          </div>
        ))}
      </motion.div>
      <ButtonSlide
        triggerTranslate={triggerTranslate}
        onSlideChange={setTriggerTranslate}
        maxIndex={maxIndex}
      />
    </AnimateIn>
  );
};
