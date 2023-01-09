import { useEffect, useState } from "react";
import Description from "../components/Description";
import List from "../components/List";
import Seo from "../components/Seo";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { useRef } from "react";
import { client } from "../lib/sanity.client";
import { groq } from "next-sanity";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useInView,
  useMotionValueEvent,
} from "framer-motion";
import { scroller } from "react-scroll";

const scroll = scroller;

export default function Home({ isMobile, papers, courses }) {
  const [counter, setCounter] = useState(0);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const handleWheel = (e) => {
      const wheelDirection = e.wheelDelta;
      if (counter === 0) {
        if (wheelDirection < 0 && index < 5) {
          setCounter(++counter);
          setIndex(++index);
          setTimeout(() => setCounter(--counter), 750);
        }

        if (wheelDirection > 0 && index > 1) {
          setCounter(++counter);
          setIndex(--index);
          setTimeout(() => setCounter(--counter), 750);
        }
      }

      /*console.log(
        `scroll Up : ${wheelDirection}, scrollPosition: ${index}, counter: ${counter}`
      );*/
    };

    isMobile ? null : window.addEventListener("wheel", handleWheel);

    return () =>
      isMobile ? null : window.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => scroller.scrollTo(index), [index]);

  return (
    <article>
      <Description isMobile={isMobile} id="1" />
      <List isMobile={isMobile} items={papers} id="2" />
      <Skills id="3" />
      <List
        id="4"
        isCourses={true}
        isMobile={isMobile}
        items={courses}
        title="Best courses"
        url="courses"
        courses={true}
      />
      <Contact id="5" />
    </article>
  );
}

export async function getStaticProps() {
  const papers = await client.fetch(`*[_type == "paper"]`);
  const courses = await client.fetch(groq`*[_type == "course"]{
    _id,
    name,
    startYear,
    finalYear,
    abstract,
    repository,
    "institutions": institutions[]->{program, institution, url}
  }`);

  return {
    props: {
      papers,
      courses,
    },
  };
}
