import { MainRequest } from "./MainRequest/MainRequest";
import { MainWhy } from "./MainWhy/MainWhy";
import { Carousel } from "./MainWhy/Carousel/Carousel";
import { MainTariff } from "./MainTariff/MainTariff";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <>
      <MainRequest />
      <MainWhy />
      <Carousel />
      <div className={styles.main__img}>
        <img
          src={require("../../assets/images/man.png")}
          alt="man"
          style={{ marginBottom: "105px" }}
        />
      </div>
      <MainTariff />
    </>
  );
};
