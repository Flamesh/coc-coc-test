import React, { useContext, useEffect } from "react";
import Login from "pages/login";
import Home from "pages/home";
import { pagesMapping } from "router";
import { StoreContext } from "context";
import "./App.css";
function App() {
  const { page } = useContext(StoreContext);

  useEffect(() => {}, [page]);
  return (
    <div className="app-container">
      <div>
        {pagesMapping.home === page && <Home />}
        {pagesMapping.login === page && <Login />}
      </div>
    </div>
  );
}

export default App;
