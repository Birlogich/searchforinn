import { ReactComponent as Lamp } from "../../../../assets/images/lamp.svg";
import styles from "./MainTariffCard.module.css";
import { BsCheck } from "react-icons/bs";
import { Button } from "../../../../UI/Button";

export const MainTariffCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div>
          <p className={styles.cardHeaderTitle}>Beginner</p>
          <p className={styles.cardHeaderText}>Для небольшого исследования</p>
        </div>
        <Lamp />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyPrice}>
          <span className={styles.cardBodyPriceCurrent}>Текущий тариф</span>
          <div className={styles.CardBodyPrice}>
            <span className={styles.CardBodyPriceNew}>799 ₽</span>
            <span className={styles.CardBodyPriceOld}>1 200 ₽</span>
          </div>
          <p className={styles.cardBodyPricePayment}>
            или 150 ₽/мес. при рассрочке на 24 мес.
          </p>
        </div>
        <div className={styles.cardBodyTariff}>
          <p className={styles.cardBodyTariffTitle}>В тариф входит:</p>
          <p className={styles.cardBodyTariffProns}>
            <BsCheck className={styles.cardBodyIcon} /> Безлимитная история
            запросов
          </p>
          <p className={styles.cardBodyTariffProns}>
            <BsCheck className={styles.cardBodyIcon} /> Безопасная сделка
          </p>
          <p className={styles.cardBodyTariffPronsLast}>
            <BsCheck className={styles.cardBodyIcon} /> Поддержка 24/7
          </p>
        </div>
        <Button title={"Перейти в личный кабинет"} className={styles.cardBtn} />
      </div>
    </div>
  );
};
