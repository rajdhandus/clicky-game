import React from "react";
import "./Character.css";

const Character = props => (
  <div className="card" onClick={() => props.incrementScore(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>

    {/* <div
      role="img"
      aria-label="click item"
      class="click-item"
      styles={{ backgroundImage: `url("/img/beth.png")` }}
    /> */}

    {/* <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div> */}
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default Character;
