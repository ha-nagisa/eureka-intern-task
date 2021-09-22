import React, { useState } from "react";
import { CARDANIMATIONSTATE, PEOPLE } from "../App";
import "./cards.scss";

interface PROPS {
  people: PEOPLE[];
  cardAnimation: CARDANIMATIONSTATE;
}

const Cards: React.FC<PROPS> = ({ people, cardAnimation }) => {
  return (
    <ul className="cards">
      {people.slice(0, 5).map((person, i) => (
        <li
          key={person.id}
          className={`card ${
            i !== 0
              ? ""
              : cardAnimation === "normal"
              ? ""
              : cardAnimation === "yes"
              ? "animateYes"
              : "animateNo"
          }`}
        >
          <img alt={person.name} src={person.img} />
          <span>
            <strong>{person.name}</strong>
            {person.age}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Cards;
