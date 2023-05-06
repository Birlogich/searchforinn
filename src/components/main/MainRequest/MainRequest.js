import { Button } from "../../../UI/Button";

export const MainRequest = () => {
  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontFamily: "Ferry",
              fontSize: "60px",
              maxWidth: "740px",
              marginBottom: "20px",
            }}
          >
            сервис по поиску публикаций о компании по его ИНН
          </p>
          <p
            style={{
              fontFamily: "Inter",
              fontSize: "20px",
              maxWidth: "543px",
              marginBottom: "70px",
            }}
          >
            Комплексный анализ публикаций, получение данных в формате PDF на
            электронную почту.
          </p>
        </div>
        <Button
          title="Запросить данные"
          style={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "22px",
            lineHeight: "27px",
            letterSpacing: "0.01em",
            backgroundColor: "#5970FF",
            color: "#FFFFFF",
            padding: "18px 64px",
            borderRadius: "5px",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "-20px",
          zIndex: -1,
          maxWidth: "629px",
        }}
      >
        <img
          src={require("../../../assets/images/main.png")}
          alt="logo"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
