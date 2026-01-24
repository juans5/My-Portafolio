import { useEffect, useRef, useState } from "react";
import { useMotionValue } from "framer-motion";
import { getCardPosition, getVisibleCardsCount } from "../utils/index";

export const useCarousel = (cardLength: number) => {
  const [triggerTranslate, setTriggerTranslate] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [maxIndex, setMaxIndex] = useState(cardLength - 1);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null!);
  const dragX = useMotionValue(0);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, cardLength);
  }, [cardLength]);

  useEffect(() => {
    const position = getCardPosition(cardRefs, triggerTranslate);
    setTranslateValue(position);
  }, [triggerTranslate]);

  useEffect(() => {
    const handleResize = () => {
      const visibleCount = getVisibleCardsCount(carouselRef, cardRefs);
      setMaxIndex(Math.max(0, cardLength - visibleCount));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cardLength]);

  const handleDragEnd = () => {
    const x = dragX.get();

    if (x <= -15 && triggerTranslate < maxIndex) {
      setTriggerTranslate((prev) => prev + 1);
    } else if (x >= 15 && triggerTranslate > 0) {
      setTriggerTranslate((prev) => prev - 1);
    }
    dragX.set(0);
  };

  return {
    cardRefs,
    carouselRef,
    translateValue,
    handleDragEnd,
    triggerTranslate,
    setTriggerTranslate,
    dragX,
    maxIndex,
  };
};
