import { ReactComponent as Lamp } from "../assets/images/lamp.svg";
import { BsCheck } from "react-icons/bs";
import { Button } from "./Button";
import styles from "./Card.module.css";

export const Card = ({
  title,
  textFor,
  currentTariff,
  price,
  oldPrice,
  payment,
  includeText,
  option1,
  option2,
  option3,
  btnText,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div>
          <p className={styles.cardHeaderTitle}>{title}</p>
          <p className={styles.cardHeaderText}>{textFor}</p>
        </div>
        <Lamp />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyPrice}>
          <span className={styles.cardBodyPriceCurrent}>{currentTariff}</span>
          <div className={styles.CardBodyPrice}>
            <span className={styles.CardBodyPriceNew}>{price}</span>
            <span className={styles.CardBodyPriceOld}>{oldPrice}</span>
          </div>
          <p className={styles.cardBodyPricePayment}>{payment}</p>
        </div>
        <div className={styles.cardBodyTariff}>
          <p className={styles.cardBodyTariffTitle}>{includeText}</p>
          <p className={styles.cardBodyTariffProns}>
            <BsCheck className={styles.cardBodyIcon} />
            {option1}
          </p>
          <p className={styles.cardBodyTariffProns}>
            <BsCheck className={styles.cardBodyIcon} />
            {option2}
          </p>
          <p className={styles.cardBodyTariffPronsLast}>
            <BsCheck className={styles.cardBodyIcon} />
            {option3}
          </p>
        </div>
        <Button title={btnText} className={styles.cardBtn} />
      </div>
    </div>
  );
};
