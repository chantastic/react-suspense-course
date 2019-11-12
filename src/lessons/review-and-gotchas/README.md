# Lesson6

The Suspense component in depth

## Challenge

(in src/index.js)

- `read()` from a pokemon collection cache outside of a `Suspense` component
  - import `unstable_createResource` from "react-cache"
  - `fetch` a list of Pokemon from `https://pokeapi.co/api/v2/pokemon/`
  - render a list of those pokemon from `results`
- Notice Suspense Error
  - wrap it in Suspense
  - add fallback="Gotta catch 'em all..."
- Notice that the error persists
  - move `<ul>` into component named <PokemonList />
- break the endpoint
  - notice that it errors outside of an ErrorBoundary
  - we could use a different ErrorBoundary or move it in. let's move it in for now
