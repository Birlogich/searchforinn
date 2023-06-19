import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styles from "./Histograms.module.css";
import { Preloader } from "konsta/react";

export const Histograms = ({
  histogramsDataStatus,
  histogramsDataFromServer,
}) => {
  const swiperRef = useRef();

  const [histograms, setHistograms] = useState(null);

  useEffect(() => {
    if (histogramsDataFromServer) {
      const totalDocuments = histogramsDataFromServer[0]?.data;
      const riskFactors = histogramsDataFromServer[1]?.data;

      const newRiskFactorObj = riskFactors?.map((obj) => {
        return {
          date: (obj.date = new Date().toLocaleDateString()),
          riskValue: obj.value,
        };
      });

      const result = totalDocuments?.map((y) =>
        Object.assign(
          y,
          newRiskFactorObj.find((x) => x.id === y.id)
        )
      );
      setHistograms(result);
    }

    return undefined;
  }, [histogramsDataFromServer]);

  const sliderSettings = {
    375: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 8,
      spaceBetween: 18,
    },
  };

  if (histogramsDataStatus === "loading") {
    return (
      <div className={styles.histograms__wrapper}>
        <p className={styles.histograms__title}>Общая сводка</p>
        <p className={styles.histograms__subtitle}>
          Найдено <Preloader size="w-4 h-4" className="k-color-brand-grey" />{" "}
          вариантов
        </p>
        <div className={styles.histograms__row}>
          <button>
            <BsChevronLeft
              className={styles.histograms__arr_left}
              onClick={() => swiperRef.current?.slidePrev()}
            />
          </button>
          <div
            className={styles.histograms__swiper}
            style={{
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Preloader size="w-10 h-10" className="k-color-brand-grey" />
              <p className={styles.histograms__loadtext}>Загружаем данные</p>
            </div>
          </div>
          <button>
            <BsChevronRight
              className={styles.histograms__arr_right}
              onClick={() => swiperRef.current?.slideNext()}
            />
          </button>
        </div>
      </div>
    );
  }

  if (histogramsDataStatus === "fullfiled") {
    return (
      <>
        {histograms && (
          <div className={styles.histograms__wrapper}>
            <p className={styles.histograms__title}>Общая сводка</p>
            <p className={styles.histograms__subtitle}>
              Найдено {histograms.length} вариантов
            </p>
            <div className={styles.histograms__row}>
              <button>
                <BsChevronLeft
                  className={styles.histograms__arr_left}
                  onClick={() => swiperRef.current?.slidePrev()}
                />
              </button>
              <Swiper
                className={styles.histograms__swiper}
                slidesPerView={3}
                breakpoints={sliderSettings}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                <SwiperSlide className={styles.histograms__swiper_leftcolumn}>
                  <p>Период</p>
                  <p>Всего</p>
                  <p>Риски</p>
                </SwiperSlide>
                {histograms.map((item, idx) => {
                  return (
                    <SwiperSlide className={styles.histograms__slide} key={idx}>
                      <p className={styles.histograms__info}>{item.date}</p>
                      <p className={styles.histograms__info}>{item.value}</p>
                      <p className={styles.histograms__info}>
                        {item.riskValue}
                      </p>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <button>
                <BsChevronRight
                  className={styles.histograms__arr_right}
                  onClick={() => swiperRef.current?.slideNext()}
                />
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
};
