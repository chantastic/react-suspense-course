/* 
# 2019 Fullstack, SD

## Pre-req
- [x] Experimental channels
- [x] Enable Concurrent Mode
- [x] I have an ErrorBoundary Component
- [x] I have a suspensify promise wrapper

## The goods
- [ ] `React.lazy` and `Suspense`. You've had this for a year.
- [ ] Error boundaries. Use them.
- [ ] Three statuses of a wrapper
  - [ ] Promise.reject()
  - [ ] new Promise(res => res)
- [ ] Suspensify
- [ ] Fetch a pokemon
- [ ] `useState` to track async data requets
- [ ] Experimental
  - [ ] Enable Concurrent Mode with `ReactDOM.createRoot()`
- [ ] Separate low-priority updates with `useTransition` and `startTransition`
  - [ ] Bypass receeded state with `timeoutMs`. "If you see shit dissapearin', use transition" — Dan
  - [ ] Add conditional messaging with `isPending`
- [ ] Suspense Gotchas
- [ ] Coordinate rendering with SuspenseList and revealOrder
  - [ ] `revealOrder` options: default, `forwards`, `together`, `backwards`
  - [ ] `tail` options: default, `collapsed`, `hidden`
*/

import React from "react";
import ErrorBoundary from "./error-boundary";
import { fetchPokemon, suspensify } from "./api";
import PokemonDetail from "./pokemon-detail";

let initialPokemon = suspensify(fetchPokemon(1));

export default function App() {
  return (
    <div>
      <h1>Pokedex</h1>

      <PokemonDetail />
    </div>
  );
}
