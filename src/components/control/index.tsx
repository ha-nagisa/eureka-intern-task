import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CARDANIMATIONSTATE, PEOPLE } from "../App";
import "./control.scss";

interface PROPS {
  setPeople: React.Dispatch<React.SetStateAction<PEOPLE[]>>;
  setCardAnimation: React.Dispatch<React.SetStateAction<CARDANIMATIONSTATE>>;
}

const Control: React.FC<PROPS> = ({ setPeople, setCardAnimation }) => {
  const likeAnimation = (state: "yes" | "no"): void => {
    setCardAnimation(state);
    setTimeout(() => {
      setPeople((prevPeople) => prevPeople.filter((_, i) => i !== 0));
      setCardAnimation("normal");
    }, 500);
  };

  return (
    <div className="control">
      <div className="button no">
        <div className="trigger">
          <FontAwesomeIcon
            icon="times"
            size="2x"
            className="icon"
            onClick={() => likeAnimation("no")}
          />
        </div>
      </div>
      <div className="button yes">
        <div className="trigger">
          <FontAwesomeIcon
            icon="heart"
            size="2x"
            className="icon"
            onClick={() => likeAnimation("yes")}
          />
        </div>
      </div>
    </div>
  );
};

export default Control;
