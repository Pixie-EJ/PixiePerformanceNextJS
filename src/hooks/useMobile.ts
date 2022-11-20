import { useState, useEffect } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(true);

  const handleResizeScreen = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    handleResizeScreen();
    window.addEventListener("resize", handleResizeScreen);
  });

  return isMobile;
};

// TODO refatorar esse cara aqui
export default useMobile;
