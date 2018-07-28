import React from "react";
import "./Navbar.css";

const Navbar = () => (
  // <div style={styles.panel}>
  //   <div style={styles.heading}>Home</div>
  // </div>
  <nav className="navbar">
    <li>
      <a className="navbar-brand" href="{#}">
        Clicky Game
      </a>
    </li>
    <li>Click an image to begin</li>
    <li>Score: 0 | Top Score: 0</li>

    {/* <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">
          Home <span className="sr-only">(current)</span>
        </a>
        <a className="nav-item nav-link" href="#">
          Features
        </a>
        <a className="nav-item nav-link" href="#">
          Pricing
        </a>
        <a className="nav-item nav-link disabled" href="#">
          Disabled
        </a>
      </div>
    </div> */}
  </nav>
);

export default Navbar;
