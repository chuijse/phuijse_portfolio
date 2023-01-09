import React, { useState } from "react";
import SeeMore from "./SeeMore";
import Title from "./Title";
import BackHome from "./BackHome";
import title from "./Title";
import { motion } from "framer-motion";
import style from "../styles/abstract/_color.module.scss";

export default function List({
  isCourses = false,
  isMobile,
  list = false,
  items,
  title = "Selected Papers",
  url = "papers",
  id = "undefined",
  hash = "none",
}) {
  return (
    <section className={list ? "grid-list" : "grid-layout"} id={id}>
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
            isCourse={isCourses}
            abstract={item.abstract}
            name={isCourses ? item.name : item.title}
            i={i}
            key={`best-paper-${i}`}
            magazine={item.journal}
            institutions={item.institutions}
            date={
              isCourses ? `${item.startYear} to ${item.finalYear}` : item.year
            }
            url={isCourses ? item.repository : item.doi}
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
          <BackHome hash={hash} />
        </div>
      )}
    </section>
  );
}

function Item({
  isCourse,
  name,
  magazine,
  date,
  i,
  institutions,
  url,
  abstract,
}) {
  const [isSelected, setSelected] = useState(false);

  return (
    <motion.li
      onTap={() => setSelected(!isSelected)}
      //onHoverEnd={() => setSelected(false)}
    >
      <div className="paper-number-list">
        <h5>
          <strong>{i + 1}</strong>
        </h5>
      </div>
      <div>
        <motion.h3
          //onHoverStart={() => setSelected(true)}
          whileHover={{ color: style.primaryColor }}
          animate={{ color: isSelected ? style.primaryColor : style.textColor }}
          initial={{ cursor: "pointer" }}
        >
          {name}
        </motion.h3>

        <motion.p
          initial={{ height: 0, opacity: 0 }}
          t
          animate={{
            height: isSelected ? "auto" : "0px",
            opacity: isSelected ? 1 : 0,
            //y: isSelected ? "0" : "-300px",
            clipPath: isSelected
              ? "inset(0% 0% 0% 0%)"
              : "inset(0% 0% 100% 0%)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="paper-abstract"
        >
          {abstract}
        </motion.p>

        <div className="paper-data">
          <h5>
            <strong>
              {magazine ||
                `${institutions[0].program}, ${institutions[0].institution}`}
              ,&nbsp;
            </strong>
            <span className="gray">{date}, </span>
            <a
              href={isCourse ? url : `http://doi.org/${url}`}
              target="_blank"
              rel="noreferrer"
            >
              {isCourse ? "Github" : url}
            </a>
          </h5>
        </div>
      </div>
    </motion.li>
  );
}
