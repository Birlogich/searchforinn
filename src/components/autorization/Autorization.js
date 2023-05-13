import { useState, useEffect } from "react";
import { Login } from "../../UI/Login";
import styles from "./Autorization.module.css";

export const Autorization = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => {
      setWindowWidth(e.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowWidth >= 1060 ? (
        <div className={styles.autorization__row}>
          <div className={styles.autorization__column}>
            <p className={styles.autorization__title}>
              Для оформления подписки на тариф, необходимо авторизоваться.
            </p>
            <img
              className={styles.autorization__img}
              src={require("../../assets/images/characters.png")}
              alt="characters"
            />
          </div>
          <div className={styles.autorization__column}>
            <Login />
          </div>
        </div>
      ) : (
        <div className={styles.autorization__column}>
          <p className={styles.autorization__title}>
            Для оформления подписки на тариф, необходимо авторизоваться.
          </p>
          <Login />
          <img
            className={styles.autorization__img}
            src={require("../../assets/images/characters.png")}
            alt="characters"
          />
        </div>
      )}
    </>
  );
};
