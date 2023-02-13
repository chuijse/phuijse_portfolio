import { useEffect, useState } from "react";
import Description from "../components/Description";
import List from "../components/List";
import Seo from "../components/Seo";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { client } from "../lib/sanity.client";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import Nav from "../components/Nav";
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

export default function Home({ isMobile, papers, courses }) {
  const router = useRouter();
  const hash = router.query.number;

  const [counter, setCounter] = useState(0);
  const [index, setIndex] = useState(hash ? hash : 1);

  /*useEffect(() => {
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
      );
    isMobile ? null : window.addEventListener("wheel", handleWheel);
    return () =>
      isMobile ? null : window.removeEventListener("wheel", handleWheel);
  });
  */

  useEffect(() => scroller.scrollTo(index), [index]);

  //console.log(index);

  return (
    <article>
      <Seo />
      {/*<Nav index={index} setIndex={setIndex} />*/}
      <motion.div>
        <Description isMobile={isMobile} id="1" />
      </motion.div>
      <Skills id="2" isMobile={isMobile} />
      <List isMobile={isMobile} items={papers} id="3" />
      <List
        id="4"
        isCourses={true}
        isMobile={isMobile}
        items={courses}
        title="Selected Courses"
        url="courses"
        courses={true}
      />
      <Contact id="5" />
    </article>
  );
}

export async function getStaticProps({ query }) {
  const papers = await client.fetch(
    `*[_type == "paper" && selected == true]| order(year) [0...3]`
  );
  const courses =
    await client.fetch(groq`*[_type == "course" && selected == true] | order(startYear) {
    _id,
    name,
    selected,
    startYear,
    finalYear,
    abstract,
    repository,
    "institutions": institutions[]->{program, institution, url}
  }[0...3]`);
  const hash = query;
  return {
    props: {
      papers,
      courses,
      //hash: hash,
    },
  };
}
