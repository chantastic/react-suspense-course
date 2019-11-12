import React from "react";
import { fetchPokemon, suspensify } from "./api";

let pokemon = suspensify(fetchPokemon(1));

export default function PokemonDetail() {
  return <div>{pokemon.read().name}</div>;
}
