import PaperList from "../components/List";
import Seo from "../components/Seo";
import { client } from "../lib/sanity.client";
import { groq } from "next-sanity";
import Background from "../components/Background";
import { useEffect, useState } from "react";
import Modal from "../components/VideoModal";
import title from "../components/Title";
import { AnimatePresence } from "framer-motion";
import AnimationLayout from "../components/AnimationLayout";

export default function Home({ isMobile, presentations }) {
  const [isVideoModal, setVideoModal] = useState(false);
  const [isModalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    document.querySelector("html").classList.remove("home-html");
    window.scrollTo(0, 0);
  });

  return (
    <AnimationLayout>
      <article>
        <Background isMobile={isMobile} />
        <Seo
          pageTitle="Presentations"
          description="A list of presentations and tutorials that has been dictated by Pablo Huijse. These courses are related to Machine Learning, Neural Networks, Data Science, Statistics and Signal Processing."
        />
        <PaperList
          documentType="presentation"
          isMobile={isMobile}
          list={true}
          items={presentations}
          title="All presentations"
          hash="5"
          selected={true}
          setVideoModal={setVideoModal}
          setModalIndex={setModalIndex}
        />
        <AnimatePresence>
          {isVideoModal && (
            <Modal
              setIsOpen={setVideoModal}
              items={presentations}
              index={isModalIndex}
            />
          )}
        </AnimatePresence>
      </article>
    </AnimationLayout>
  );
}

export async function getStaticProps() {
  const presentations = await client.fetch(
    `*[_type == "presentation"]| order(year){
      title,
      venue,
      year,
      repository,
      selected,
      "video": video.asset->url
    }`
  );

  return {
    props: {
      presentations,
    },
  };
}
