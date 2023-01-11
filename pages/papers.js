import PaperList from "../components/List";
import Seo from "../components/Seo";
import { client } from "../lib/sanity.client";
import { groq } from "next-sanity";

export default function Home({ isMobile, papers }) {
  return (
    <div>
      <Seo pageTitle="my papers" />
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
  const papers = await client.fetch(`*[_type == "paper"]`);

  return {
    props: {
      papers,
    },
  };
}
