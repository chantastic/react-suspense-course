import React from "react";
import ErrorBoundary from "./error-boundary";
import { PokemonList } from "./pokemon";
import { NetworkController } from "./network";

const Pokemon = React.lazy(() => import("./pokemon-detail"));

export default function() {
  let [selectedPokemon, updateSelectedPokemon] = React.useState(1);
  function renderPokemon(pokemon) {
    return (
      <li key={pokemon.id}>
        <button onClick={() => updateSelectedPokemon(pokemon.id)}>
          {pokemon.name}
        </button>
      </li>
    );
  }

  return (
    <React.Fragment>
      <NetworkController>
        <ErrorBoundary fallback={<h1>...couldn't catch 'em all</h1>}>
          <span>test</span>
          <React.Suspense fallback="I choose you!">
            <React.Fragment>
              <button onClick={() => updateSelectedPokemon(0)}>back</button>
              <Pokemon id={selectedPokemon} />
            </React.Fragment>
          </React.Suspense>
          <React.Suspense fallback="...loading pokemon">
            <PokemonList
              as="ul"
              className="pokemon-list"
              renderItem={renderPokemon}
            />
          </React.Suspense>
        </ErrorBoundary>
      </NetworkController>
    </React.Fragment>
  );
}
