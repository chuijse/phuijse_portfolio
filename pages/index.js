import Description from "../components/Description";
import List from "../components/List";
import Seo from "../components/Seo";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { useRef } from "react";
import Image from "next/image";
import image from "../images/1.jpg";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useInView,
} from "framer-motion";

export default function Home({ isMobile }) {
  return (
    <article>
      <Description isMobile={isMobile} />
      <List isMobile={isMobile} items={papers} />
      <Skills />
      <List
        isMobile={isMobile}
        items={courses}
        title="Best courses"
        url="courses"
        courses={true}
      />
      <Contact />
    </article>
  );
}

const papers = [
  {
    name: "The delay of shock breakout due to circumstellar material evident in most type II supernovae",
    magasine: "Nature Astronomy",
    date: "2018/10",
  },
  {
    name: "The delay of shock breakout due to circumstellar material evident in most type II supernovae",
    magasine: "Nature Astronomy",
    date: "2018/10",
  },
  {
    name: "The delay of shock breakout due to circumstellar material evident in most type II supernovae",
    magasine: "Nature Astronomy",
    date: "2018/10",
  },
];

const courses = [
  {
    name: "Introducción al método de Monte Carlo y a MCMC",
    content: "math",
    date: "2018/10",
  },
  {
    name: "Introducción al método de Monte Carlo y a MCMC",
    content: "AI",
    date: "2018/10",
  },
  {
    name: "Introducción al método de Monte Carlo y a MCMC",
    content: "Astrophicis",
    date: "2018/10",
  },
];

/*<Description isMobile={isMobile} />
        <List isMobile={isMobile} items={papers} />
        <Skills />
        <List
          isMobile={isMobile}
          items={courses}
          title="Best courses"
          url="courses"
          courses={true}
        />
        <Contact />*/
