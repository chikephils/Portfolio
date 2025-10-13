import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import "@fontsource/outfit";
import "@fontsource/roboto";
import "@fontsource/bricolage-grotesque";
import "@fontsource/englebert";
import "@fontsource/lily-script-one";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
