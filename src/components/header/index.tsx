import React from "react";
import dayjs from "dayjs";

import "./header.scss";

const Header: React.FC = () => {
  const now = dayjs();

  return (
    <div className="header">
      <div className="top">
        <span className="left">docomo</span>
        <span className="center clock">{now.format("HH:mm")}</span>
        <span className="right">
          <span>75%</span>
          <div className="battery"></div>
        </span>
      </div>
    </div>
  );
};

export default Header;
