import React from "react";
import { unstable_createResource as createResource } from "react-cache";

let PokemonResource = createResource(id =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
);

export function Pokemon({ id }) {
  return <div>{PokemonResource.read(id).name}</div>;
}

export function PokemonResourceFallback() {
  return <React.Fragment>Locating pokemon...</React.Fragment>;
}

let PokemonCollection = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon").then(res =>
    res.json().then(res => ({
      ...res,
      results: res.results.map(pokemon => ({
        ...pokemon,
        id: pokemon.url.split("/")[6]
      }))
    }))
  )
);

export function PokemonList({
  as: As = React.Fragment,
  renderItem = pokemon => <div key={pokemon.id}>{pokemon.name}</div>
}) {
  return <As>{PokemonCollection.read().results.map(renderItem)}</As>;
}

export function PokemonCollectionFallback() {
  return <React.Fragment>Gotta catch 'em all...</React.Fragment>;
}

export function PokemonError() {
  return <h1>...couldn't catch 'em all</h1>;
}
