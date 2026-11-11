import React, { useEffect, useState } from "react";
import profile from "../data/profile";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__grid">
        <div className="hero__content">
          {profile.available && (
            <span className="pill pill--status">
              <span className="pill__dot" />
              Available for freelance &amp; full-time
            </span>
          )}

          <h1 className="hero__title">
            Hi, I'm <span className="grad-text">{profile.firstName}</span>.
            <br />
            <span className="hero__role" key={roleIndex}>
              {profile.roles[roleIndex]}
            </span>
          </h1>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__cta">
            <a href="#work" className="btn btn--primary">
              View my work
            </a>
            <a href="#contact" className="btn btn--ghost">
              Let's talk →
            </a>
          </div>

          <div className="hero__socials">
            {profile.socials.map((s) => (
              <a
                key={s.name}
                href={s.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.name}
                title={s.name}
              >
                <img src={s.icon} alt="" />
              </a>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-wrap">
            <div className="hero__photo-glow" />
            <img
              className="hero__photo"
              src="images/me.jpg"
              alt="Gagandeep Dunna"
              loading="eager"
            />
            <span className="hero__chip hero__chip--a">&lt;/&gt; Full-Stack</span>
            <span className="hero__chip hero__chip--b">3D · VR · WebXR</span>
          </div>
        </div>
      </div>

      <div className="hero__stats">
        {profile.stats.map((st) => (
          <div className="stat" key={st.label}>
            <div className="stat__value grad-text">{st.value}</div>
            <div className="stat__label">{st.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
