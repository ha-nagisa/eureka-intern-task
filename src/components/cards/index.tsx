import React, { useState } from "react";
import "./cards.scss";

interface PEOPLE {
  id: string;
  name: string;
  age: number;
  img: string;
}

interface PROPS {
  people: PEOPLE[];
  setPeople: React.Dispatch<React.SetStateAction<PEOPLE[]>>;
}

const Cards: React.FC<PROPS> = ({ people, setPeople }) => {
  return (
    <ul className="cards">
      {people.slice(0, 5).map((person) => (
        <li key={person.id} className="card">
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
