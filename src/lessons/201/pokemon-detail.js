import React from "react";
import { DelaySpinner } from "./ui";

export default function PokemonDetail({ resource, isStale }) {
  let pokemon = resource.read();

  return (
    <div>
      <div style={isStale ? { opacity: 0.5 } : null}>
        {pokemon.name}
        {isStale && <DelaySpinner />}
      </div>
    </div>
  );
}
