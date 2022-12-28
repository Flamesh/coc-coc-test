import React, { useState } from "react";

import Input from "components/input";
import EyeIcon from "assets/icons/eye.svg";
import "./index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const handleChangeInput = (e) =>
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);

  const onChangeShowPassword = () => setShowPassword(!showPassword);

  const checkCanSubmit = () => {
    if (email && password) {
      setCanSubmit(true);
    }
    setCanSubmit(false);
  };

  const onLogin = () => {
    console.log("email", email);
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <p className="header-text">Login</p>
        <div className="">
          <span>Do not have an account?</span>{" "}
          <a className="link">Sign up here</a>
        </div>
        <div className="body">
          <div className="login-input">
            <Input
              label="Email"
              name="email"
              placeholder="email@example.com"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="login-input">
            <Input
              label="Password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChangeInput}
              type={showPassword ? "text" : "password"}
              children={
                <div className="password-icon" onClick={onChangeShowPassword}>
                  <img
                    src={EyeIcon}
                    width={20}
                    className={showPassword ? "active" : ""}
                    height={20}
                  />
                </div>
              }
            />
          </div>

          <div className="flex-around">
            <div>Remember my account</div>
            <a className="link">Forgot password?</a>
          </div>
          <div className="login-bottom">
            <button
              disabled={!canSubmit}
              onClick={onLogin}
              className={`login-button ${canSubmit ? "" : "button-disabled"}`}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
