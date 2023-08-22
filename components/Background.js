import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
  scroll,
} from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";

export default function Background({ isMobile }) {
  const { scrollYProgress } = useScroll({
    layoutEffect: true,
  });
  const springScroll = useSpring(0, { stiffness: 25, damping: 25 });
  const [yPositionSpring, setYPositionSpring] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    springScroll.set(latest);
    //console.log(yPosition);
  });

  useMotionValueEvent(springScroll, "change", (latest) => {
    setYPositionSpring(latest);
  });

  console.log(springScroll.current);

  return (
    <motion.div
      style={{ translateY: `${yPositionSpring * -20}%` }}
      className="backgound-image"
    >
      <Image
        src={isMobile ? "/space_vertical.png" : "/space.png"}
        layout="fill"
        className="image"
        priority
      />
    </motion.div>
  );
}
