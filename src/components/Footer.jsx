import React from "react";
import profile from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="brand__mark">GD</span>
          <span>{profile.name}</span>
        </div>
        <nav className="footer__links">
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer__socials">
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
      <div className="footer__bottom">
        © {year} {profile.name}. Built with React. All rights reserved.
      </div>
    </footer>
  );
}
