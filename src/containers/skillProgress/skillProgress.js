import React from "react";
import "./Progress.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {useInView} from "../../hooks/useInView";

export default function StackProgress() {
  const [barsRef, barsInView] = useInView({threshold: 0.25});

  if (!techStack.viewSkillBars) {
    return null;
  }

  return (
    <section className="section section--alt" id="proficiency">
      <div className="container">
        <SectionHeading
          eyebrow="Proficiency"
          title="Where my hours have gone"
          subtitle="A candid read on the stacks I reach for most, and how deep I actually am in each."
        />

        <Fade bottom duration={900} distance="20px">
          <div className="proficiency-grid">
            <div className="proficiency-bars" ref={barsRef}>
              {techStack.experience.map((exp, i) => (
                <div key={i} className="skill">
                  <div className="skill-label">
                    <p>{exp.Stack}</p>
                    <span>{exp.progressPercentage}</span>
                  </div>
                  <div className="meter">
                    <span
                      style={{
                        width: barsInView ? exp.progressPercentage : "0%",
                        transitionDelay: `${i * 90}ms`
                      }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>

            <div className="proficiency-art">
              {illustration.animated ? (
                <DisplayLottie animationData={Build} />
              ) : (
                <img
                  alt="Skills"
                  src={require("../../assets/images/skill.svg")}
                />
              )}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
