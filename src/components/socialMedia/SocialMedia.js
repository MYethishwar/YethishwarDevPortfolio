import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

/**
 * One uniform icon button per network.
 *
 * This used to hand-write a block per platform, and three of them carried a
 * visible text label while the rest didn't — so the row rendered as three
 * wide pills followed by three bare circles. Driving it from a list keeps
 * every icon identical; the network name still reaches assistive tech through
 * `aria-label`.
 */
const NETWORKS = [
  {key: "github", icon: "fab fa-github", label: "GitHub"},
  {key: "linkedin", icon: "fab fa-linkedin-in", label: "LinkedIn"},
  {key: "gmail", icon: "fas fa-envelope", label: "Email", mailto: true},
  {key: "gitlab", icon: "fab fa-gitlab", label: "GitLab"},
  {key: "facebook", icon: "fab fa-facebook-f", label: "Facebook"},
  {key: "instagram", icon: "fab fa-instagram", label: "Instagram"},
  {key: "twitter", icon: "fab fa-twitter", label: "Twitter"},
  {key: "medium", icon: "fab fa-medium-m", label: "Medium"},
  {
    key: "stackoverflow",
    icon: "fab fa-stack-overflow",
    label: "Stack Overflow"
  },
  {key: "kaggle", icon: "fab fa-kaggle", label: "Kaggle"}
];

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  return (
    <div className="social-media-div">
      {NETWORKS.map(network => {
        const value = socialMediaLinks[network.key];
        if (!value) return null;
        return (
          <a
            key={network.key}
            href={network.mailto ? `mailto:${value}` : value}
            className={`icon-button ${network.key}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={network.label}
            title={network.label}
          >
            <i className={network.icon} aria-hidden="true"></i>
          </a>
        );
      })}
    </div>
  );
}
