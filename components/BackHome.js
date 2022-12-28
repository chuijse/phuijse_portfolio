import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SeeMore({ url = "/" }) {
  return (
    <React.Fragment>
      <Link href={url}>
        <button className="back-button">
          <motion.a
            className="text"
            whileHover={{ fontStyle: "italic", scale: 1.2 }}
          >
            Back
            <br />
            Home
          </motion.a>
        </button>
      </Link>
    </React.Fragment>
  );
}
