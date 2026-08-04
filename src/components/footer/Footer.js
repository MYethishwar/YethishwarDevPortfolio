import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const year = new Date().getFullYear();
  return (
    <Fade bottom duration={1000} distance="5px">
      <footer className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © {year} {greeting.username}. Built with React.
        </p>
      </footer>
    </Fade>
  );
}
