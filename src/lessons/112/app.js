import React from "react";
import ErrorBoundary from "./error-boundary";

const PokemonDetail = React.lazy(() => import("./pokemon-detail"));

export default function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <ErrorBoundary fallback={"Couldn't catch 'em all."}>
        <React.Suspense fallback={"Catching your Pokemon..."}>
          <PokemonDetail />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}
