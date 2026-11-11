import React from "react";
import experience from "../data/experience";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          intro="From immersive VR web apps to smart-home products and freelance builds."
        />
        <div className="timeline">
          {experience.map((e, i) => (
            <Reveal className="timeline__item" key={e.role + e.org} delay={i * 60}>
              <div className="timeline__dot" />
              <div className="card timeline__card">
                <div className="timeline__head">
                  <h3 className="timeline__role">{e.role}</h3>
                  <span className="timeline__period">{e.period}</span>
                </div>
                <div className="timeline__org">{e.org}</div>
                <ul className="timeline__list">
                  {e.text.map((t, j) => (
                    <li key={j}>{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
