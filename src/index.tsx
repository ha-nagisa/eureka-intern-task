import React from "react";
import ReactDOM from "react-dom";

import "./assets/base.scss";
import "./index.scss";
import App from "./components/App";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faHeart } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
library.add(faTimes, faHeart);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
