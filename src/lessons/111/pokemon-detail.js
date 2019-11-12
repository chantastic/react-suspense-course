import React from "react";
import { fetchPokemon, suspensify } from "./api";

let initialPokemon = suspensify(fetchPokemon(1));

function DelaySpinner() {
  return (
    <span role="img" aria-label="spinner" className="DelaySpinner">
      <style>{`
        .DelaySpinner {
          animation: rotation 1.5s infinite linear;
          display: inline-block;
          font-size: .7rem
        }

        @keyframes rotation {
          from { transform: rotate(0deg) }
          to { transform: rotate(359deg) }
        }
      `}</style>
      🌀
    </span>
  );
}

export default function PokemonDetail() {
  let [pokemonResource, setPokemonResource] = React.useState(initialPokemon);
  let [startTransition, isPending] = React.useTransition({ timeoutMs: 1000 });
  let pokemon = pokemonResource.read();

  return (
    <div>
      <div>{pokemon.name}</div>

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

      {isPending && <DelaySpinner />}
    </div>
  );
}
