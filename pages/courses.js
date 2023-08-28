import PaperList from "../components/List";
import Seo from "../components/Seo";
import { client } from "../lib/sanity.client";
import { groq } from "next-sanity";
import Background from "../components/Background";
import { useEffect } from "react";

export default function Home({ isMobile, courses }) {
  useEffect(() => {
    document.querySelector("html").classList.remove("home-html");
  });

  return (
    <article>
      <Background isMobile={isMobile} />
      <Seo
        pageTitle="Courses"
        description="A list of university courses that has been dictated by Pablo Huijse. These courses are related to Machine Learning, Neural Networks, Data Science, Statistics and Signal Processing."
      />
      <PaperList
        documentType="course"
        isMobile={isMobile}
        list={+true}
        items={courses}
        title="All courses"
        hash="4"
        selected={+true}
      />
    </article>
  );
}

export async function getStaticProps() {
  const courses =
    await client.fetch(groq`*[_type == "course"] | order(startYear){
    _id,
    title,
    startYear,
    finalYear,
    abstract,
    repository,
    "institutions": institutions[]->{program, institution, url}
  } `);

  return {
    props: {
      courses,
    },
  };
}
