import PaperList from "../components/List";
import Seo from "../components/Seo";
import { client } from "../lib/sanity.client";
import { groq } from "next-sanity";
import Background from "../components/Background";
import { useEffect } from "react";

export default function Home({ isMobile, papers }) {
  useEffect(() => {
    document.querySelector("html").classList.remove("home-html");
  });

  return (
    <div>
      <Seo
        pageTitle="Papers"
        description="A list of journal and conference papers where Pablo Huijse has participated"
      />
      <Background isMobile={isMobile} />
      <article className="papers-layot">
        <PaperList
          isMobile={isMobile}
          list={true}
          items={papers}
          title="All papers"
          hash="3"
          selected={true}
        />
      </article>
    </div>
  );
}

export async function getStaticProps() {
  const papers = await client.fetch(
    `*[_type == "paper"] | order(year) [0...3]`
  );

  return {
    props: {
      papers,
    },
  };
}
