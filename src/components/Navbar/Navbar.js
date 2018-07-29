import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    score: 0,
    topScore: 0
  };

  incrementScore() {
    if (this.state.score >= this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
    this.setState({ score: this.state.score + 1 });
  }

  render() {
    return (
      <nav className="navbar">
        <li>
          <a className="navbar-brand" href="{#}">
            Clicky Game
          </a>
        </li>
        <li>Click an image to begin</li>
        <li>
          Score: {this.state.score} | Top Score: {this.state.topScore}
        </li>
      </nav>
    );
  }
}
export default Navbar;
