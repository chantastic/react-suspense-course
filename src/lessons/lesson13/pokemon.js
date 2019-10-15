import React from "react";
import { unstable_createResource as createResource } from "react-cache";

let PokemonResource = createResource(id =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
);

export function Pokemon({ id }) {
  return <div>{PokemonResource.read(id).name}</div>;
}

let PokemonCollection = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon").then(res => res.json())
);

export function PokemonList({
  as: As = React.Fragment,
  renderItem = pokemon => <div key={pokemon.name}>{pokemon.name}</div>
}) {
  return <As>{PokemonCollection.read().results.map(renderItem)}</As>;
}
