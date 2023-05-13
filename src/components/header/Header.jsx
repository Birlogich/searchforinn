import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Burger } from "../../UI/Burger";
import { VscChromeClose } from "react-icons/vsc";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleResize = (e) => {
      setWindowWidth(e.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  const menuOpen = () => {
    setIsActive(true);
  };

  const menuСlose = () => {
    setIsActive(false);
  };

  return (
    <>
      {windowWidth <= 768 ? (
        <div className={styles.header__mobile}>
          <Logo className={styles.header__logo} />
          <Burger className={styles.header__burger} onClick={menuOpen} />
          <div
            className={
              !isActive ? styles.header__column : styles.header__column_open
            }
          >
            <button>
              {" "}
              <VscChromeClose
                className={styles.header__column_close}
                onClick={menuСlose}
              />
            </button>
            <button className={styles.header__link}>Главная</button>
            <button className={styles.header__link}>Тарифы</button>
            <button className={styles.header__link}>FAQ</button>
            <button className={styles.header__link_reg}>
              Зарегистрироваться
            </button>
            <div className={styles.header__link_login}></div>
            <button className={(styles.header__link, styles.header__button)}>
              Войти
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.header__wrapper}>
          <Logo className={styles.header__logo} />
          <div className={styles.header__links}>
            <button className={styles.header__link}>Главная</button>
            <button className={styles.header__link}>Тарифы</button>
            <button className={styles.header__link}>FAQ</button>
          </div>
          <div className={styles.header__login}>
            <button className={styles.header__link_reg}>
              Зарегистрироваться
            </button>
            <div className={styles.header__link_login}></div>
            <button className={(styles.header__link, styles.header__button)}>
              Войти
            </button>
          </div>
        </div>
      )}
    </>
  );
};
