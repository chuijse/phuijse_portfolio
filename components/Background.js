import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

export default function Background({ isMobile }) {
  const { scrollYProgress } = useScroll();
  const [yPosition, setYPosition] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setYPosition(latest);
    //console.log(yPosition);
  });

  // console.log(yPosition);

  return (
    <motion.div
      style={{ translateY: `${yPosition * -20}%` }}
      className="backgound-image"
    >
      <Image
        src={isMobile ? "/space_vertical.png" : "/space.png"}
        layout="fill"
        className="image"
      />
    </motion.div>
  );
}
