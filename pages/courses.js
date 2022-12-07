import Image from "next/image";
import Description from "../components/Description";
import PaperList from "../components/List";
import Seo from "../components/Seo";

const courses = [
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

export default function Home({ isMobile }) {
  return (
    <div>
      <Seo pageTitle="my papers" />
      <article className="papers-layot">
        <PaperList
          isMobile={isMobile}
          list={true}
          items={courses}
          title="All courses"
        />
      </article>
    </div>
  );
}
