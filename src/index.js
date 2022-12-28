import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Router from "router";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <App />
  </Router>
);
