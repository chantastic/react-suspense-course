# 2019-11-09 lesson order

- `import from` > `import()`
  - <React.Suspense />
  - `fallback`
- `ErrorBoundary`
  - Customizing an Error boundary
- Interact with Suspense and Error Boundaries
- create a resource with `wrapPromise`
  - make pokemon read from resource
  - a minimal wrapPromise (in place of a framework like Relay, or Apollo)
  - build up `wrapPromise`
  - ?? why do we need read()?

```jsx
function fetchPokemonData() {
  let pokemon = fetchPokemon(1);

  return {
    pokemon: wrapPromise(pokemon)
  };
}

let resource = fetchPokemonData();

function PokemonSimple() {
  return <div>{resource.pokemon.read().name}</div>;
}
```

- make it dynamic with `React.useState`
