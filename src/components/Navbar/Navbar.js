import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar">
    <li>
      <a className="navbar-brand" href="{#}">
        Clicky Game
      </a>
    </li>
    <li className={props.result}>{props.statusMessage}</li>
    <li>
      Score: {props.score} | Top Score: {props.topScore}
    </li>
  </nav>
);
export default Navbar;
