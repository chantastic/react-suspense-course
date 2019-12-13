import React from "react";
// 1. Create an import error by giving React.lazy a Promise.reject()
const PokemonDetail = React.lazy(() => import("./pokemon-detail"));

// 2. Check the console for errors about error boundaries

// 3-5. Copy/Paste an ErrorBoundary declaration here and configuer with a fallback= prop
//    https://reactjs.org/docs/error-boundaries.html

export default function App() {
  return (
    <div>
      {/* 6. Wrap your Suspense Component in the freshly minted ErrorBoundary component */}
      <React.Suspense fallback={"Loading your Pokemon..."}>
        <PokemonDetail />
      </React.Suspense>
    </div>
  );
}
