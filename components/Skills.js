import Title from "./Title";
import { Icon } from "@iconify/react";
import variables from "../styles/abstract/_color.module.scss";

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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam
          molestie at condimentum velit, adipiscing nunc justo, molestie. Dictum
          at purus metus sit nulla augue nec vel. Vel velit donec semper lacus
          nulla. Et non vehicula nunc habitant.
        </p>

        <h4>my Skills</h4>
        {skills.map((icon, i) => (
          <ul key={`skill-list-${i}`}>
            <SkillsList name={icon.name} url={icon.url} />
          </ul>
        ))}
      </div>
    </article>
  );
}

function SkillsList({ name, url }) {
  return (
    <li className="skill-list">
      <Icon icon={url} width="40" height="40" color={variables.primaryColor} />
      <h5>{name}</h5>
    </li>
  );
}
