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
} from "framer-motion";

export default function Home({ isMobile, papers, courses }) {
  console.log(courses);
  return (
    <article>
      <Description isMobile={isMobile} />
      <List isMobile={isMobile} items={papers} />
      <Skills />
      <List
        isCourses={true}
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
