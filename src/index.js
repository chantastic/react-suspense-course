import React from "react";
import ReactDOM from "react-dom";

// ↓↓↓ 👋 Update this line to change the lesson ↓↓↓
let lesson = "complete";

const Lesson = React.lazy(() => import(`./lessons/${lesson}/app`));
function App() {
  return (
    <React.Suspense fallback="Loading Lesson...">
      <Lesson />
    </React.Suspense>
  );
}

const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement); // Blocking Mode
ReactDOM.createRoot(rootElement).render(<App />); // Concurrent Mode
