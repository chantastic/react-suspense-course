# 2019-11-09 lesson order

- `import from` > `import()`
  - <React.Suspense />
  - `fallback`
- `ErrorBoundary`
  - Customizing an Error boundary
- Interact with Suspense and Error Boundaries — The three states (using React.lazy)
- create a resource with `wrapPromise` / `suspensify`
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

## 100 Introduction to Suspense Concepts

- 101: Import a Component Lazily with React.lazy and Suspense
- 102: Catch Errors with an Error Boundary Component
- 103: Understand how to Communicate with Suspense and Error Boundary Components
- 104: Wrap a Promise to Communicate Pending, Success, and Error states Suspense and Error Boundaries
- 105: Create a Module for Dynamic Data Fetching Functions
- 106: Track Fetch Requests with React.useState
- 107: Enable Concurrent Mode with ReactDOM.createRoot to Take Advantage of React's Experimental Suspense Features
- 108: Depriority of Non User Blocking Updates with React.useTransition's startTransition function
- 109: Bypass Receeded Views with React.useTrasition's timeoutMS option
- 110: Display Conditional Loading States with React.useTransition's isPending Boolean
- 111: Delay the Appearance of a Loading Spinner with CSS

- 112: Refactor: Hoist Component State
- 113: Review: \*\*Fetch a collection using

##

- Gotcha: Always Wrap Suspendible Data in Compnonents
- Gotcha: Always Read Suspendible Data from Components

##

- useDeferredValue
- SuspenseList
  - revealOrder
  - tail

##

- react dev tools
  - suspense
  - find component

##

- styling
- sharing resources with context
- making re-usable resource components
  - pokemon
  - pokemon-list
- modularizing components
- routing?

How do I transition

## prereq

- install react dev tools
- experimental channels
