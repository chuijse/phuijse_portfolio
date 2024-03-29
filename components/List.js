import React, { useState, useRef, useEffect } from "react";
import SeeMore from "./SeeMore";
import Title from "./Title";
import BackHome from "./BackHome";
import { motion, useInView } from "framer-motion";
import style from "../styles/abstract/_color.module.scss";
import Modal from "./VideoModal";

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
  documentType = "paper",
  isMobile,
  list = false,
  items,
  title = "Selected Papers",
  url = "papers",
  id = "undefined",
  hash = "none",
  selected = false,
  setVideoModal,
  setModalIndex,
}) {
  //console.log(items);
  return (
    <motion.section className={list ? "grid-list" : "grid-layout"} id={id}>
      <div className={list ? "item-title-list" : "item-title"}>
        <Title once={selected}>{title}</Title>
      </div>
      <motion.div
        className={list ? "item-all-list-background" : "item-list-background"}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        initial={{ opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: 1 }}
      />
      <motion.div
        variants={motionContainer}
        initial="hidden"
        whileInView="show"
        className={list ? "item-all-papers-list" : "item-paper-list"}
      >
        {list && (
          <p>
            Click on the title of a {` ${documentType} `} to see its abstract
          </p>
        )}
        {items.map((item, i) => (
          <Item
            documentType={documentType}
            video={item.video}
            abstract={
              documentType === "presentation" ? item.venue : item.abstract
            }
            name={item.title}
            i={i}
            key={`best-paper-${i}`}
            magazine={item.journal}
            institutions={item.institutions}
            date={
              documentType === "course"
                ? `${item.startYear} to ${item.finalYear}`
                : item.year
            }
            url={documentType === "paper" ? item.doi : item.repository}
            selected={selected}
            setVideoModal={setVideoModal}
            setModalIndex={setModalIndex}
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
  documentType,
  name,
  magazine,
  date,
  i,
  institutions = null,
  url,
  abstract,
  selected,
  video,
  setVideoModal,
  setModalIndex,
}) {
  const [isSelected, setSelected] = useState(false);

  function handleModal(i) {
    setVideoModal(true);
    setModalIndex(i);
  }

  return [
    <motion.li
      variants={motionIcon}
      //onHoverEnd={() => setSelected(false)}
      key={`li-${documentType}-${i}`}
    >
      <div className="paper-number-list">
        <h5>
          <strong>{i + 1}</strong>
        </h5>
      </div>
      <div>
        <motion.h3
          onTap={() => setSelected(!isSelected)}
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
              {documentType === "paper" && `${magazine}, `}
              {documentType === "course" &&
                `${institutions[0]?.program}, ${institutions[0]?.institution}, `}
              {documentType === "presentation" && video ? (
                <button className="video-button" onClick={() => handleModal(i)}>
                  Video here!
                </button>
              ) : null}
            </strong>

            <span className="gray">{date}, </span>
            <a
              href={documentType === "paper" ? `http://doi.org/${url}` : url}
              target="_blank"
              rel="noreferrer"
            >
              {documentType === "paper" ? url : "Repository"}
            </a>
          </h5>
        </div>
      </div>
    </motion.li>,
  ];
}
