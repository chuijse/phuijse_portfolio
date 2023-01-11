import React from "react";
import { motion } from "framer-motion";

export default function scrollDown({ isInView }) {
  return (
    <React.Fragment>
      <motion.div
        className="scroll-down-root"
        initial={{ y: 0, clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{
          clipPath: isInView ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
          y: isInView ? 0 : -10,
        }}
        transition={{ duration: 0.5, delay: isInView ? 2 : 0 }}
      >
        <motion.code
          initial={{ x: "0px" }}
          animate={{ x: "15px" }}
          transition={{
            repeat: "Infinity",
            repeatType: "mirror",
            duration: 1,
          }}
          className="text"
        >
          scroll down
        </motion.code>
        <div className="line" />
      </motion.div>
    </React.Fragment>
  );
}
