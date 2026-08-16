import React from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";

export default function WorkExperience() {
  if (!workExperiences.display) {
    return null;
  }
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've shipped"
          subtitle="Internships spanning generative AI, data engineering and analytics — each one on a live product or dataset."
        />
        <Fade bottom duration={900} distance="20px">
          <div className="experience-grid">
            {workExperiences.experience.map((card, i) => (
              <ExperienceCard
                key={i}
                cardInfo={{
                  company: card.company,
                  desc: card.desc,
                  date: card.date,
                  companylogo: card.companylogo,
                  logoStyle: card.logoStyle,
                  role: card.role,
                  descBullets: card.descBullets
                }}
              />
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}
