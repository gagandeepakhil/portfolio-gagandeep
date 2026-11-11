import React, { useMemo, useState } from "react";
import projects from "../data/projects";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  const categories = useMemo(() => {
    const set = ["All", ...new Set(projects.map((p) => p.category))];
    return set;
  }, []);
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects & case studies"
          intro="A mix of production apps and focused builds. Every card links to the live site and the source."
        />

        <Reveal className="filters" as="div">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`filter ${active === c ? "is-active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="projects__grid">
          {visible.map((p, i) => (
            <Reveal className="card project" key={p.title} delay={(i % 3) * 70}>
              <div className="project__media">
                <img src={p.img} alt={p.title} loading="lazy" />
                {p.featured && <span className="project__badge">Featured</span>}
              </div>
              <div className="project__body">
                <div className="project__topline">
                  <h3 className="project__title">{p.title}</h3>
                  <span className="project__cat">{p.category}</span>
                </div>
                <p className="project__text">{p.text}</p>
                <div className="chips">
                  {p.tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project__links">
                  {p.demo && (
                    <a
                      className="btn btn--sm btn--primary"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Live demo ↗
                    </a>
                  )}
                  {p.git && (
                    <a
                      className="btn btn--sm btn--ghost"
                      href={p.git}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
