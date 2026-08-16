import React from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Achievement() {
  if (!achievementSection.display) {
    return null;
  }
  return (
    <section className="section section--alt" id="achievements">
      <div className="container">
        <SectionHeading
          eyebrow="Achievements"
          title="Certifications & milestones"
          subtitle={achievementSection.subtitle}
        />
        <Fade bottom duration={900} distance="20px">
          <div className="achievement-grid">
            {achievementSection.achievementsCards.map((card, i) => (
              <AchievementCard
                key={i}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink,
                  featured: card.featured
                }}
              />
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}
