import React from "react";
import { unstable_createResource as createResource } from "react-cache";

let PokemonResource = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon/1").then(res => res.json())
);

export default function Pokemon() {
  return <div>{PokemonResource.read().name}</div>;
}

// CHALLENGE:

// break the api call
// read the resulting error
// copy the error boundary
// change logging to console.log
// show off what it does
// customize ErrorBoundary with fallback, for parity with suspense
// use defaultProps to do it
