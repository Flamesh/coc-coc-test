import React, { useContext } from "react";
import Login from "pages/login";
import Home from "pages/home";
import { pagesMapping, RoutingContext } from "router";
import "./App.css";
function App() {
  const { page } = useContext(RoutingContext);

  return (
    <div className="app-container">
      {pagesMapping.home === page && <Home />}
      {pagesMapping.login === page && <Login />}
    </div>
  );
}

export default App;
