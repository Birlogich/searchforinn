import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CarouselCard } from "./CarouselCard/CarouselCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styles from "./Carousel.module.css";

export const Carousel = () => {
  const swiperRef = useRef();

  const sliderSettings = {
    375: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <div className={styles.carousel__row}>
      <button>
        <BsChevronLeft
          className={styles.carousel__arr_left}
          onClick={() => swiperRef.current?.slidePrev()}
        />
      </button>
      <Swiper
        slidesPerView={3}
        breakpoints={sliderSettings}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        style={{ padding: "10px" }}
      >
        <SwiperSlide>
          <CarouselCard
            text={"Высокая и оперативная скорость обработки заявки"}
            src={require("../../../../assets/images/timer.png")}
            alt={"timer"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            text={
              "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"
            }
            src={require("../../../../assets/images/glass.png")}
            alt={"glass"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            text={
              "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"
            }
            src={require("../../../../assets/images/shield.png")}
            alt={"shield"}
          />
        </SwiperSlide>
      </Swiper>
      <button>
        <BsChevronRight
          className={styles.carousel__arr_right}
          onClick={() => swiperRef.current?.slideNext()}
        />
      </button>
    </div>
  );
};
