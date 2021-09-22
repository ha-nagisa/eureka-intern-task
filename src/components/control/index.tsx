import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./control.scss";

const Control: React.FC = () => {
  return (
    <div className="control">
      <div className="button no">
        <div className="trigger">
          <FontAwesomeIcon icon="times" size="2x" className="icon" />
        </div>
      </div>
      <div className="button yes">
        <div className="trigger">
          <FontAwesomeIcon icon="heart" size="2x" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Control;
