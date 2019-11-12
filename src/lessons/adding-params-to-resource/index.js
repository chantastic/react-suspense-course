import React, { unstable_SuspenseList as SuspenseList } from "react";
import ErrorBoundary from "./error-boundary";
import {
  PokemonList,
  PokemonResourceFallback,
  PokemonCollectionFallback,
  PokemonError
} from "./pokemon";
const Pokemon = React.lazy(() => import("./pokemon-detail"));

export default function() {
  return (
    <React.Fragment>
      <ErrorBoundary fallback={<PokemonError />}>
        <SuspenseList revealOrder="forwards">
          <React.Suspense fallback={<PokemonResourceFallback />}>
            <Pokemon id={2} />
          </React.Suspense>
          <React.Suspense fallback={<PokemonCollectionFallback />}>
            <PokemonList
              as="ul"
              renderItem={pokemon => (
                <li key={pokemon.id}>
                  <a
                    href={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pokemon.name}
                  </a>
                </li>
              )}
            />
          </React.Suspense>
        </SuspenseList>
      </ErrorBoundary>
    </React.Fragment>
  );
}
