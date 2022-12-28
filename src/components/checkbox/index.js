import React from "react";
import "./index.css";
export default function Checkbox(props) {
  const { label, onChange, checked } = props;
  return (
    <div>
      <label className="checkbox-container">
        <input onChange={onChange} type="checkbox" checked={checked} />
        <span className="checkmark" />
        <span>{label}</span>
      </label>
    </div>
  );
}
