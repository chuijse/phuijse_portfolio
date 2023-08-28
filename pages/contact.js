import Contact from "../components/Contact";
import Background from "../components/Background";
import BackHome from "../components/BackHome";
import AnimationLayout from "../components/AnimationLayout";

export default function ContactPage({ hash = "1" }) {
  return (
    <AnimationLayout>
      <main>
        <Background />
        <Contact />
        <div className="item-home-button">
          <BackHome hash={hash} />
        </div>
      </main>
    </AnimationLayout>
  );
}
