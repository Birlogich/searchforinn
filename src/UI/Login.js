import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/login/loginActions";
import { Button } from "./Button";
import styles from "./Login.module.css";
import { ReactComponent as Google } from "../assets/images/google.svg";
import { ReactComponent as Facebook } from "../assets/images/facebook.svg";
import { ReactComponent as Yandex } from "../assets/images/yandex.svg";
import { ReactComponent as Lock } from "../assets/images/lock.svg";

export const Login = () => {
  const dispatch = useDispatch();

  const hadnleRegisterState = () => {
    setIsLogin(false);
  };

  const hadnleLoginState = () => {
    setIsLogin(true);
  };
  //Специально так захардкодил, все равно только один логин и пароль подходят

  const regexPhone = new RegExp("sf_student1");
  const regexPassword = new RegExp("4i2385j");

  const [isLogin, setIsLogin] = useState(true);

  const [isMatch, setIsMatch] = useState({
    login: false,
    password: false,
  });

  /*   const handleMatch = (str, regExp, e) => {
    const trueValue = { ...isMatch, [e.target.name]: true };
    const falseValue = { ...isMatch, [e.target.name]: false };
    if (str.length > 4) {
      if (regExp.test(str)) {
        setIsMatch(trueValue);
      } else {
        setIsMatch(falseValue);
      }
    } else {
      setIsMatch(falseValue);
    }
  };

  const handleChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value.trim() };

    if (e.target.name === "login") {
      handleMatch(e.target.value.trim(), regexPhone, e);
    }
    if (e.target.name === "password") {
      handleMatch(e.target.value.trim(), regexPassword, e);
    }
  }; */

  /*   const getUser = (e) => {
    e.preventDefault();
    fetch("https://gateway.scan-interfax.ru/api/v1/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        login: user.login,
        password: user.password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        const { accessToken, expire } = json;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("expire", expire);
      });
  }; */

  return (
    <form className={styles.login__form} /* onSubmit={(e) => getUser(e)} */>
      <Lock className={styles.login__lock} />
      <div className={styles.login__header}>
        <button
          type="button"
          className={styles.login__header_button}
          onClick={hadnleLoginState}
        >
          Войти
        </button>
        <button
          type="button"
          className={styles.login__header_button}
          onClick={hadnleRegisterState}
        >
          Зарегистрироваться
        </button>
      </div>
      <div className={styles.login__body}>
        <label className={styles.login__label}>
          Логин или номер телефона:
          <input
            type="text"
            value={user.login}
            name="login"
            className={
              isMatch.login
                ? `${styles.login__input}`
                : `${styles.login__input} ${styles.login__input_false}`
            }
            onChange={() => dispatch(loginUser(user.login))}
          ></input>
          {!isMatch.login ? (
            <p className={styles.login__error}>Введите корректные данные</p>
          ) : null}
        </label>
        <label className={styles.login__label}>
          Пароль:
          <input
            type="text"
            value={user.password}
            name="password"
            className={
              isMatch.password
                ? `${styles.login__input}`
                : `${styles.login__input} ${styles.login__input_false}`
            }
            onChange={() => dispatch(loginUser(user.password))}
          ></input>
          {!isMatch.password ? (
            <p className={styles.login__error}>Неправильный пароль</p>
          ) : null}
        </label>
      </div>
      {isLogin === true ? (
        <Button
          title="Войти"
          className={styles.login__btn}
          autoFocus={true}
          disabled={isMatch.login && isMatch.password ? false : true}
        />
      ) : (
        <Button
          title="Зарегистрироваться"
          className={styles.login__btn}
          disabled={isMatch.login && isMatch.password ? false : true}
        />
      )}
      <button title="Войти" type="button" className={styles.login__recovery}>
        Восстановить пароль
      </button>
      <p className={styles.login__enter}>Войти через:</p>
      <div className={styles.login__footer}>
        <button type="button" className={styles.login__social}>
          <Google />
        </button>
        <button type="button" className={styles.login__social}>
          <Facebook />
        </button>
        <button type="button" className={styles.login__social}>
          <Yandex />
        </button>
      </div>
    </form>
  );
};
