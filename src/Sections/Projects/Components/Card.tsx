import styles from "../../../Styles/ProjectSection.module.css";

interface CardProps {
  title: string;
  paragraph: string;
  img: string;
}

export const Card = ({ title, paragraph, img }: CardProps) => {
  return (
    <div className={styles.card_container}>
      <h3>{title}</h3>
      <img src={img} alt="imagen del projecto" width={"100%"} height={"50%"} />
      <p>{paragraph}</p>
      <button>See Stack</button>
    </div>
  );
};
