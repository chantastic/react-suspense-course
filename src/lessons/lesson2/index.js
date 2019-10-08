import React from "react";
import { unstable_createResource as createResource } from "react-cache";

let PokemonCollection = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon/").then(res => res.json())
);

function PokemonList() {
  return PokemonCollection.read().results.map(p => <div>{p.name}</div>);
}

export default function() {
  return (
    <div>
      <React.Suspense fallback="loading">
        <PokemonList />
      </React.Suspense>
    </div>
  );
}
