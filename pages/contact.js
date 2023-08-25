import Contact from "../components/Contact";
import Background from "../components/Background";
import BackHome from "../components/BackHome";

export default function ContactPage({ hash = "1" }) {
  return (
    <main>
      <Background />
      <Contact />
      <div className="item-home-button">
        <BackHome hash={hash} />
      </div>
    </main>
  );
}
