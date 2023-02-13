import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes.js";
import "materialize-css";

function App() {
  const routes = useRoutes(false);
  console.log(routes);

  return (
    <Router>
      {/* {routes} */}
      <div className="container">{routes}</div>
    </Router>
  );
}

export default App;
