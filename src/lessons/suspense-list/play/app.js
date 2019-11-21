import React from "react";
import ErrorBoundary from "./error-boundary";
import { DelaySpinner } from "./ui";
import { fetchPokemon, suspensify } from "./api";

let initialPokemon = suspensify(fetchPokemon(1));
let pokemonCollection = suspensify(fetchPokemon());

const PokemonDetail = React.lazy(() => import("./pokemon-detail"));
const PokemonCollection = React.lazy(() => import("./pokemon-collection"));

export default function App() {
  let [pokemonResource, setPokemonResource] = React.useState(initialPokemon);
  let [startTransition, isPending] = React.useTransition({ timeoutMs: 3000 });

  return (
    <div>
      <h1>Pokedex</h1>
      <ErrorBoundary fallback={"Couldn't catch 'em all."}>
        <React.SuspenseList revealOrder="forwards" tail="collapsed">
          <React.Suspense fallback={"Catching your Pokemon..."}>
            <PokemonDetail resource={pokemonResource} />
          </React.Suspense>
          <React.Suspense fallback={"Catching your Pokemon..."}>
            <PokemonCollection resource={pokemonCollection} />
          </React.Suspense>
        </React.SuspenseList>
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

// SuspenseList revealOrder: "forwards", "together", "backwards"
// * wrap only Suspese. I've had issues wrapping Error boundaries

// SuspenseList tail: (default: all) "hidden", "collapsed"
// * wrap only Suspese. I've had issues wrapping Error boundaries
