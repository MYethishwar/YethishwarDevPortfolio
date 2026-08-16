import React from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, greeting} from "../../portfolio";

// Pulled out of the prose so the hero leads with three scannable facts
// instead of one dense paragraph the eye slides straight off.
const HERO_STATS = [
  {value: "550+", label: "GitHub commits"},
  {value: "3", label: "AI/ML internships"},
  {value: "9.12", label: "CGPA / 10"}
];

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <section className="hero" id="greeting">
      <div className="hero-glow" aria-hidden="true" />
      {/* Fade wraps the whole grid rather than each column: react-reveal
          inserts its own div, and per-column that div would become the grid
          item, so the mobile re-ordering below would have nothing to act on. */}
      <Fade bottom duration={900} distance="30px">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">AI / ML Engineer</span>
            <h1 className="hero-title">
              Hi all, I&apos;m <span className="hero-name">Yethishwar</span>
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="hero-sub">{greeting.subTitle}</p>

            <ul className="hero-stats">
              {HERO_STATS.map(stat => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>

            <SocialMedia />

            <div className="hero-actions">
              <a className="btn btn--primary" href="#contact">
                Contact me
              </a>
              <a className="btn btn--ghost" href="#projects">
                View my work
              </a>
              {greeting.resumeLink && (
                <a
                  className="btn btn--ghost"
                  href={require("./resume.pdf")}
                  download="Resume.pdf"
                >
                  Download resume
                </a>
              )}
            </div>
          </div>

          <div className="hero-art">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="Developer at a desk"
                src={require("../../assets/images/manOnTable.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    </section>
  );
}
