import React from "react";
import ErrorBoundary from "./error-boundary";
import PokemonListPage from "./pokemon-list-page";
import { fetchPokemonCollection } from "./api";
import "../../style.css";

function preparePageData() {
  let collection = fetchPokemonCollection();

  return {
    collection
  };
}

let initialPageData = preparePageData();

// ! THE MOTHER FUCKING COMPONENT HAS TO CALL READ !!!!

export default function App() {
  let { collection } = initialPageData;

  return (
    <ErrorBoundary fallback={<h1>Oops! Something went super wrong...</h1>}>
      <React.Suspense fallback={"awaiting pokemon list"}>
        <PokemonListPage collection={collection} />
      </React.Suspense>
    </ErrorBoundary>
  );
}
