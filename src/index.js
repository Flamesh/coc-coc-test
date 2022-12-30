import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import StoreContext from "context";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StoreContext>
    <App />
  </StoreContext>
);
