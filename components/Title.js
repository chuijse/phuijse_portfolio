import React from "react";
import { motion } from "framer-motion";

export default function title({ children }) {
  return (
    <React.Fragment>
      <motion.div
        className="title-root"
        initial={{ opacity: 0, y: 5, clipPath: "inset(0% 100% 0% 0%)" }}
        whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1 }}
      >
        <h1>{children}</h1>
        <div className="underline" />
      </motion.div>
    </React.Fragment>
  );
}
