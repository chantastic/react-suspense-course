import React from "react";
import ErrorBoundary from "./error-boundary";
import { PokemonList } from "./pokemon";
const Pokemon = React.lazy(() => import("./pokemon-detail"));

export default function() {
  return (
    <React.Fragment>
      <ErrorBoundary fallback={<h1>...couldn't catch 'em all</h1>}>
        <React.Suspense fallback="Locating pokemon...">
          <Pokemon />
        </React.Suspense>
        <React.Suspense fallback="Gotta catch 'em all...">
          <PokemonList />
        </React.Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}
