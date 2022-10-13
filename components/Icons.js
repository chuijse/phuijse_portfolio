import React from "react";
import { Icon } from "@iconify/react";

export default function Icons({ isMobile }) {
  const size = isMobile ? "32" : "40";
  console.log(isMobile);

  return (
    <React.Fragment>
      <div className="icons-root">
        <Icon
          icon="emojione-monotone:id-button"
          color="white"
          width={size}
          height={size}
        />
        <Icon
          icon="akar-icons:github-fill"
          color="white"
          width={size}
          height={size}
        />
        <Icon
          icon="academicons:google-scholar-square"
          color="white"
          width={size}
          height={size}
        />
      </div>
    </React.Fragment>
  );
}
