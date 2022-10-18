import React from "react";
import SeeMore from "./SeeMore";
import Title from "./Title";
import BackHome from "./BackHome";

export default function PaperList({ isMobile, allPapers = false, papers }) {
  return (
    <section className={allPapers ? "grid-list" : "grid-layout"}>
      <div className={allPapers ? "item-title-list" : "item-title"}>
        <Title>Best Papers</Title>
      </div>
      <div className={allPapers ? "item-all-papers-list" : "item-paperlist"}>
        {allPapers && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam
            molestie at condimentum velit, adipiscing nunc justo, molestie.
            Donec diam molestie at condimentum velit, adipiscing nunc justo,
            molestie.
          </p>
        )}
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
      {!allPapers && (
        <React.Fragment>
          <div className="item-see-more">
            <SeeMore url="papers" />
          </div>
          <div className="item-bottom-line" />
        </React.Fragment>
      )}
      {allPapers && (
        <div className="item-home-button">
          <BackHome />
        </div>
      )}
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
