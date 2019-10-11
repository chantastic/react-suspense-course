- `ErrorBoundary` in own file
- `PokemonDetail` exporting named export from `pokemon.js` `export { Pokemon as default } from "./pokemon"`
- Rendering in `CocurrentMode` w/ `unstable_createRoot`
- `JSONI` component for inspecting JSON objects
- `PokemonCollection/PokemonList`
  - renderItem + point-free syntax
  - As = React.Fragment (way to return array of results _OR_ costomized comp. important when applying classes)
  - add `id` pre-resource (`p.url.split("/")[6]`) — this is a good place to make these abstractions
- Prop `id` thru `Pokemon` to resource

- ternary for changing the views
- useState for keeping selectedPokemon
- renderProp for customizing the output of the list and applying the onClick
- back button by setting 0
- https://github.com/facebook/react/pull/16186

  - `useSuspenseTransition` issue.
  - Need Master with `SuspenseList` `revealOrder={"together"|"forwards"|"backwards"}`
  - !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

- `useEffect` (simple) documentTitle in `Pokemon` component
  - must come after read()
  - condition in the fuction not around
  - install eslint hooks rules
  - if we render two, how do we resolve?


- Suspend while img loads

