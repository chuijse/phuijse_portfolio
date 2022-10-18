import Description from "../components/Description";
import PaperList from "../components/PapersList";
import Seo from "../components/Seo";
import Skills from "../components/Skills";

export default function Home({ isMobile }) {
  return (
    <div>
      <Seo pageTitle="home" />
      <article className="home-layout">
        <Description isMobile={isMobile} />
        <PaperList isMobile={isMobile} papers={papers} />
        <Skills />
      </article>
    </div>
  );
}

const papers = [
  {
    name: "The delay of shock breakout due to circumstellar material evident in most type II supernovae",
    magasine: "Nature Astronomy",
    date: "2018/10",
  },
  {
    name: "The delay of shock breakout due to circumstellar material evident in most type II supernovae",
    magasine: "Nature Astronomy",
    date: "2018/10",
  },
  {
    name: "The delay of shock breakout due to circumstellar material evident in most type II supernovae",
    magasine: "Nature Astronomy",
    date: "2018/10",
  },
];
