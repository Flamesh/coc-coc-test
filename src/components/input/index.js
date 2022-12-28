import React from "react";
import ErrorIcon from "assets/icons/caution-circle.svg";
import "./index.css";

function Input(props) {
  const { label, name, placeholder, type, value, onChange, children, error } =
    props;

  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <div className="input-wrapper">
      <p className="label font-bold">{label}</p>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className="input"
        autoComplete="off"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {children}
      {error && isFocused && (
        <div className="flex error">
          <img
            src={ErrorIcon}
            className="error-icon"
            alt="error icon"
            width={15}
            height={15}
          />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

export default Input;
