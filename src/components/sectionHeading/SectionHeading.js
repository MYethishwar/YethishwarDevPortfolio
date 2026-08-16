/**
 * The one heading treatment used by every section.
 *
 * Each container used to roll its own <h1> plus a decorative underline, which
 * is why the headings drifted apart — different sizes, different alignment,
 * and an underline that landed in a different spot in every section. Routing
 * them all through this component means fixing the treatment once fixes it
 * everywhere. Styles live with the other layout primitives in `index.css`.
 */
import React from "react";

export default function SectionHeading({eyebrow, title, subtitle}) {
  return (
    <div className="section-head">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-sub">{subtitle}</p> : null}
    </div>
  );
}
