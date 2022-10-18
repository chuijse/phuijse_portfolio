import React from "react";
import Title from "./Title";
import Image from "next/image";
import profilePic from "../images/pablo.png";
import ScrollDown from "./ScrollDown";
import Icons from "./Icons";
import Div100vh from "react-div-100vh";

//445 x 653

export default function Description({ isMobile }) {
  return (
    <section className="grid-layout">
      <div className="item-title">
        <Title>Pablo Huijse Heise</Title>
      </div>
      <div className="item-image">
        <Image
          src={profilePic}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="top left"
          // blurDataURL="data:..." automatically provided
          placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <div className="item-abstract">
        <p>
          Pablo nació en Valdivia , Chile en 1985. Recibió su B.Sc. y PE en
          <strong>Ingeniería Eléctrica de la Universidad de Chile</strong> en
          2009. Recibió su{" "}
          <b>doctorado en Ingeniería Eléctrica de la Universidad de Chile</b> en
          2014. En 2015-2017 realizó un{" "}
          <b>postdoctorado en el Instituto Milenio de Astrofísica</b> (MAS).
          Desde 2018 es un joven investigador del MAS y profesor asistente del
          Instituto de Informática de la Universidad Austral de Chile . También
          participa en el proyecto ALeRCE. Su investigación trata sobre métodos
          computacionales para analizar datos astronómicos y sus áreas de
          especialización son el aprendizaje automático, el aprendizaje
          profundo, la inferencia bayesiana, el procesamiento estadístico de
          señales y la teoría de la información.
        </p>
      </div>
      <div className="item-scroll-button">
        <ScrollDown />
      </div>
      <div className="item-icons">
        <Icons isMobile={isMobile} />
      </div>
    </section>
  );
}
