import { Button } from "./Button";
import styles from "./Login.module.css";
import { ReactComponent as Google } from "../assets/images/google.svg";
import { ReactComponent as Facebook } from "../assets/images/facebook.svg";
import { ReactComponent as Yandex } from "../assets/images/yandex.svg";
import { ReactComponent as Lock } from "../assets/images/lock.svg";

export const Login = () => {
  return (
    <form className={styles.login__form}>
      <Lock className={styles.login__lock} />
      <div className={styles.login__header}>
        <button className={styles.login__header_button}>Войти</button>
        <button className={styles.login__header_button}>
          Зарегистрироваться
        </button>
      </div>
      <div className={styles.login__body}>
        <label className={styles.login__label}>
          Логин или номер телефона:
          <input type="text" className={styles.login__input}></input>
        </label>
        <label className={styles.login__label}>
          Пароль:
          <input type="text" className={styles.login__input}></input>
        </label>
      </div>
      <Button title="Войти" className={styles.login__btn} />
      <button title="Войти" className={styles.login__recovery}>
        Восстановить пароль
      </button>
      <p className={styles.login__enter}>Войти через:</p>
      <div className={styles.login__footer}>
        <button className={styles.login__social}>
          <Google />
        </button>
        <button className={styles.login__social}>
          <Facebook />
        </button>
        <button className={styles.login__social}>
          <Yandex />
        </button>
      </div>
    </form>
  );
};
