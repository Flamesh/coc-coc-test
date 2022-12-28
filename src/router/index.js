import React, { useState, useMemo, createContext } from "react";

export const pagesMapping = {
  home: "home",
  login: "login",
};

const stateContext = {
  page: pagesMapping.home,
  isLogin: false,
};

export const RoutingContext = createContext(stateContext);

export default function Router({ children }) {
  let urlPath = window.location.pathname.slice(1).toLowerCase();
  const [page, setPage] = useState(urlPath || pagesMapping.home);
  const [isLogin, setIsLogin] = useState(false);

  const value = useMemo(
    () => ({ page, setPage, isLogin, setIsLogin }),
    [page, setPage, isLogin, setIsLogin]
  );

  return (
    <RoutingContext.Provider value={value}>{children}</RoutingContext.Provider>
  );
}
