import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SeeMore({ url = "/", hash }) {
  return (
    <React.Fragment>
      <Link
        scroll={false}
        href={{
          pathname: url,
          hash: hash,
          query: {
            number: hash,
          },
        }}
      >
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
