import React from "react";
import { fetchPokemon, suspensify } from "./api";

let initialPokemon = suspensify(fetchPokemon(1));

export default function PokemonDetail() {
  let [pokemonResource, setPokemonResource] = React.useState(initialPokemon);
  let pokemon = pokemonResource.read();

  return (
    <div>
      <div>{pokemon.name}</div>
      <button
        type="button"
        onClick={() =>
          setPokemonResource(suspensify(fetchPokemon(pokemon.id + 1)))
        }
      >
        Next
      </button>
    </div>
  );
}
