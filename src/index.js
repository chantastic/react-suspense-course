import React from "react";
import ReactDOM from "react-dom";
import { Reference as App } from "./lessons";

const rootElement = document.getElementById("root");

// Sync Mode
ReactDOM.render(<App />, rootElement);

// Concurrent Mode
// ReactDOM.unstable_createRoot(rootElement).render(<App />);
