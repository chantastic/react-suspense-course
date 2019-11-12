import React from "react";
import ReactDOM from "react-dom";
// import App from "./lessons/106/app";
import App from "./lessons/build-an-app-with-react-suspense/app";

const rootElement = document.getElementById("root");

// Sync/Legacy Mode
// ReactDOM.render(<App />, rootElement);

// Concurrent Mode
ReactDOM.createRoot(rootElement).render(<App />);
