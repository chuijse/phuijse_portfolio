import Head from "next/head";
import Image from "next/image";
import Description from "../components/Description";
import BestPapers from "../components/BestPapers";
import Seo from "../components/Seo";

export default function Home({ isMobile }) {
  return (
    <div>
      <Seo />
      <article className="home-layout">
        <Description isMobile={isMobile} />
        <BestPapers isMobile={isMobile} />
      </article>
    </div>
  );
}
