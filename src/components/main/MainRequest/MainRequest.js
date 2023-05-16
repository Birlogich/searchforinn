import { Link } from "react-router-dom";
import styles from "./MainRequest.module.css";

export const MainRequest = () => {
  return (
    <div className={styles.mainrequest}>
      <div className={styles.mainrequest__textwrapper}>
        <div className={styles.mainrequest__text}>
          <p className={styles.mainrequest__textservice}>
            сервис по поиску публикаций о компании по его ИНН
          </p>
          <p className={styles.mainrequest__textsanalyze}>
            Комплексный анализ публикаций, получение данных в формате PDF на
            электронную почту.
          </p>
        </div>
        <Link to="search" className={styles.mainrequest__btn}>
          Запросить данные
        </Link>
      </div>
      <div className={styles.mainrequest__img}>
        <img
          src={require("../../../assets/images/main.png")}
          alt="logo"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
