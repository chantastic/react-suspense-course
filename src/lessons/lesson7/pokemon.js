import React from "react";
import { unstable_createResource as createResource } from "react-cache";

let PokemonResource = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon/1").then(res => res.json())
);

export default function Pokemon() {
  return <div>{PokemonResource.read().name}</div>;
}
