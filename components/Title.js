import React from "react";

export default function title({ children }) {
  return (
    <React.Fragment>
      <div className="title-root">
        <h1>{children}</h1>
        <div className="underline" />
      </div>
    </React.Fragment>
  );
}
