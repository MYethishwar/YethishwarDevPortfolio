import React, {useContext} from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SocialMedia() {
  const {isDark} = useContext(StyleContext);
  if (!socialMediaLinks.display) {
    return null;
  }
  const labelClass = isDark
    ? "icon-button-label dark-mode-text"
    : "icon-button-label";
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button icon-button-priority github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <i className="fab fa-github" aria-hidden="true"></i>
          <span className={labelClass}>GitHub</span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button icon-button-priority linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with me on LinkedIn"
        >
          <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          <span className={labelClass}>LinkedIn</span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button icon-button-priority google"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email me"
        >
          <i className="fas fa-envelope" aria-hidden="true"></i>
          <span className={labelClass}>Email</span>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitLab profile"
        >
          <i className="fab fa-gitlab" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Facebook profile"
        >
          <i className="fab fa-facebook-f" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Instagram profile"
        >
          <i className="fab fa-instagram" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Twitter profile"
        >
          <i className="fab fa-twitter" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read my Medium blog"
        >
          <i className="fab fa-medium" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Stack Overflow profile"
        >
          <i className="fab fa-stack-overflow" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Kaggle profile"
        >
          <i className="fab fa-kaggle" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
