import React from "react";
import Link from "next/link";

export default function SeeMore({ url = "/" }) {
  return (
    <React.Fragment>
      <Link href={url}>
        <button className="back-button">
          <a className="text">
            Back
            <br />
            Home
          </a>
        </button>
      </Link>
    </React.Fragment>
  );
}
