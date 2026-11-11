import React from "react";
import profile from "../data/profile";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="contact card">
          <div className="contact__left">
            <span className="eyebrow">Get in touch</span>
            <h2 className="contact__title">
              Let's build something <span className="grad-text">worth shipping.</span>
            </h2>
            <p className="contact__text">
              Have a project, a role, or just an idea to kick around? I reply to
              every genuine message. The fastest way to reach me is email — or
              use the form and it'll open in your mail app.
            </p>

            <a className="contact__email" href={`mailto:${profile.email}`}>
              <span aria-hidden="true">✉</span> {profile.email}
            </a>

            <div className="contact__socials">
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

          <form className="contact__form" action={`mailto:${profile.email}`} method="post" encType="text/plain">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@email.com" autoComplete="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Tell me about your project or role…" required />
            </label>
            <button type="submit" className="btn btn--primary btn--block">
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
