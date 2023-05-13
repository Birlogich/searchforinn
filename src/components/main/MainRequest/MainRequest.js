import { Button } from "../../../UI/Button";
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
        <Button className={styles.mainrequest__btn} title="Запросить данные" />
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
