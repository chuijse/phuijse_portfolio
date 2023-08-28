import React, { useRef } from "react";
import Title from "./Title";
import Image from "next/image";
import profilePic from "../images/pablo.png";
import ScrollDown from "./ScrollDown";
import Icons from "./Icons";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

//445 x 653

export default function Description({ isMobile, id = "undefined" }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.section className="grid-layout" id={id}>
      <div className="item-title-main" ref={ref}>
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
      <motion.div
        className="item-abstract-background"
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        initial={{ opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: 1 }}
      />
      <div className="item-abstract">
        <motion.div
          className="abstract-content"
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            Hello, this is my website, I am a{" "}
            <b>Post Doctorate in electrical engineering</b>, I have been
            actively developing research from 2014 to date and it is focused on
            computational methods to analyze astronomical data. I invite you to
            visit my website.
          </p>
          <div className="content-buttons">
            <Link href={"/bio"}>
              <button>
                <a className="link">BIO</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M17 1C17 0.447715 16.5523 0 16 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H15V10C15 10.5523 15.4477 11 16 11C16.5523 11 17 10.5523 17 10V1ZM1.70711 16.7071L16.7071 1.70711L15.2929 0.292893L0.292893 15.2929L1.70711 16.7071Z"
                    fill="#49DFF3"
                  />
                </svg>
              </button>
            </Link>
            <Link href={"/contact"}>
              <button>
                <a className="link">Contact</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M17 1C17 0.447715 16.5523 0 16 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H15V10C15 10.5523 15.4477 11 16 11C16.5523 11 17 10.5523 17 10V1ZM1.70711 16.7071L16.7071 1.70711L15.2929 0.292893L0.292893 15.2929L1.70711 16.7071Z"
                    fill="#49DFF3"
                  />
                </svg>
              </button>
            </Link>
          </div>
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

/*
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
          */
