# 2019-11-09 lesson order

- `import from` > `import()`
  - <React.Suspense />
  - `fallback`
- `ErrorBoundary`
  - Customizing an Error boundary
- Interact with Suspense and Error Boundaries — The three states (using React.lazy)
- create a resource with `wrapPromise` / `suspensifyPromise`
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

---

# 2019-11-11

Gain control over asyncronous state transitions in your app. (concrete)
Avoid common pain points in the Suspense API. (personal)

## Import Components Lazily with Suspense React.lazy
## Catch Errors with an Error Boundary Component
## Understand How React.lazy Communicates Loading Status to Suspense and Error Boundary Components
## Wrap Promises to Communicate Pending, Error, and Success Status to Suspense and Error Boundaries
## Track Async Requests with React.useState
## Enable React's Experimental Suspense Features by Enabling Concurrent Mode with ReactDOM.createRoot
## Deprioritize Non User-Blocking Updates with React.useTransition's startTransition function
## Bypass Receeded Views with React.useTrasition's timeoutMS option
## Display Loading States Conditionally with React.useTransition's isPending Boolean
## Delay the Appearance of a Loading Spinner with CSS

## Hoist state?

## Gotcha: Always Wrap Suspendible Data in Compnonents
## Gotcha: Always Read Suspendible Data from Components

How do I transition

## How to make a customizeable list component

##  with React Dev Tools
  - prereq: install react dev tools
##