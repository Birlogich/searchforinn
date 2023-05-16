import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer__wrapper}>
      <div className={`${styles.footer__row}`}>
        <button>
          <Logo />
        </button>
        <div className={styles.footer__copyrigth}>
          <p className={styles.footer__adress} style={{ marginBottom: "21px" }}>
            г. Москва, Цветной б-р, 40 <br /> +7 495 771 21 11 <br />{" "}
            info@skan.ru
          </p>
          <span className={styles.footer__adress} style={{ fontSize: "12px" }}>
            Copyright. 2022
          </span>
        </div>
      </div>
    </div>
  );
};
