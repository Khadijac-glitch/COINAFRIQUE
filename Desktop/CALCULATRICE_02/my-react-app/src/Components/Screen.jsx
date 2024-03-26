import React from "react";
import "../style/Screen.css";

const Screen = ({ value }) => {
  return (
    <div className="screen">
      <input type="text" value={value} readOnly />
    </div>
  );
};

export default Screen;
