import React, { createContext, useState, useMemo } from "react";
import { pagesMapping } from "router";

const stateContext = {
  page: pagesMapping.home,
  isLogin: false,
  user: {
    name: "",
    email: "",
    accessToken: "",
  },
};

export const StoreContext = createContext(stateContext);

export default function StoreContextComponent({ children }) {
  let urlPath = window.location.pathname.slice(1).toLowerCase();
  const [page, setPage] = useState(urlPath || pagesMapping.home);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  const value = useMemo(
    () => ({ page, setPage, isLogin, setIsLogin, user, setUser }),
    [page, setPage, isLogin, setIsLogin, user, setUser]
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
