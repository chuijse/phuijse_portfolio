import "../styles/index.scss";
import { useMediaQuery } from "react-responsive";
import React, { useState, useLayoutEffect } from "react";

function MyApp({ Component, pageProps, scroll }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [hideOnMobile, setHideOnMobile] = useState(false);

  useLayoutEffect(() => {
    setHideOnMobile(isMobile);
  }, [isMobile]);

  console.log(scroll);

  return <Component {...pageProps} isMobile={hideOnMobile} />;
}

export default MyApp;
