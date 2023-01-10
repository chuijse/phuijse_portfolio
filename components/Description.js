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
        {isMobile ? (
          <motion.p
            className="paragraph-description-mobil"
            initial={{ y: "-100%", clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{
              y: isInView ? 0 : "-100%",
              clipPath: isInView
                ? "inset(0% 0% 0% 0%)"
                : "inset(100% 0% 0% 0%)",
            }}
            transition={{ duration: 0.5, delay: isInView ? 1 : 0 }}
          >
            <li className="paragraph-list">
              Ingeniero Eléctrico de la Universidad de Chile,
              <span className="light"> 2009</span>
            </li>
            <li className="paragraph-list">
              Doctorado en Ingeniera Eléctrico de la Universidad de Chile ,
              <span className="light"> 2014</span>
            </li>
            <li className="paragraph-list">
              Postdoctorado en el Instituto Milenio de Astrofísica (MAS),
              <span className="light"> 2015 - 2017</span>
            </li>
            <li className="paragraph-list">
              Investigador del MAS, profesor asistente del Instituto de
              Informática de la Universidad Austral de Chile y participante en
              el proyecto ALeRCE ,
              <span className="light"> 2018 - presente</span>
            </li>
          </motion.p>
        ) : (
          <motion.p
            className="paragraph-description"
            initial={{ y: "-100%", clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{
              y: isInView ? 0 : "-100%",
              clipPath: isInView
                ? "inset(0% 0% 0% 0%)"
                : "inset(100% 0% 0% 0%)",
            }}
            transition={{ duration: 0.5, delay: isInView ? 1 : 0 }}
          >
            Pablo nació en Valdivia , Chile en 1985. Recibió su B.Sc. y PE en
            <strong> Ingeniería Eléctrica de la Universidad de Chile</strong> en
            2009. Recibió su{" "}
            <b>doctorado en Ingeniería Eléctrica de la Universidad de Chile</b>{" "}
            en 2014. En 2015-2017 realizó un{" "}
            <b>postdoctorado en el Instituto Milenio de Astrofísica</b> (MAS).
            Desde 2018 es un joven investigador del MAS y{" "}
            <b>
              profesor asistente del Instituto de Informática de la Universidad
              Austral de Chile . También participa en el proyecto ALeRCE.
            </b>{" "}
            Su investigación trata sobre métodos computacionales para analizar
            datos astronómicos y sus áreas de especialización son el aprendizaje
            automático, el aprendizaje profundo, la inferencia bayesiana, el
            procesamiento estadístico de señales y la teoría de la información.
          </motion.p>
        )}
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
