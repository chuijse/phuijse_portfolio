import "../styles/index.scss";
import { useMediaQuery } from "react-responsive";
import React, { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [hideOnMobile, setHideOnMobile] = useState(false);

  useEffect(() => {
    setHideOnMobile(isMobile);
  }, [isMobile]);

  return <Component {...pageProps} isMobile={hideOnMobile} />;
}

export default MyApp;
