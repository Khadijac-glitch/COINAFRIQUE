import React, { useState } from "react";
import "../style/Button.css";

const Buttons = ({ title, id }) => {
  const [value, setValue] = useState(value);
  return (
    <input
      id={id}
      type="button"
      value={value}
      title={title}
      onClick={(e) => setValue(value)}
    />
  );
};

export default Buttons;
