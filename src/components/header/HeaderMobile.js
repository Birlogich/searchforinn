import { useState } from "react";
import { useSelector } from "react-redux";
import { Preloader } from "konsta/react";
import { userData } from "../../store/user/userSelector";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Burger } from "../../UI/Burger";
import { VscChromeClose } from "react-icons/vsc";

export const HeaderMobile = () => {
  const accessToken = localStorage.getItem("accessToken");
  const usedCompanyCount = localStorage.getItem("usedCompanyCount");
  const companyLimit = localStorage.getItem("companyLimit");
  const { status } = useSelector(userData);
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  const menuOpen = () => {
    setIsActive(true);
  };

  const menuСlose = () => {
    setIsActive(false);
  };

  const unLoginUser = () => {
    localStorage.removeItem("accessToken");
    navigate("..", { relative: "path" });
    setIsActive(false);
  };

  return (
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
        <Link
          to="/"
          className={styles.header__link}
          onClick={() => menuСlose()}
        >
          Главная
        </Link>
        <Link
          to="*"
          className={styles.header__link}
          onClick={() => menuСlose()}
        >
          Тарифы
        </Link>
        <Link
          to="*"
          className={styles.header__link}
          onClick={() => menuСlose()}
        >
          FAQ
        </Link>
        {!accessToken ? (
          <>
            <Link
              to="*"
              className={styles.header__link_reg}
              onClick={() => menuСlose()}
            >
              Зарегистрироваться
            </Link>
            <div className={styles.header__link_login}></div>
            <Link
              to="autorization"
              className={(styles.header__link, styles.header__button)}
              onClick={() => menuСlose()}
            >
              Войти
            </Link>
          </>
        ) : (
          <>
            {status === "loading" ? (
              <div
                className={styles.header__statistics}
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Preloader size="w-4 h-4" className="k-color-brand-grey" />
              </div>
            ) : (
              <div className={styles.header__statistics}>
                <p className={styles.header__statistics_text}>
                  Использовано компаний{" "}
                  <span className={styles.header__statistics_used}>
                    {usedCompanyCount}
                  </span>
                </p>
                <p className={styles.header__statistics_text}>
                  Лимит по компаниям{" "}
                  <span className={styles.header__statistics_limit}>
                    {companyLimit}
                  </span>
                </p>
              </div>
            )}
            <button
              to="/"
              className={`${styles.header__link} ${styles.header__link_logout}`}
              style={{ position: "relative", marginRight: "14%" }}
              onClick={unLoginUser}
            >
              Выйти
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
