import React from "react";
import ErrorBoundary from "./error-boundary";
import { DelaySpinner } from "./ui";
import { fetchPokemon, suspensify } from "./api";

let initialPokemon = suspensify(fetchPokemon(1));

const PokemonDetail = React.lazy(() => import("./pokemon-detail"));

export default function App() {
  let [pokemonResource, setPokemonResource] = React.useState(initialPokemon);
  let [startTransition, isPending] = React.useTransition({ timeoutMs: 3000 });

  return (
    <div>
      <h1>Pokedex</h1>
      <ErrorBoundary fallback={"Couldn't catch 'em all."}>
        <React.Suspense fallback={"Catching your Pokemon..."}>
          <PokemonDetail resource={pokemonResource} />
        </React.Suspense>
      </ErrorBoundary>

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
    </div>
  );
}

// HOIST STATE
// * move the button out (the button is more application state than Pokemon state)
// * consiquently, our state moves too. now we need to pass the resource down as a prop
// * update onClick to use `read()`

// CO-LOCATING RESOURCE CREATION AND RESOURCE COMPONENT
