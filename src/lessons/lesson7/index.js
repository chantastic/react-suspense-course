import React from "react";
import ErrorBoundary from "./error-boundary";
import { unstable_createResource as createResource } from "react-cache";
const Pokemon = React.lazy(() => import("./pokemon"));

let PokemonCollection = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon").then(res => res.json())
);

function PokemonList() {
  return (
    <ul>
      {PokemonCollection.read().results.map(pokemon => (
        <li>{pokemon.name}</li>
      ))}
    </ul>
  );
}

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
