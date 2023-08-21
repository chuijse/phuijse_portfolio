import { useEffect, useState, useRef } from "react";
import Description from "../components/Description";
import List from "../components/List";
import Seo from "../components/Seo";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Background from "../components/Background";
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
import Image from "next/image";
import { scroller } from "react-scroll";
import { useSwipeable } from "react-swipeable";

export default function Home({ isMobile, papers, courses }) {
  const carouselRef = useRef(null);
  const router = useRouter();
  const hash = router.query.number;

  const [counter, setCounter] = useState(0);
  const [index, setIndex] = useState(Boolean(hash) === true ? hash : 1);

  //console.log(Boolean(hash), hash);

  useEffect(() => {
    Boolean(hash) === true && setIndex(hash);
  }, [hash]);

  const handleWheel = (value) => {
    handleScroll(value.wheelDeltaY);
  };

  const handleScroll = (value) => {
    if (counter === 0) {
      if (value < 0 && index < 5) {
        setCounter(++counter);
        setIndex(++index);
        setTimeout(() => setCounter(--counter), 750);
      }

      if (value > 0 && index > 1) {
        setCounter(++counter);
        setIndex(--index);
        setTimeout(() => setCounter(--counter), 750);
      }
    }
    /*console.log(
      `scroll Up : ${value}, scrollPosition: ${index}, counter: ${counter}`
    );*/
    isMobile ? null : window.addEventListener("wheel", handleWheel);
    return () =>
      isMobile ? null : window.removeEventListener("wheel", handleWheel);
  };

  useEffect(() => scroller.scrollTo(index, { duration: 1500 }), [index]);

  const handlers = useSwipeable({
    onSwipedUp: (eventData) => {
      handleScroll(eventData.deltaY),
        console.log("User Swiped up!", eventData.deltaY);
    },
    onSwipedDown: (eventData) => {
      handleScroll(eventData.deltaY),
        console.log("User Swiped down!", eventData.deltaY);
    },
  });

  //console.log(index);

  return (
    <motion.article
      draggable
      onWheel={(e) => handleWheel(e)}
      className="index-container"
      //onPanEnd={onPan}
      {...handlers}
    >
      <Background />
      <Seo />
      <Nav index={index} setIndex={setIndex} />
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
    </motion.article>
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
