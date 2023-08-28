import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import style from "../styles/abstract/_color.module.scss";

export default function SeeMore({ url = "/" }) {
  return (
    <React.Fragment>
      <Link href={url} scroll={false}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="see-more-root"
        >
          <motion.a
            whileHover={{
              //color: style.primaryColor,
              fontStyle: "italic",
            }}
            className="text"
          >
            SeeMore
          </motion.a>
        </motion.button>
      </Link>
    </React.Fragment>
  );
}
