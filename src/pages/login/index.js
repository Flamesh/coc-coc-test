import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "context";
import Input from "components/input";
import Checkbox from "components/checkbox";
import EyeIcon from "assets/icons/eye.svg";
import ErrorIcon from "assets/icons/caution-circle.svg";
import "./index.css";
import { pushRouterWithoutReload } from "utils/pushRouter";
import { login } from "handler/login";
import { pagesMapping } from "router/index";

export default function Login() {
  const { isLogin, setIsLogin, setPage, setUser } = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isLogin) {
      pushRouterWithoutReload("/home");
      setPage(pagesMapping.home);
    }
  }, [isLogin]);

  const handleChangeInput = (e) =>
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);

  const onChangeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const checkCanSubmit = () => {
    if (email && password) {
      return true;
    }
    return false;
  };

  const onLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await login(email, password);
      if (result) {
        setIsLogin(true);
        const user = {
          name: result.user.name,
          email: result.user.email,
          accessToken: result.accessToken,
        };
        setUser(user);
        return;
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <p className="header-text font-bold">Login</p>
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
              error={email ? "" : "Required"}
              autoFocus={true}
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
              error={password ? "" : "Required"}
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

          <div className="flex-around login-footer">
            <Checkbox label="Remember my account" />
            <a className="link">Forgot password?</a>
          </div>
          {error && (
            <div className="flex">
              <img
                src={ErrorIcon}
                className="error-icon"
                alt="error icon"
                width={15}
                height={15}
              />
              <p className="text-error">{error}</p>
            </div>
          )}
          <div className="bottom">
            {!loading && (
              <button
                disabled={!checkCanSubmit()}
                onClick={onLogin}
                className={`login-button ${
                  checkCanSubmit() ? "" : "button-disabled"
                }`}
              >
                Login
              </button>
            )}
            {loading && <div className="login-loading">Processing...</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
