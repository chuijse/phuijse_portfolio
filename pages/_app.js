import "../styles/index.scss";
import { useMediaQuery } from "react-responsive";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [hideOnMobile, setHideOnMobile] = useState(false);

  useEffect(() => {
    setHideOnMobile(isMobile);
  }, [isMobile]);

  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} isMobile={hideOnMobile} key={router.asPath} />;
    </AnimatePresence>
  );
}

export default MyApp;
