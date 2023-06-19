import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { userData } from "../../store/user/userSelector";
import { Link, useNavigate } from "react-router-dom";
import { Preloader } from "konsta/react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

export const HeaderDesktop = () => {
  const [userInfo, setUserInfo] = useState({
    stateUsedCompanyCount: undefined,
    stateCompanyLimit: undefined,
  });
  const accessToken = localStorage.getItem("accessToken");
  const usedCompanyCount = localStorage.getItem("usedCompanyCount");
  const companyLimit = localStorage.getItem("companyLimit");
  const { status } = useSelector(userData);
  const navigate = useNavigate();

  const unLoginUser = () => {
    localStorage.removeItem("accessToken");
    navigate("..", { relative: "path" });
  };

  useEffect(() => {
    setUserInfo({
      stateUsedCompanyCount: usedCompanyCount,
      stateCompanyLimit: companyLimit,
    });
  }, [usedCompanyCount, companyLimit, accessToken]);

  return (
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
      {accessToken ? (
        <div className={styles.header__login}>
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
                  {userInfo.stateUsedCompanyCount}
                </span>
              </p>
              <p className={styles.header__statistics_text}>
                Лимит по компаниям{" "}
                <span className={styles.header__statistics_limit}>
                  {userInfo.stateCompanyLimit}
                </span>
              </p>
            </div>
          )}
          <div className={styles.header__user}>
            <span className={styles.header__user_name}>Алексей А.</span>
            <img
              src={require("../../assets/images/avatar.png")}
              alt="logo"
              style={{ objectFit: "contain" }}
              className={styles.header__user_avatar}
            />
            <button
              className={`${styles.header__link} ${styles.header__link_logout}`}
              onClick={unLoginUser}
            >
              Выйти
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.header__login} style={{ maxWidth: "251px" }}>
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
      )}
    </nav>
  );
};
