import PaperList from "../components/List";
import Seo from "../components/Seo";
import { client } from "../lib/sanity.client";
import { groq } from "next-sanity";

export default function Home({ isMobile, papers }) {
  return (
    <div>
      <Seo
        pageTitle="Papers"
        description="A list of journal and conference papers where Pablo Huijse has participated"
      />
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
