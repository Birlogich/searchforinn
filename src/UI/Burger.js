import styles from "./Burger.module.css";

export const Burger = ({ onClick }) => {
  return (
    <button className={styles.burger} onClick={onClick}>
      <span></span>
    </button>
  );
};
