import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "../styles/abstract/_color.module.scss";

export default function Nav({ sections = "5", index, setIndex }) {
  const rows = [];
  for (let i = 1; i < Number(sections) + 1; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(
      <Buttons
        id={i}
        key={`nav-button-${i}`}
        index={index}
        setIndex={setIndex}
      />
    );
  }

  return (
    <div className="nav-root">
      <ul>{rows}</ul>
    </div>
  );
}

function Buttons({ id, index, setIndex }) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (index === id) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [index]);

  //isSelected && console.log("index:", { index }, "id:", { id });

  const handelChange = (i) => {
    setIndex(i);
  };

  return (
    <motion.button
      onClick={() => handelChange(Number(id))}
      key={id}
      initial={{ width: "0%" }}
      animate={{
        width: isSelected ? "100%" : "50%",
        //height: index === id ? "3px" : "2px",
        background: isSelected ? style.textColor : style.grayColor,
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
    />
  );
}
