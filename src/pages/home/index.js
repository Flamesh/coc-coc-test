import React from "react";
import CheckIcon from "assets/icons/tick.svg";
import "./index.css";
export default function Home() {
  return (
    <div className="home-container">
      <div className="flex welcome">
        <img
          src={CheckIcon}
          alt="check"
          className="icon-green"
          width={20}
          height={20}
        />
        <p className="text-success">
          Welcome Elsa, you have logged in successfully
        </p>
      </div>
    </div>
  );
}
