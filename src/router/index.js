import React, { useState, useMemo, createContext } from "react";
import { StoreContext } from "context";
export const pagesMapping = {
  home: "home",
  login: "login",
};

export default function Router({ children }) {
  let urlPath = window.location.pathname.slice(1).toLowerCase();
  const [page, setPage] = useState(urlPath || pagesMapping.home);
  const [isLogin, setIsLogin] = useState(false);

  const value = useMemo(
    () => ({ page, setPage, isLogin, setIsLogin }),
    [page, setPage, isLogin, setIsLogin]
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
