import styles from "./MainTariff.module.css";
import { Card } from "../../../UI/Card";
import { accessToken } from "../../../utils";

export const MainTariff = () => {
  return (
    <>
      <div className={styles.maintariff}>
        <p className={styles.mainTariff__text}>наши тарифы</p>
      </div>
      <div className={styles.maintariff__row}>
        <Card
          accessToken={accessToken}
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
          image={"lamp"}
        />
        <Card
          title={"Pro"}
          textFor={"Для HR и фрилансеров"}
          currentTariff={"Текущий тариф"}
          price={"1 299 ₽"}
          oldPrice={"2 600 ₽"}
          payment={"или 279 ₽/мес. при рассрочке на 24 мес."}
          includeText={"В тариф входит:"}
          option1={"Все пункты тарифа Beginner"}
          option2={"Экспорт истории"}
          option3={"Рекомендации по приоритетам"}
          btnText={"Подробнее"}
          bgColor={{ backgroundColor: "#7CE3E1" }}
          image={"aim"}
        />
        <Card
          title={"Business"}
          textFor={"Для корпоративных клиентов"}
          currentTariff={"Текущий тариф"}
          price={"2 379 ₽"}
          oldPrice={"3 700 ₽"}
          payment={"или 150 ₽/мес. при рассрочке на 24 мес."}
          includeText={"В тариф входит:"}
          option1={"Все пункты тарифа Pro"}
          option2={"Безлимитное количество запросов"}
          option3={"Приоритетная поддержка"}
          btnText={"Подробнее"}
          bgColor={{ backgroundColor: "#000000" }}
          textColor={{ color: "white" }}
          image={"laptop"}
        />
      </div>
    </>
  );
};
