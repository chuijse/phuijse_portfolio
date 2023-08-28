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
import { motion, AnimatePresence } from "framer-motion";
import { scroller } from "react-scroll";
import { useSwipeable } from "react-swipeable";
import Modal from "../components/VideoModal";

export default function Home({ isMobile, papers, courses, presentations }) {
  const router = useRouter();
  const hash = router.query.number;

  const [counter, setCounter] = useState(0);
  const [index, setIndex] = useState(Boolean(hash) === true ? hash : 1);
  const [isVideoModal, setVideoModal] = useState(false);
  const [isModalIndex, setModalIndex] = useState(0);

  //console.log(Boolean(hash), hash);

  useEffect(() => {
    document.querySelector("html").classList.add("home-html");
  });

  useEffect(() => {
    Boolean(hash) === true && setIndex(hash);
  }, [hash]);

  const handleWheel = (value) => {
    //(isModalIndex);
    handleScroll(value.wheelDeltaY);
  };

  const handleScroll = (value) => {
    if (counter === 0) {
      if (value < 0 && index < 6) {
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
    isMobile || isVideoModal === true
      ? null
      : window.addEventListener("wheel", handleWheel);
    return () =>
      isMobile || isVideoModal === true
        ? null
        : window.removeEventListener("wheel", handleWheel);
  };

  useEffect(() => scroller.scrollTo(index, { duration: 1500 }), [index]);

  const handlers = useSwipeable({
    onSwipedUp: (eventData) => {
      handleScroll(eventData.deltaY);
      //console.log("User Swiped up!", eventData.deltaY);
    },
    onSwipedDown: (eventData) => {
      handleScroll(eventData.deltaY);
      //console.log("User Swiped down!", eventData.deltaY);
    },
  });

  //console.log(index);

  return [
    <motion.article
      key={"index-main"}
      onWheel={(e) => isVideoModal === false && handleWheel(e)}
      className="index-container"
      //onPanEnd={onPan}
      {...(isVideoModal === false ? { ...handlers } : null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
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
        documentType="course"
        isMobile={isMobile}
        items={courses}
        title="Selected Courses"
        url="courses"
      />
      <List
        id="5"
        documentType="presentation"
        isMobile={isMobile}
        items={presentations}
        title="Selected presentations"
        url="presentations"
        setVideoModal={setVideoModal}
        setModalIndex={setModalIndex}
      />
      <Contact id="6" />
    </motion.article>,
    <AnimatePresence key={"index-Modal"}>
      {isVideoModal && (
        <Modal
          setIsOpen={setVideoModal}
          items={presentations}
          index={isModalIndex}
        />
      )}
    </AnimatePresence>,
  ];
}

export async function getStaticProps({ query }) {
  const papers = await client.fetch(
    `*[_type == "paper" && selected == true]| order(year) [0...3]`
  );

  const presentations = await client.fetch(
    `*[_type == "presentation"]| order(year) [0...3]{
      title,
      venue,
      year,
      repository,
      selected,
      "video": video.asset->url
    }`
  );

  const courses =
    await client.fetch(groq`*[_type == "course" && selected == true] | order(startYear) {
    _id,
    title,
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
      presentations,
      //hash: hash,
    },
  };
}
