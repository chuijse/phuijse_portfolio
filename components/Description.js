import React, { useRef } from "react";
import Title from "./Title";
import Image from "next/image";
import profilePic from "../images/pablo.png";
import ScrollDown from "./ScrollDown";
import Icons from "./Icons";
import Div100vh from "react-div-100vh";
import { motion, useInView } from "framer-motion";

//445 x 653

export default function Description({ isMobile, id = "undefined" }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.section className="grid-layout" id={id}>
      <div className="item-title" ref={ref}>
        <Title>{isMobile ? "Pablo Huijse H." : "Pablo Huijse Heise"}</Title>
      </div>
      <motion.div
        className="item-image"
        initial={{ x: 50, clipPath: "inset(0% 100% 0% 0%)" }}
        animate={{
          x: isInView ? 0 : 50,
          clipPath: isInView ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)",
        }}
        transition={{
          duration: isInView ? 0.8 : 0.5,
          delay: isInView ? 0.8 : 0,
        }}
      >
        <Image
          src={profilePic}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="top left"
          // blurDataURL="data:..." automatically provided
          placeholder="blur" // Optional blur-up while loading
        />
      </motion.div>
      <div className="item-abstract">
        <motion.div
          initial={{ y: "-100%", clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{
            y: isInView ? 0 : "-100%",
            clipPath: isInView ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
          }}
          transition={{ duration: 0.5, delay: isInView ? 1 : 0 }}
        >
          <li className="paragraph-list">
            <p className="paragraph-description">
              Assistant professor, Informatics Institute, Universidad Austral de
              Chile
            </p>
            <p className="light"> 2018 - present</p>
          </li>
          <li className="paragraph-list">
            <p className="paragraph-description">
              Young researcher, Millennium Institute of Astrophysics (MAS)
            </p>
            <p className="light"> 2018 - present</p>
          </li>
          <li className="paragraph-list">
            <p className="paragraph-description">
              Postdoctoral researcher, MAS
            </p>
            <p className="light"> 2015 - 2017</p>
          </li>
          <li className="paragraph-list">
            <p className="paragraph-description">
              PhD in Electrical Engineering, Universidad de Chile
            </p>
            <p className="light"> 2014</p>
          </li>
        </motion.div>
      </div>
      <div className="item-scroll-button">
        <ScrollDown isInView={isInView} />
      </div>
      <div className="item-icons">
        <Icons isMobile={isMobile} />
      </div>
    </motion.section>
  );
}
