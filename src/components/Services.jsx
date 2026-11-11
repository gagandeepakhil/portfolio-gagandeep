import React from "react";
import services from "../data/services";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What I do"
          title="Services built to ship"
          intro="Whether you're a client who needs an app built or a team deciding who to interview, here's how I can help — and the stack I bring to each."
        />
        <div className="services__grid">
          {services.map((s, i) => (
            <Reveal className="card service" key={s.title} delay={i * 70}>
              <div className="service__icon" aria-hidden="true">
                {s.icon}
              </div>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__text">{s.text}</p>
              <div className="chips">
                {s.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
