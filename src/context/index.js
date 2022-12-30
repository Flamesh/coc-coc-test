import { createContext } from "react";
import { pagesMapping } from "router";

const stateContext = {
  page: pagesMapping.home,
  isLogin: false,
};

export const StoreContext = createContext(stateContext);
