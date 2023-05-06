import { MainRequest } from "./MainRequest/MainRequest";
import { MainWhy } from "./MainWhy/MainWhy";
import { Carousel } from "./MainWhy/Carousel/Carousel";
import { MainTariff } from "./MainTariff/MainTariff";
export const Main = () => {
  return (
    <>
      <MainRequest />;
      <MainWhy />
      <Carousel />
      <img
        src={require("../../assets/images/man.png")}
        alt="man"
        style={{ marginBottom: "105px" }}
      />
      <MainTariff />
    </>
  );
};
