import { useEffect, useState } from "react";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => {
      setWindowWidth(e.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return <div>{windowWidth <= 768 ? <HeaderMobile /> : <HeaderDesktop />}</div>;
};
