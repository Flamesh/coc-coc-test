import React, { useContext, useEffect } from "react";
import CheckIcon from "assets/icons/tick.svg";
import "./index.css";
import { RoutingContext } from "router";
export default function Home() {
  const context = useContext(RoutingContext);

  useEffect(() => {
    console.log(context);
  }, [context]);
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
