import React from "react";
import "./emptyPage.scss";

const EmptyPage = () => {
  return (
    <div className="empty">
      <div>
        <p>
          本日のおすすめのお相手は、
          <br />
          以上になります。
        </p>
        <p>いい出会いがありますように。</p>
      </div>
    </div>
  );
};

export default EmptyPage;
