import React from "react";
import ReactDOM from "react-dom";
import App from "./lessons/reference";

const rootElement = document.getElementById("root");

// Sync Mode
// ReactDOM.render(<App />, rootElement);

// Concurrent Mode
ReactDOM.createRoot(rootElement).render(<App />);
