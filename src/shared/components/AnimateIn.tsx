import { motion, useAnimation, useInView, type MotionStyle } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimateInProps {
  className?: string;
  styles?: MotionStyle;
  id?: string;
  children: React.ReactNode;
}

export const AnimateIn = ({ className, styles, children, id }: AnimateInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.section
      ref={ref}
      className={className}
      style={styles}
      id={id}
      variants={{
        hidden: { opacity: 0, y: 70 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </motion.section>
  );
};
