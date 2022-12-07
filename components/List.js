import React from "react";
import SeeMore from "./SeeMore";
import Title from "./Title";
import BackHome from "./BackHome";
import title from "./Title";

export default function List({
  isMobile,
  list = false,
  items,
  title = "Best Papers",
  url = "papers",
}) {
  return (
    <section className={list ? "grid-list" : "grid-layout"}>
      <div className={list ? "item-title-list" : "item-title"}>
        <Title>{title}</Title>
      </div>
      <div className={list ? "item-all-papers-list" : "item-paperlist"}>
        {list && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam
            molestie at condimentum velit, adipiscing nunc justo, molestie.
            Donec diam molestie at condimentum velit, adipiscing nunc justo,
            molestie.
          </p>
        )}
        {items.map((item, i) => (
          <Item
            name={item.name}
            i={i}
            key={`best-paper-${i}`}
            magasine={item.magasine}
            content={item.content}
            date={item.date}
          />
        ))}
      </div>
      {!list && (
        <React.Fragment>
          <div className="item-see-more">
            <SeeMore url={url} />
          </div>
          <div className="item-bottom-line" />
        </React.Fragment>
      )}
      {list && (
        <div className="item-home-button">
          <BackHome />
        </div>
      )}
    </section>
  );
}

function Item({ name, magasine, date, i, content }) {
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
            <strong>{magasine || content}&nbsp;</strong>
            <span className="gray">{date}</span>
          </h5>
        </div>
      </div>
    </li>
  );
}
