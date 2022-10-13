import React from "react";
import Title from "./Title";

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

export default function BestPapers({ isMobile }) {
  return (
    <section className="grid-layout">
      <div className="item-title">
        <Title title={"Best Papers"} />
      </div>
      <div className="item-paperlist">
        <ul>
          {papers.map((paper, i) => (
            <li key={`best-paper-${i}`}>
              <p>{paper.name}</p>
              <p>{paper.magasine}</p>
              <p>{paper.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
