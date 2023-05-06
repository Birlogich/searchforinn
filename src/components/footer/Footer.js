import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div
      style={{
        background: "#029491",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          display: "flex",
          justifyContent: "space-between",
          height: "137px",
          padding: "25px 60px",
          margin: "0 auto",
        }}
      >
        <button>
          <Logo />
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
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
