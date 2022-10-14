import React from "react";
import Link from "next/link";

export default function SeeMore() {
  return (
    <React.Fragment>
      <Link href="/">
        <button className="see-more-root">
          <a className="text">SeeMore</a>
        </button>
      </Link>
    </React.Fragment>
  );
}
