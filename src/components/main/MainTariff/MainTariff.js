import styles from "./MainTariff.module.css";
import { Card } from "../../../UI/Card";

export const MainTariff = () => {
  return (
    <>
      <div className={styles.maintariff}>
        <p className={styles.mainTariff__text}>наши тарифы</p>
      </div>
      <div className={styles.maintariff__row}>
        <Card
          title={"Beginner"}
          textFor={"Для небольшого исследования"}
          currentTariff={"Текущий тариф"}
          price={"799 ₽"}
          oldPrice={"1 200 ₽"}
          payment={"или 150 ₽/мес. при рассрочке на 24 мес."}
          includeText={"В тариф входит:"}
          option1={"Безлимитная история запросов"}
          option2={"Безопасная сделка"}
          option3={"Поддержка 24/7"}
          btnText={"Подробнее"}
        />
        <Card
          title={"Beginner"}
          textFor={"Для небольшого исследования"}
          currentTariff={"Текущий тариф"}
          price={"799 ₽"}
          oldPrice={"1 200 ₽"}
          payment={"или 150 ₽/мес. при рассрочке на 24 мес."}
          includeText={"В тариф входит:"}
          option1={"Безлимитная история запросов"}
          option2={"Безопасная сделка"}
          option3={"Поддержка 24/7"}
          btnText={"Подробнее"}
        />
        <Card
          title={"Beginner"}
          textFor={"Для небольшого исследования"}
          currentTariff={"Текущий тариф"}
          price={"799 ₽"}
          oldPrice={"1 200 ₽"}
          payment={"или 150 ₽/мес. при рассрочке на 24 мес."}
          includeText={"В тариф входит:"}
          option1={"Безлимитная история запросов"}
          option2={"Безопасная сделка"}
          option3={"Поддержка 24/7"}
          btnText={"Подробнее"}
        />
      </div>
    </>
  );
};
