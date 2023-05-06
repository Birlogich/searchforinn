import { CarouselCard } from "./CarouselCard/CarouselCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { ReactComponent as ArrowNext } from "../../../../assets/images/arrow-next.svg";
import { ReactComponent as ArrowPrev } from "../../../../assets/images/arrow-prev.svg";

export const Carousel = () => {
  const responsive = {
    376: {
      items: 1,
    },
    568: {
      items: 2,
    },
    1024: {
      items: 3,
      itemsFit: "contain",
    },
  };

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <CarouselCard
      text={"Высокая и оперативная скорость обработки заявки"}
      src={require("../../../../assets/images/timer.png")}
      alt={"timer"}
      onDragStart={handleDragStart}
    />,
    <CarouselCard
      text={
        "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"
      }
      src={require("../../../../assets/images/glass.png")}
      alt={"glass"}
      onDragStart={handleDragStart}
    />,
    <CarouselCard
      text={
        "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"
      }
      src={require("../../../../assets/images/shield.png")}
      alt={"shield"}
      onDragStart={handleDragStart}
    />,
  ];

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "0px -30px",
      }}
      responsive={responsive}
      disableDotsControls="false"
      renderPrevButton={() => {
        return (
          <button style={{ position: "absolute", top: "50%", left: 0 }}>
            <ArrowPrev />
          </button>
        );
      }}
      renderNextButton={() => {
        return (
          <button style={{ position: "absolute", top: "50%", right: 0 }}>
            <ArrowNext />
          </button>
        );
      }}
    />
  );
};
