import React from "react";
import ErrorBoundary from "./error-boundary";
import { DelaySpinner } from "./ui";
import { fetchPokemon, fetchPokemonCollection, suspensify } from "./api";

// 1. extract shared shared transition config
// 1. transition between pages / creating pages — adding
// 1. modularize?
// 1. image

let initialPokemon = suspensify(fetchPokemon(1));
let pokemonCollection = suspensify(fetchPokemonCollection({ limit: 5 }));

const PokemonDetail = React.lazy(() => import("./pokemon-detail"));
const PokemonCollection = React.lazy(() => import("./pokemon-collection"));

export default function App() {
  let [pokemonResource, setPokemonResource] = React.useState(initialPokemon);
  let deferredPokemonResource = React.useDeferredValue(pokemonResource, {
    timeoutMs: 3000
  });
  let [startTransition, isPending] = React.useTransition({ timeoutMs: 3000 });

  let [collection, setCollection] = React.useState(pokemonCollection);

  return (
    <div>
      <h1>Pokedex</h1>

      <>
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
          Next Pokemon
        </button>

        <React.SuspenseList>
          <ErrorBoundary fallback={<div>Couldn't catch 'em all.</div>}>
            <React.Suspense fallback={<div>Catching your Pokemon...</div>}>
              <PokemonDetail
                resource={deferredPokemonResource}
                staleResource={deferredPokemonResource !== pokemonResource}
              />
            </React.Suspense>
          </ErrorBoundary>

          <label htmlFor="pokemon_collection_limit">Limit</label>

          <select
            id="pokemon_collection_limit"
            onChange={e =>
              startTransition(() =>
                setCollection(
                  suspensify(fetchPokemonCollection({ limit: e.target.value }))
                )
              )
            }
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>

          {isPending && <DelaySpinner />}

          <ErrorBoundary fallback={<div>Couldn't catch 'em all.</div>}>
            <React.Suspense fallback={<div>Catching your Pokemon...</div>}>
              <PokemonCollection
                resource={collection}
                onClick={id =>
                  startTransition(() =>
                    setPokemonResource(suspensify(fetchPokemon(id)))
                  )
                }
              />
            </React.Suspense>
          </ErrorBoundary>
        </React.SuspenseList>
      </>
    </div>
  );
}

// SuspenseList revealOrder: "forwards", "together", "backwards"
// * wrap only Suspese. I've had issues wrapping Error boundaries

// SuspenseList tail: (default: all) "hidden", "collapsed"
// * wrap only Suspese. I've had issues wrapping Error boundaries
