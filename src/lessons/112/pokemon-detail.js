import React from "react";
export default function PokemonDetail({ resource }) {
  let pokemon = resource.read();

  return (
    <div>
      <div>{pokemon.name}</div>
    </div>
  );
}
