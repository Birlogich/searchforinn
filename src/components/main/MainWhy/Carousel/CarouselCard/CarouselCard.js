import styles from "./CarouselCard.module.css";

export const CarouselCard = ({ src, text, alt }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={src} alt={alt} />
      <p className={styles.card__text}>{text}</p>
    </div>
  );
};
