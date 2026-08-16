import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo}) {
  const featured = Boolean(cardInfo.featured);

  return (
    <article
      className={`achievement-card card${
        featured ? " achievement-card--featured" : ""
      }`}
    >
      <div className="achievement-media">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || cardInfo.title}
          loading="lazy"
        />
      </div>

      <div className="achievement-body">
        {featured ? (
          <span className="achievement-badge">Certificate</span>
        ) : null}
        <h3 className="achievement-title">{cardInfo.title}</h3>
        <p className="achievement-desc">{cardInfo.description}</p>

        {cardInfo.footer && cardInfo.footer.length ? (
          <div className="achievement-links">
            {cardInfo.footer.map((link, i) =>
              // Entries without a URL are plain metadata (e.g. a verification
              // key), so they render as a static pill rather than a dead link.
              link.url ? (
                <a
                  key={i}
                  className="chip"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ) : (
                <span key={i} className="chip chip--static">
                  {link.name}
                </span>
              )
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
}
