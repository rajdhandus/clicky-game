import React from "react";
import "./Character.css";

const Character = props => (
  <div className={props.result}>
    <div
      className="card click-item"
      onClick={() => props.incrementScore(props.id)}
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default Character;
