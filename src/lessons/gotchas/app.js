import React from "react";
import ErrorBoundary from "./error-boundary";
import { DelaySpinner } from "./ui";
import { fetchPokemon, suspensify } from "./api";

let initialPokemon = suspensify(fetchPokemon(1));
let pokemonCollection = suspensify(fetchPokemon());

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

      <ErrorBoundary fallback={"Couldn't catch 'em all."}>
        <React.Suspense fallback={"Catching your Pokemon..."}>
          <PokemonCollection resource={pokemonCollection} />
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

// PokemonCollection
// 1.1 add pokemonCollection.read() in App
// 1.2 add error boundary — does nothing
// 1.3 add suspense boundary — does nothing
// 1.4 need a component boundary: <PokemonCollection />
// 1.5 pass resource via props so we can put it in a different file
