import React from "react";
import ErrorBoundary from "./error-boundary";
import { DelaySpinner } from "./ui";
import {
  fetchPokemon,
  fetchPokemonCollectionUrl,
  fetchPokemonCollection,
  suspensify
} from "./api";

const PokemonDetail = React.lazy(() => import("./pokemon-detail"));

let initialPokemon = suspensify(fetchPokemon(1));
let initialCollection = suspensify(fetchPokemonCollection());

function PokemonCollection({ resource, ...props }) {
  return <List items={resource.read().results} {...props} />;
}

function List({
  as: As = React.Fragment,
  items = [],
  renderItem = item => <div>{item.name}</div>
}) {
  return <As>{items.map(renderItem)}</As>;
}

export default function App() {
  let [pokemon, setPokemon] = React.useState(initialPokemon);
  let [collection, setCollection] = React.useState(initialCollection);
  let deferredPokemon = React.useDeferredValue(pokemon, {
    timeoutMs: 3000
  });
  let deferredPokemonIsStale = deferredPokemon !== pokemon;
  let [startTransition, isPending] = React.useTransition({ timeoutMs: 3000 });

  return (
    <div>
      <h1>Pokedex</h1>

      <React.SuspenseList revealOrder="forwards" tail="collapsed">
        <React.Suspense fallback={<div>Fetching Pokemon...</div>}>
          <ErrorBoundary fallback={"Couldn't catch 'em all."}>
            <PokemonDetail
              resource={deferredPokemon}
              isStale={deferredPokemonIsStale}
            />
          </ErrorBoundary>
        </React.Suspense>

        <React.Suspense fallback={<div>Fetching the Database...</div>}>
          <ErrorBoundary fallback={"Couldn't catch 'em all."}>
            <div>
              <button
                type="button"
                disabled={deferredPokemonIsStale}
                onClick={() =>
                  startTransition(() =>
                    setCollection(
                      suspensify(
                        fetchPokemonCollectionUrl(collection.read().next)
                      )
                    )
                  )
                }
              >
                Next
              </button>
              {isPending && <DelaySpinner />}
            </div>

            <PokemonCollection
              resource={collection}
              renderItem={pokemon => (
                <li key={pokemon.name}>
                  <button
                    type="button"
                    disabled={isPending}
                    onClick={() =>
                      startTransition(() =>
                        setPokemon(suspensify(fetchPokemon(pokemon.id)))
                      )
                    }
                  >
                    {pokemon.name}
                  </button>
                </li>
              )}
            />
          </ErrorBoundary>
        </React.Suspense>
      </React.SuspenseList>
    </div>
  );
}
