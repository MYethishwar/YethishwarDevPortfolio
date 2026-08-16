import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          subtitle={contactInfo.subtitle}
        />

        <Fade bottom duration={900} distance="20px">
          <div className="contact-grid">
            <div className="contact-details">
              {contactInfo.number ? (
                <a
                  className="contact-row"
                  href={`tel:${contactInfo.number}`}
                  aria-label={`Call ${contactInfo.number}`}
                >
                  <span className="contact-icon">
                    <i className="fas fa-phone" aria-hidden="true"></i>
                  </span>
                  <span className="contact-row-text">
                    <small>Phone</small>
                    <strong>{contactInfo.number}</strong>
                  </span>
                </a>
              ) : null}

              <a
                className="contact-row"
                href={`mailto:${contactInfo.email_address}`}
                aria-label={`Email ${contactInfo.email_address}`}
              >
                <span className="contact-icon">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </span>
                <span className="contact-row-text">
                  <small>Email</small>
                  <strong>{contactInfo.email_address}</strong>
                </span>
              </a>

              <SocialMedia />
            </div>

            <div className="contact-art">
              {illustration.animated ? (
                <DisplayLottie animationData={email} />
              ) : (
                <img
                  alt="Get in touch"
                  src={require("../../assets/images/contactMailDark.svg")}
                />
              )}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
