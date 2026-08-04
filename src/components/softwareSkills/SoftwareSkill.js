import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {useInView} from "../../hooks/useInView";

export default function SoftwareSkill() {
  const [ref, isInView] = useInView({threshold: 0.15});

  return (
    <div>
      <div className="software-skills-main-div">
        <ul
          ref={ref}
          className={isInView ? "dev-icons dev-icons-in-view" : "dev-icons"}
        >
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
                style={{"--stagger-index": i}}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
