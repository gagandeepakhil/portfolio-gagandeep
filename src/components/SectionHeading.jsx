import React from "react";
import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, intro }) {
  return (
    <Reveal className="section-head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  );
}
