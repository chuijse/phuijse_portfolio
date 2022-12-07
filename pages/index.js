import Description from "../components/Description";
import List from "../components/List";
import Seo from "../components/Seo";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home({ isMobile }) {
  return (
    <div>
      <Seo pageTitle="home" />
      <article className="home-layout">
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
