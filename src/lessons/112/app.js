import React from "react";
import ErrorBoundary from "./error-boundary";
import { DelaySpinner } from "./ui";
import { fetchPokemon, suspensify } from "./api";

const PokemonDetail = React.lazy(() => import("./pokemon-detail"));

let initialPokemon = suspensify(fetchPokemon(1));

export default function App() {
  let [pokemonResource, setPokemonResource] = React.useState(initialPokemon);
  let [startTransition, isPending] = React.useTransition({ timeoutMs: 3000 });

  return (
    <div>
      <h1>Pokedex</h1>

      <ErrorBoundary fallback={"Couldn't catch 'em all."}>
        <React.Suspense fallback={"Catching your Pokemon..."}>
          <PokemonDetail resource={pokemonResource} />

          <button
            type="button"
            disabled={isPending}
            onClick={() =>
              startTransition(() =>
                setPokemonResource(
                  suspensify(fetchPokemon(pokemonResource.read().id + 1))
                )
              )
            }
          >
            Next
          </button>

          {isPending && <DelaySpinner />}
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}
