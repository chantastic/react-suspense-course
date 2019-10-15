import React from "react";
import { unstable_createResource as createResource } from "react-cache";
import sleep from "sleep-promise";

let PokemonResource = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon/1").then(res => res.json())
);

export function Pokemon() {
  return <div>{PokemonResource.read().name}</div>;
}

let PokemonCollection = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon").then(res =>
    res.json().then(sleep(1500))
  )
);

export function PokemonList() {
  return (
    <ul>
      {PokemonCollection.read().results.map(pokemon => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
