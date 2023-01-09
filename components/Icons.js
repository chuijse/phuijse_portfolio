import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Icons({ isMobile }) {
  const size = isMobile ? "32" : "40";
  //console.log(isMobile);

  return (
    <React.Fragment>
      <div className="icons-root">
        <a
          href="https://orcid.org/0000-0003-3541-1697"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            icon="emojione-monotone:id-button"
            color="white"
            width={size}
            height={size}
          />
        </a>
        <a href="https://github.com/phuijse" target="_blank" rel="noreferrer">
          <Icon
            icon="akar-icons:github-fill"
            color="white"
            width={size}
            height={size}
          />
        </a>
        <a
          href="https://scholar.google.cl/citations?user=rXrpAcIAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            icon="academicons:google-scholar-square"
            color="white"
            width={size}
            height={size}
          />
        </a>
      </div>
    </React.Fragment>
  );
}
