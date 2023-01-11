import PaperList from "../components/List";
import Seo from "../components/Seo";
import { client } from "../lib/sanity.client";
import { groq } from "next-sanity";

export default function Home({ isMobile, courses }) {
  return (
    <div>
      <Seo pageTitle="my papers" />
      <article className="papers-layot">
        <PaperList
          isCourses={true}
          isMobile={isMobile}
          list={true}
          items={courses}
          title="All courses"
          hash="4"
          selected={true}
        />
      </article>
    </div>
  );
}

export async function getStaticProps() {
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
      courses,
    },
  };
}
