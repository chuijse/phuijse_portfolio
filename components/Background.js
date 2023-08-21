import {
  motion,
  useScroll,
  scroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

export default function Background({ carouselRef, mobilIndex }) {
  const { scrollYProgress } = useScroll();
  //console.log(scrollYProgress.lastUpdated);

  //console.log(scrollYProgress);
  //const yPosition = useTransform(scrollYProgress, [0, 1], [0, 100]);

  //scroll((progress) => console.log(progress));

  const [yPosition, setYPosition] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setYPosition(latest);
    //console.log(yPosition);
  });

  //console.log(yPosition);

  return (
    <motion.div
      //animate={{ y: `${yPosition * -10}%` }}
      style={{ translateY: `${yPosition * -20}%` }}
      //transition={{ duration: 2, ease: "easeInOut" }}
      className="backgound-image"
    >
      <h1>{mobilIndex}</h1>
      <Image src={"/space.png"} layout="fill" className="image" />
    </motion.div>
  );
}
