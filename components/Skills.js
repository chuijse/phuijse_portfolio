import Title from "./Title";
import { Icon } from "@iconify/react";
import variables from "../styles/abstract/_color.module.scss";
import { motion } from "framer-motion";

const skills = [
  { url: "eos-icons:machine-learning-outlined", name: "Machine Learning" },
  { url: "eos-icons:neural-network", name: "Artificial Neural Networks" },
  { url: "eos-icons:data-scientist-outlined", name: "Information Theory" },
  { url: "mdi:chart-bell-curve", name: "Bayesian Inference" },
  {
    url: "fad:logo-audiobus",
    name: "Statistical Signal Processing",
  },
  { url: "game-icons:observatory", name: "Astroinformatics" },
];

const motionIcon = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.5 } },
};

const motionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.8 },
  },
};

export default function Skills({ id, isMobile }) {
  return (
    <article className="grid-layout" id={id}>
      <motion.div className="item-title">
        <Title>Research Statement</Title>
      </motion.div>
      <motion.div
        className="item-skill-background"
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        initial={{ opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: 1 }}
      />
      <div className="itme-skill-description">
        <motion.p
          initial={{ y: "-50%", clipPath: "inset(100% 0% 0% 0%)" }}
          whileInView={{ y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          I’m interested in the fundamental, methodological and practical
          aspects of learning statistical models from data. Most of my personal
          research falls under the relatively new field of Astroinformatics. In
          particular I’m focused on the development of new methods to
          automatically analyze astronomical data from massive synoptic surveys.
        </motion.p>
        <motion.span
          variants={motionContainer}
          initial="hidden"
          whileInView="show"
        >
          <motion.h4 variants={motionIcon}>Interests</motion.h4>
          <div className="item-skills-container">
            {skills.map((icon, i) => (
              <ul key={`skill-list-${i}`}>
                <SkillsList
                  name={icon.name}
                  url={icon.url}
                  isMobile={isMobile}
                />
              </ul>
            ))}
          </div>
        </motion.span>
      </div>
    </article>
  );
}

function SkillsList({ name, url, isMobile }) {
  return (
    <motion.li className="skill-list" variants={motionIcon}>
      <Icon
        icon={url}
        width={isMobile ? "25" : "40"}
        height={isMobile ? "25" : "40"}
        color={variables.primaryColor}
      />
      <h5>{name}</h5>
    </motion.li>
  );
}
