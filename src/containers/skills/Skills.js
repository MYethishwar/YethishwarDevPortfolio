import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="What I do"
          title={skillsSection.title}
          subtitle={skillsSection.subTitle}
        />

        <div className="skills-grid">
          <Fade left duration={900} distance="24px">
            <div className="skills-art">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img
                  alt="Developer at work"
                  src={require("../../assets/images/developerActivity.svg")}
                />
              )}
            </div>
          </Fade>

          <Fade right duration={900} distance="24px">
            <div className="skills-copy">
              <SoftwareSkill />
              <ul className="skills-list">
                {skillsSection.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
