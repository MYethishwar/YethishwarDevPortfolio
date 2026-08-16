import React from "react";
import "./ExperienceCard.scss";

/**
 * Previously this ran ColorThief over each company logo and painted the card
 * banner with the dominant colour it extracted. Logos aren't designed to be
 * sampled that way, so the three cards came out grey, grey-blue and brown —
 * muddy, unrelated to the site palette, and different on every reload
 * depending on decode timing. The banner is now a single palette gradient,
 * with the logo sitting on a clean disc over it.
 */
export default function ExperienceCard({cardInfo}) {
  return (
    <article className="experience-card card">
      <div className="experience-banner">
        <img
          className="experience-logo"
          style={cardInfo.logoStyle}
          src={cardInfo.companylogo}
          alt={`${cardInfo.company} logo`}
          loading="lazy"
        />
      </div>

      <div className="experience-body">
        <h3 className="experience-role">{cardInfo.role}</h3>
        <p className="experience-company">{cardInfo.company}</p>
        <span className="chip chip--static experience-date">
          {cardInfo.date}
        </span>

        {cardInfo.desc ? (
          <p className="experience-desc">{cardInfo.desc}</p>
        ) : null}

        {cardInfo.descBullets && cardInfo.descBullets.length ? (
          <ul className="experience-bullets">
            {cardInfo.descBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
