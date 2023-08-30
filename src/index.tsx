import React from "react";
import ReactDOM from "react-dom/client";
import "./services/i18n";
import "./styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
