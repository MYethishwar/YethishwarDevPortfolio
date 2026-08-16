import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (!educationInfo.display) {
    return null;
  }
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Where I learned the fundamentals"
          subtitle="Formal training in Artificial Intelligence and Data Science, alongside the maths that underpins it."
        />
        <div className="education-timeline">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    </section>
  );
}
