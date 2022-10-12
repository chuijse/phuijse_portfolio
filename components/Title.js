import React from "react";

export default function title({ title }) {
  return (
    <React.Fragment>
      <div className="title-root">
        <h1>{title}</h1>
        <div className="underline" />
      </div>
    </React.Fragment>
  );
}
