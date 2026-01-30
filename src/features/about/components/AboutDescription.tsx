import { motion } from "framer-motion";

export const AboutDescription = ({ className }: { className: string }) => {
  const paragraph = `Mi acercamiento al desarrollo de software comenzó hace un año, al finalizar la escuela, como una exploración sin un camino rígido. 
Desde entonces, el desarrollo web se convirtió en el espacio donde invertía gran parte de mi tiempo, enfrentándome a retos de diseño, 
nuevas funcionalidades y experiencias de usuario cada vez más cuidadas y satisfactorias. A lo largo de este proceso he desarrollado un enfoque principalmente autodidacta, guiado por la práctica constante y el uso de recursos en línea. 
Actualmente continúo aprendiendo con la misma motivación por crecer y profundizar en este campo.`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: 15, y: 15 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
    >
      <h2> FullStack Developer | UX Designer | Self-Taught </h2>
      <p>
        {paragraph.split(" ").map((char, index) => (
          <motion.span
            key={index}
            style={{ display: "inline-block", marginRight: "0.25em" }}
            variants={childVariants}
          >
            {char}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};
