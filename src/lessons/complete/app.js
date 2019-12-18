import React from "react";
import ErrorBoundary from "./error-boundary";
import { fetchPokemon, fetchPokemonCollection, suspensify } from "./api";
import { List } from "./ui";
import { PokemonContext } from "./pokemon";

import "./styles.css";

const PokemonDetail = React.lazy(() => import("./pokemon-detail"));

let initialPokemon = suspensify(fetchPokemon(1));
let initialCollection = suspensify(fetchPokemonCollection());

export default function App() {
  let [pokemonResource, setPokemonResource] = React.useState(initialPokemon);
  let [collectionResource] = React.useState(initialCollection);
  let [startTransition, isPending] = React.useTransition({ timeoutMs: 3000 });
  let deferredPokemonResource = React.useDeferredValue(pokemonResource, {
    timeoutMs: 3000
  });

  let pokemonIsPending = deferredPokemonResource !== pokemonResource;

  let pokemonState = {
    pokemon: deferredPokemonResource,
    isStale: pokemonIsPending,
    setPokemon: id =>
      startTransition(() => setPokemonResource(suspensify(fetchPokemon(id))))
  };

  return (
    <div className="container">
      <br />
      <PokemonContext.Provider value={pokemonState}>
        <React.SuspenseList revealOrder="forwards" tail="collapsed">
          <React.Suspense fallback={<div>Fetching Pokemon stats...</div>}>
            <ErrorBoundary fallback="Couldn't catch 'em all.">
              <PokemonDetail />
            </ErrorBoundary>
          </React.Suspense>

          <React.Suspense fallback={<div>Connecting to database...</div>}>
            <ErrorBoundary fallback="Couldn't catch 'em all.">
              {/* <div>
                <button
                  type="button"
                  disabled={pokemonIsPending}
                  style={pokemonIsPending ? { opacity: 0.5 } : null}
                  onClick={() =>
                    startTransition(() =>
                      setCollectionResource(
                        suspensify(
                          fetchPokemonCollectionUrl(
                            collectionResource.read().next
                          )
                        )
                      )
                    )
                  }
                >
                  Next
                </button>

                {isPending && <DelaySpinner />}
              </div> */}
              <br />
              <br />
              <PokemonContext.Consumer>
                {({ setPokemon }) => (
                  <PokemonCollection
                    resource={collectionResource}
                    as="ul"
                    className="pokemon-list"
                    renderItem={pokemon => (
                      <li key={pokemon.name} className="pokemon-list-item">
                        <button
                          className="pokemon-list-item-button"
                          type="button"
                          disabled={isPending}
                          onClick={() => setPokemon(pokemon.id)}
                        >
                          <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                            alt={pokemon.name}
                            width="50"
                          />
                          <h3>{pokemon.name}</h3>
                        </button>
                      </li>
                    )}
                  />
                )}
              </PokemonContext.Consumer>
            </ErrorBoundary>
          </React.Suspense>
        </React.SuspenseList>
      </PokemonContext.Provider>
    </div>
  );
}

function PokemonCollection({ resource, ...props }) {
  return <List items={resource.read().results} {...props} />;
}
