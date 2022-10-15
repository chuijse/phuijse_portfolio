import React from "react";
import Link from "next/link";

export default function SeeMore({ url = "/" }) {
  return (
    <React.Fragment>
      <Link href={url}>
        <button className="see-more-root">
          <a className="text">SeeMore</a>
        </button>
      </Link>
    </React.Fragment>
  );
}
