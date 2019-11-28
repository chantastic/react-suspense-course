import React from "react";
import ReactDOM from "react-dom";
import App from "./lessons/complete/app";

const rootElement = document.getElementById("root");

// Sync/Legacy Mode
// ReactDOM.render(<App />, rootElement);

// Concurrent Mode
ReactDOM.createRoot(rootElement).render(<App />);
