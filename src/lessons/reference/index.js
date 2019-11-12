import React from "react";
import ErrorBoundary from "./error-boundary";
import PokemonListPage from "./pokemon-list-page";
import { fetchPokemonCollection, fetchPokemon } from "./api";
import "../../style.css";

function preparePageData() {
  let collection = fetchPokemonCollection();
  let pokemon = fetchPokemon(1);

  return {
    pokemon,
    collection
  };
}

let initialPageData = preparePageData();

let initialPokemon = fetchPokemon(1);

function Pokemon({ pokemon }) {
  return <h1>{pokemon.read().name}</h1>;
}

export default function App() {
  let { collection } = initialPageData;

  return (
    <React.Fragment>
      <ErrorBoundary fallback={<h1>Oops! Something went super wrong...</h1>}>
        <React.Suspense fallback={"awaiting pokemon list"}>
          <PokemonListPage collection={collection} />
          <Pokemon pokemon={initialPokemon} />
        </React.Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}

// 1.1 try to read at the root of our app — crash
// 1.2 move it into an error boundary — no luck
// 1.3 wrap it in a component — now we see a proper error but no content
// 1.4 put it inside a suspense boundary to have it render
// next 1: read() must happen in the component — same error as before
// next 1:
