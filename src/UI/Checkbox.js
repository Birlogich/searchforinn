import { useState } from "react";
import "./Checkbox.css";

export const Checkbox = ({ name, handleClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const getChecked = (name, value) => {
    handleClick(name, value);
  };

  return (
    <>
      <input
        type="checkbox"
        onChange={() => setIsChecked(!isChecked)}
        onClick={() => getChecked(name, isChecked)}
      />
      <span
        className={`checkbox ${isChecked ? "checkboxActive" : ""}`}
        aria-hidden="true"
      />
    </>
  );
};
