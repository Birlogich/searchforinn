import styles from "./CarouselCard.module.css";

export const CarouselCard = ({ src, text, alt }) => {
  return (
    <div className={styles.card}>
      <img
        src={src}
        alt={alt}
        style={{
          objectFit: "contain",
          width: "64px",
          height: "64px",
          marginBottom: "12px",
        }}
      />
      <p
        style={{
          textAlign: "left",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "22px",
          letterSpacing: "0.01em",
          color: "#000000",
        }}
      >
        {text}
      </p>
    </div>
  );
};
