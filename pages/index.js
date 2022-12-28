import Description from "../components/Description";
import List from "../components/List";
import Seo from "../components/Seo";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { useRef } from "react";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
});

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useInView,
} from "framer-motion";

export default function Home({ isMobile, papers }) {
  console.log(papers);

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

export async function getStaticProps() {
  const papers = await client.fetch(`*[_type == "paper"]`);

  return {
    props: {
      papers,
    },
  };
}

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
