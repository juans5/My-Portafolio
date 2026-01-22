import { motion } from "framer-motion";

export const AboutDescription = ({ className }: { className: string }) => {
  const paragraph =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, at totam molestia possimus modi quas debitis consequatur dolorem quidem iure maxime cumque ex ratione ducimussequi quibusdam distinctio illum facilis sunt laborum nam ipsam";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
        duration: 0.3,
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
      <h2> FullStack Developer | UI/UX Apassionate | Desire for Learning </h2>

      {paragraph.split(" ").map((char, index) => (
        <motion.span
          key={index}
          style={{ display: "inline-block", marginRight: "0.25em" }}
          variants={childVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
