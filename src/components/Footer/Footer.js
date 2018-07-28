import React from "react";
import "./Footer.css";
import logo from "../../logo.svg";

const Footer = () => (
  <footer className="footer">
    <div className="bottom">
      Clicky Game! <img src={logo} className="App-logo" alt="logo" />
    </div>
  </footer>
);

export default Footer;
