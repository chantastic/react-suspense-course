import React from "react";
import ErrorBoundary from "./error-boundary";
import { PokemonList } from "./pokemon";

const Pokemon = React.lazy(() => import("./pokemon-detail"));

export default function() {
  let [selectedPokemon, updateSelectedPokemon] = React.useState(1);
  return (
    <React.Fragment>
      <ErrorBoundary fallback={<h1>...couldn't catch 'em all</h1>}>
        {selectedPokemon ? (
          <React.Suspense fallback="I choose you!">
            <React.Fragment>
              <button onClick={() => updateSelectedPokemon(0)}>back</button>
              <Pokemon id={selectedPokemon} />
            </React.Fragment>
          </React.Suspense>
        ) : (
          <React.Suspense fallback="...loading pokemon">
            <PokemonList
              as="ul"
              className="pokemon-list"
              renderItem={pokemon => (
                <li key={pokemon.id}>
                  <button onClick={() => updateSelectedPokemon(pokemon.id)}>
                    {pokemon.name}
                  </button>
                </li>
              )}
            />
          </React.Suspense>
        )}
      </ErrorBoundary>
    </React.Fragment>
  );
}
