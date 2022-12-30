import React, { useContext, useEffect } from "react";
import CheckIcon from "assets/icons/tick.svg";
import "./index.css";
import { StoreContext } from "context";
import { pushRouterWithoutReload } from "utils/pushRouter";
import { pagesMapping } from "router";
export default function Home() {
  const { isLogin, setPage, user } = useContext(StoreContext);

  useEffect(() => {
    if (!isLogin) {
      pushRouterWithoutReload("/login");
      setPage(pagesMapping.login);
    }
  }, [isLogin]);

  useEffect(() => {}, [user]);
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
          Welcome {user.name}, you have logged in successfully
        </p>
      </div>
    </div>
  );
}
