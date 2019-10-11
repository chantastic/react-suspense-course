import React from "react";
import { unstable_createResource as createResource } from "react-cache";

let PokemonResource = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon/x").then(res => res.json())
);

export default function Pokemon() {
  return <div>{PokemonResource.read().name}</div>;
}