import Title from "./Title";
import { Icon } from "@iconify/react";
import variables from "../styles/abstract/_color.module.scss";
import { motion } from "framer-motion";

const skills = [
  { url: "eos-icons:machine-learning-outlined", name: "Machine Learning" },
  { url: "eos-icons:machine-learning", name: "Deep Learning" },
  { url: "eos-icons:data-scientist-outlined", name: "Information Theory" },
  { url: "mdi:chart-bell-curve", name: "Bayesian Inference" },
  {
    url: "fad:logo-audiobus",
    name: "Statistical Signal Processing",
  },
  { url: "mdi:space-station", name: "Astro Informatics" },
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

export default function Skills({ id }) {
  return (
    <article className="grid-layout" id={id}>
      <div className="item-title">
        <Title title="Engeniering + Astronomy">
          Engeniering{" "}
          <strong>
            <i className="primary">+</i>
          </strong>{" "}
          Astronomy
        </Title>
      </div>
      <div className="itme-skill-description">
        <motion.p
          initial={{ y: "-100%", clipPath: "inset(100% 0% 0% 0%)" }}
          whileInView={{ y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam
          molestie at condimentum velit, adipiscing nunc justo, molestie.
        </motion.p>
        <motion.span
          variants={motionContainer}
          initial="hidden"
          whileInView="show"
        >
          <motion.h4 variants={motionIcon}>my Skills</motion.h4>
          {skills.map((icon, i) => (
            <ul key={`skill-list-${i}`}>
              <SkillsList name={icon.name} url={icon.url} />
            </ul>
          ))}
        </motion.span>
      </div>
    </article>
  );
}

function SkillsList({ name, url }) {
  return (
    <motion.li className="skill-list" variants={motionIcon}>
      <Icon icon={url} width="40" height="40" color={variables.primaryColor} />
      <h5>{name}</h5>
    </motion.li>
  );
}
