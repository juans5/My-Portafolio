import { motion } from "framer-motion";

export const GradientSphere = () => {
  return (
    <motion.div
      style={{
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: "radial-gradient(circle at center, #02182b 0%, #08415c 50%, #001323 100%)",
        filter: "blur(80px)", // Un toque estético opcional
      }}
      animate={{
        scale: [1, 1.2, 0.8], // Efecto de "respiración"
        rotate: [25, 45, 90], // Rotación sutil
        x: [0, 30, -30, 10], // Movimiento errático suave en X
        y: [-10, -40, 20, -30], // Movimiento errático suave en Y
      }}
      transition={{
        duration: 8, // Que sea muy lento (8 segundos)
        ease: "easeInOut", // Movimiento fluido
        repeat: Infinity, // Nunca se detiene
        repeatType: "mirror", // Va y vuelve suavemente
      }}
    />
  );
};
