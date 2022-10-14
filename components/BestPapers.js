import React from "react";
import SeeMore from "./SeeMore";
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
        {papers.map((paper, i) => (
          <Paper
            name={paper.name}
            i={i}
            key={`best-paper-${i}`}
            magasine={paper.magasine}
            date={paper.date}
          />
        ))}
      </div>
      <div className="item-see-more">
        <SeeMore />
      </div>
      <div className="item-bottom-line" />
    </section>
  );
}

function Paper({ name, magasine, date, i }) {
  return (
    <li>
      <div className="paper-number-list">
        <h5>
          <strong>{i + 1}</strong>
        </h5>
      </div>
      <div>
        <h3>{name}</h3>
        <div className="paper-data">
          <h5>
            <strong>{magasine}&nbsp;</strong>
            <span className="gray">{date}</span>
          </h5>
        </div>
      </div>
    </li>
  );
}
