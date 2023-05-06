import { MainTariffCard } from "./MainTariffCards/MainTariffCard";

export const MainTariff = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        <p
          style={{
            fontFamily: "Ferry",
            fontSize: "45px",
            maxWidth: "700px",
            marginBottom: "70px",
          }}
        >
          наши тарифы
        </p>
      </div>
      <MainTariffCard />
    </>
  );
};
