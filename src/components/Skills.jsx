import React from "react";
import skillGroups from "../data/skills";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Toolkit"
          title="Tools, languages & frameworks"
          intro="The stack I reach for, grouped by where it fits in a project."
        />
        <div className="skills__groups">
          {skillGroups.map((g, gi) => (
            <Reveal className="skills__group" key={g.group} delay={gi * 60}>
              <h3 className="skills__group-title">
                <span className="skills__group-bar" />
                {g.group}
              </h3>
              <div className="skills__chips">
                {g.items.map((item) => (
                  <a
                    key={item.name}
                    className="skill"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    title={item.name}
                  >
                    <img src={item.icon} alt="" loading="lazy" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
