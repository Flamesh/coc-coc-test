import React from "react";
import "./index.css";

function Input(props) {
  const { label, name, placeholder, type, value, onChange, children } = props;
  return (
    <div className="input-wrapper">
      <p className="label">{label}</p>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className="input"
      />
      {children}
    </div>
  );
}

export default Input;
