import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <div className={styles.header}>
      <button>
        <Logo />
      </button>
      <div
        style={{
          maxWidth: "236px",
          display: "flex",
          justifyContent: "space-between",
          margin: "-50px 0",
          width: "100%",
        }}
      >
        <button className={styles.header__link}>Главная</button>
        <button className={styles.header__link}>Тарифы</button>
        <button className={styles.header__link}>FAQ</button>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className={styles.header__link}
          style={{ opacity: 0.4, marginRight: "20px" }}
        >
          Зарегистрироваться
        </button>
        <div
          style={{
            background: "#029491",
            opacity: 0.6,
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            display: "block",
            width: "2px",
            height: "26px",
            padding: 0,
          }}
        ></div>
        <button className={(styles.header__link, styles.header__button)}>
          Войти
        </button>
      </div>
    </div>
  );
};
