* https://ti.to/egghead-live-online-events/build-an-app-with-react-suspense-hooks-and-context-with-michael-chan-2019-10-16/with/4lvkezrcjek

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

* Suspend while img loads
* SHOW IN DEV TOOLS

* CHANGE TITLE
  - transition from useEffect directly to controller
  - don't want these to act autonomously
  - useEffect
  - Controller Component
  - useReducer
  - maybe send the whole pokemon so we can add score

- CAVEAT
  - for those of you who have worked with other libraries, you might think "well, I can do that in React Router or Redux or whatever."
  - Yup. you totally can. Today I want to show you how to do all this stuff without other libraries — just so you can get a sense of how to solve problems that aren't solved — as you come up to them


* MAXDURATION GONE!!!

* https://github.com/facebook/react/pull/15272
* https://reactjs.org/blog/2018/11/27/react-16-roadmap.html
* https://github.com/facebook/react/blob/master/packages/react-devtools/CHANGELOG.md#suspense-toggle

* https://github.com/facebook/react/pull/16186/files
