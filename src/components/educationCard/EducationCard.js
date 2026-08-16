import React from "react";
import {Fade} from "react-reveal";
import "./EducationCard.scss";

export default function EducationCard({school}) {
  const GetDescBullets = ({descBullets}) =>
    descBullets
      ? descBullets.map((item, i) => <li key={i}>{item}</li>)
      : null;

  if (!school.logo) {
    console.error(
      `Image of ${school.schoolName} is missing in education section`
    );
  }

  return (
    <Fade left duration={900} distance="24px">
      <article className="education-item">
        {/* The timeline rail and node are drawn by the item itself, so a
            school with no logo still lines up with the others. */}
        <span className="education-node" aria-hidden="true">
          {school.logo ? (
            <img src={school.logo} alt="" className="education-logo" />
          ) : null}
        </span>

        <div className="education-card card">
          <div className="education-card-head">
            <h3 className="education-school">{school.schoolName}</h3>
            <span className="chip chip--static education-duration">
              {school.duration}
            </span>
          </div>
          <p className="education-degree">{school.subHeader}</p>
          {school.desc ? (
            <p className="education-desc">{school.desc}</p>
          ) : null}
          {school.descBullets ? (
            <ul className="education-bullets">
              <GetDescBullets descBullets={school.descBullets} />
            </ul>
          ) : null}
        </div>
      </article>
    </Fade>
  );
}
