import React from "react";
import Title from "./Title";
import Image from "next/image";
import profilePic from "../images/pablo.jpeg";

//445 x 653

export default function Description({}) {
  return (
    <React.Fragment>
      <section className="description-grid">
        <div className="item-title">
          <Title title={"Pablo Huijse Heise"} />
        </div>
        <div className="item-image">
          <Image
            src={profilePic}
            alt="Picture of the author"
            layout="fixed"
            //objectFit="cover"
            // blurDataURL="data:..." automatically provided
            placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="item-abstract">
          <p>
            Pablo nació en Valdivia , Chile en 1985. Recibió su B.Sc. y PE en
            Ingeniería Eléctrica de la Universidad de Chile en 2009. Recibió su
            doctorado en Ingeniería Eléctrica de la Universidad de Chile en
            2014. En 2015-2017 realizó un postdoctorado en el Instituto Milenio
            de Astrofísica (MAS). Desde 2018 es un joven investigador del MAS y
            profesor asistente del Instituto de Informática de la Universidad
            Austral de Chile . También participa en el proyecto ALeRCE. Su
            investigación trata sobre métodos computacionales para analizar
            datos astronómicos y sus áreas de especialización son el aprendizaje
            automático, el aprendizaje profundo, la inferencia bayesiana, el
            procesamiento estadístico de señales y la teoría de la información.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
