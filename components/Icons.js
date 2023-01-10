import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const iconsLists = [
  {
    href: "https://orcid.org/0000-0003-3541-1697",
    icon: "emojione-monotone:id-button",
  },
  {
    href: "https://github.com/phuijse",
    icon: "akar-icons:github-fill",
  },
  {
    href: "https://scholar.google.cl/citations?user=rXrpAcIAAAAJ&hl=en",
    icon: "academicons:google-scholar-square",
  },
];

const motionIcon = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const motionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 1.5 },
  },
};

export default function Icons({ isMobile }) {
  console.log(iconsLists);

  return (
    <React.Fragment>
      <motion.div
        variants={motionContainer}
        initial="hidden"
        whileInView="show"
        className="icons-root"
      >
        {iconsLists.map((data, i) => (
          <MotionIcon
            isMobile={isMobile}
            color="white"
            icon={data.icon}
            href={data.href}
            key={`motion-icon-${i}`}
          />
        ))}
      </motion.div>
    </React.Fragment>
  );
}

function MotionIcon({ href, color, icon, isMobile }) {
  const size = isMobile ? "32" : "40";

  return (
    <motion.a
      variants={motionIcon}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Icon icon={icon} color={color} width={size} height={size} />
    </motion.a>
  );
}
