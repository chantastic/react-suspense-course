import React from "react";
import ErrorBoundary from "./error-boundary";
import { DelaySpinner } from "./ui";
import { fetchPokemon, suspensify } from "./api";

// 1. extract shared shared transition config
// 1. transition between pages / creating pages — adding
// 1. modularize?
// 1. image

let pokemonCollection = suspensify(fetchPokemon());

const PokemonDetail = React.lazy(() => import("./pokemon-detail"));
const PokemonCollection = React.lazy(() => import("./pokemon-collection"));

export default function App() {
  let [pokemonResource, setPokemonResource] = React.useState(null);
  let [startTransition, isPending] = React.useTransition({ timeoutMs: 3000 });

  return (
    <div>
      <h1>Pokedex</h1>
      {pokemonResource ? (
        <>
          <button
            type="button"
            disabled={isPending}
            onClick={() => startTransition(() => setPokemonResource(null))}
          >
            Back to all Pokemon
          </button>

          {isPending && <DelaySpinner />}

          <ErrorBoundary fallback={"Couldn't catch 'em all."}>
            <React.Suspense fallback={"Catching your Pokemon..."}>
              <PokemonDetail resource={pokemonResource} />
            </React.Suspense>
          </ErrorBoundary>
        </>
      ) : (
        <>
          <button
            type="button"
            disabled={isPending}
            onClick={() =>
              startTransition(() =>
                setPokemonResource(suspensify(fetchPokemon(2)))
              )
            }
          >
            Show me Ivasaur
          </button>

          {isPending && <DelaySpinner />}

          <ErrorBoundary fallback={"Couldn't catch 'em all."}>
            <React.Suspense fallback={"Catching your Pokemon..."}>
              <PokemonCollection resource={pokemonCollection} />
            </React.Suspense>
          </ErrorBoundary>
        </>
      )}
    </div>
  );
}

// SuspenseList revealOrder: "forwards", "together", "backwards"
// * wrap only Suspese. I've had issues wrapping Error boundaries

// SuspenseList tail: (default: all) "hidden", "collapsed"
// * wrap only Suspese. I've had issues wrapping Error boundaries
