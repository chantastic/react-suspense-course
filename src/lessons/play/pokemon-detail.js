import React from "react";
import { DelaySpinner } from "./ui";

export default function PokemonDetail({ resource, staleResource }) {
  let pokemon = resource.read();

  return (
    <div>
      <div style={staleResource ? { opacity: 0.5 } : null}>{pokemon.name}</div>
      {staleResource && <DelaySpinner />}
    </div>
  );
}
