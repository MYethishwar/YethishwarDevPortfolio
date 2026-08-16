import React from "react";
import "./StartupProjects.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StartupProject() {
  if (!bigProjects.display) {
    return null;
  }

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title={bigProjects.title}
          subtitle={
            bigProjects.subtitle ||
            "Multi-agent platforms, RAG pipelines and deep-learning systems — built end to end and deployed."
          }
        />

        <Fade bottom duration={900} distance="20px">
          <div className="projects-grid">
            {bigProjects.projects.map((project, i) => (
              <article key={i} className="project-card card">
                {project.image ? (
                  <div className="project-media">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      loading="lazy"
                    />
                  </div>
                ) : null}

                <div className="project-body">
                  <h3 className="project-title">{project.projectName}</h3>
                  <p className="project-desc">{project.projectDesc}</p>

                  {project.footerLink && project.footerLink.length ? (
                    <div className="project-links">
                      {project.footerLink.map((link, j) => (
                        <a
                          key={j}
                          className="chip"
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}
