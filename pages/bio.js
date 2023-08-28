import Background from "../components/Background";
import BackHome from "../components/BackHome";
import Title from "../components/Title";
import { client } from "../lib/sanity.client";
import { groq } from "next-sanity";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AnimationLayout from "../components/AnimationLayout";

export default function ContactPage({ hash = "1", bio }) {
  useEffect(() => {
    document.querySelector("html").classList.remove("home-html");
  });
  //console.log(bio);
  const goals = bio.goals;
  const DocumentsTitles = bio.DocumentsTitles;
  const DocumentsUrls = bio.DocumentsUrls;
  return (
    <AnimationLayout>
      <article className="index-container">
        <section className="grid-list">
          <Background />
          <div className="item-title-list">
            <Title>Personal Bio</Title>
          </div>
          <motion.div
            className={"item-all-list-background"}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 1 }}
          />
          <div className="item-all-papers-list">
            <h4 className="primary">Personal goals resume</h4>
            {goals.map((goal, i) => (
              <li className="paragraph-list" key={`goal-li-${i}`}>
                <p className="paragraph-description">{goal.degree}</p>
                <p className="light"> {goal.date}</p>
              </li>
            ))}
            <h4 className="primary">Short Bio</h4>
            <p>{bio.description}</p>
            <h4 className="primary">Documents and certificates</h4>
            <p>
              For more about my professional activities and skills please look
              here:
            </p>
            {DocumentsTitles.map((doc, i) => (
              <li className="paragraph-list" key={`documents-li-${i}`}>
                <p className="paragraph-description">{doc}</p>
                <a
                  className="light primary"
                  type
                  href={DocumentsUrls[i]}
                  filename
                  download
                  no-referrer
                >
                  Download here
                </a>
              </li>
            ))}
          </div>

          <div className="item-home-button">
            <BackHome hash={hash} />
          </div>
        </section>
      </article>
    </AnimationLayout>
  );
}

export async function getStaticProps() {
  const bio = await client.fetch(groq`*[_type == "bio"][0]{
    description,
    goals,
    "DocumentsTitles": annexDocuments[].attachedName,
    "DocumentsUrls": annexDocuments[].attachedFile.asset->url,
  } `);

  return {
    props: {
      bio,
    },
  };
}
