import React, { useState, useRef, useEffect } from "react";
import SeeMore from "./SeeMore";
import Title from "./Title";
import BackHome from "./BackHome";
import { motion, useInView } from "framer-motion";
import style from "../styles/abstract/_color.module.scss";

const motionIcon = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.5 } },
};

const motionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.8 },
  },
};

export default function List({
  isCourses = false,
  isMobile,
  list = false,
  items,
  title = "Selected Papers",
  url = "papers",
  id = "undefined",
  hash = "none",
  selected = false,
  setIndex,
}) {
  return (
    <motion.section className={list ? "grid-list" : "grid-layout"} id={id}>
      <div className={list ? "item-title-list" : "item-title"}>
        <Title once={selected}>{title}</Title>
      </div>
      <motion.div
        variants={motionContainer}
        initial="hidden"
        whileInView="show"
        className={list ? "item-all-papers-list" : "item-paper-list"}
      >
        {list && (
          <p>
            Click on the title of a {isCourses ? "course" : "paper"} to see its
            abstract
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
            selected={selected}
          />
        ))}
      </motion.div>
      {!list && (
        <React.Fragment>
          <motion.div
            className="item-see-more"
            initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <SeeMore url={url} />
          </motion.div>
          <motion.div
            className="item-bottom-line"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </React.Fragment>
      )}
      {list && (
        <div className="item-home-button">
          <BackHome hash={hash} />
        </div>
      )}
    </motion.section>
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
  selected,
}) {
  const [isSelected, setSelected] = useState(false);

  return (
    <motion.li
      variants={motionIcon}
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
          whileHover={selected && { color: style.primaryColor }}
          animate={
            selected && {
              color: isSelected ? style.primaryColor : style.textColor,
            }
          }
          initial={selected && { cursor: "pointer" }}
        >
          {name}
        </motion.h3>

        {selected && (
          <motion.p
            initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
            t
            animate={{
              height: isSelected ? "auto" : "0px",
              opacity: isSelected ? 1 : 0,
              paddingBottom: isSelected ? 5 : 0,
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
        )}

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
