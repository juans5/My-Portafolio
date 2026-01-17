export const getCardPosition = (
  cardRefs: React.RefObject<(HTMLDivElement | null)[]>,
  index: number
): number => {
  const card = cardRefs.current?.[index];
  const firstCard = cardRefs.current?.[0];
  if (!card || !firstCard) return 0;

  const position = -(card.offsetLeft - firstCard.offsetLeft);

  return position;
};

export const getVisibleCardsCount = (
  carouselRef: React.RefObject<HTMLDivElement>,
  cardRefs: React.RefObject<(HTMLDivElement | null)[]>,
  gap: number = 48
): number => {
  if (!carouselRef || !cardRefs.current || cardRefs.current.length === 0) return 1;

  const containerWidth = carouselRef.current?.offsetWidth;
  const cardWidth = cardRefs.current[0]?.offsetWidth || 0;

  return Math.floor(containerWidth / (cardWidth + gap)) || 1;
};

export const clampIndex = (index: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, index));
};
