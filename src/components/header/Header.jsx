import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="container">
      {windowWidth <= 768 ? (
        <nav className={styles.header__mobile}>
          <Link to="/" className={styles.header__link}>
            <Logo className={styles.header__logo} />
          </Link>
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
            <Link to="/" className={styles.header__link}>
              Главная
            </Link>
            <Link to="*" className={styles.header__link}>
              Тарифы
            </Link>
            <Link to="*" className={styles.header__link}>
              FAQ
            </Link>
            <Link to="*" className={styles.header__link_reg}>
              Зарегистрироваться
            </Link>
            <div className={styles.header__link_login}></div>
            <Link
              to="autorization"
              className={(styles.header__link, styles.header__button)}
            >
              Войти
            </Link>
          </div>
        </nav>
      ) : (
        <nav className={styles.header__wrapper}>
          <Link to="/" className={styles.header__link}>
            <Logo className={styles.header__logo} />
          </Link>
          <div className={styles.header__links}>
            <Link to="/" className={styles.header__link}>
              Главная
            </Link>
            <Link to="*" className={styles.header__link}>
              Тарифы
            </Link>
            <Link to="*" className={styles.header__link}>
              FAQ
            </Link>
          </div>
          <div className={styles.header__login}>
            <Link to="*" className={styles.header__link_reg}>
              Зарегистрироваться
            </Link>
            <div className={styles.header__link_login}></div>
            <Link
              to="autorization"
              className={(styles.header__link, styles.header__button)}
            >
              Войти
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};
