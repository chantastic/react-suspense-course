import React from "react";
import { DelaySpinner } from "./ui";
import { fetchPokemon, suspensify } from "./api";

let initialPokemon = suspensify(fetchPokemon(1));

export default function PokemonDetail() {
  let [pokemonResource, setPokemonResource] = React.useState(initialPokemon);
  let [startTransition, isPending] = React.useTransition({ timeoutMs: 1000 });
  let pokemon = pokemonResource.read();

  // EXERCISE
  // 1. Define `deferredPokemonResource` using `React.useDeferredValue(PokemonResource)
  // 2. Provide the `timeoutMs` option to `React.useDeferredValue` as the second argument
  // 3. Remove `isPending` from `React.useTransition`
  // 4. Define `isPending` by comparing `PokemonResource` and `deferredPokemonResource` — ensuring that they are different

  return (
    <div>
      <div>
        {pokemon.name} {isPending && <DelaySpinner />}
      </div>

      <button
        type="button"
        disabled={isPending}
        onClick={() =>
          startTransition(() =>
            setPokemonResource(suspensify(fetchPokemon(pokemon.id + 1)))
          )
        }
      >
        Next
      </button>
    </div>
  );
}
