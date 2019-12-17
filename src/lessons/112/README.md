# Get Previous Resource Values with React’s useDeferredState Hook

The `useDeferredValue` Hook gives us a way to hold onto a previous resource values while waiting for a new one.

This is a more hands-on alternative to the magic of `useTransition`.  
With `useTransition`, React "keeps" the previous rendering and gives you a magical `isPending` boolean to conditionally show loading UI.

`useDeferredValue` puts you in the driver seat by giving you the actual value.  
This value can be used to implement our own `isPending`.

## Video

[On egghead.io](https://egghead.io/lessons/react-get-previous-resource-values-with-react-s-usedeferredstate-hook?af=1x80ad)

## Exercise

### 1. Define `deferredPokemonResource` using `React.useDeferredValue(PokemonResource)

```diff
// pokemon-detail.js
+ let deferredPokemon = React.useDeferredValue(PokemonResource);
```

### 2. Provide the `timeoutMs` option to `React.useDeferredValue` as the second argument

```diff
// pokemon-detail.js
- let deferredPokemon = React.useDeferredValue(PokemonResource);
+ let deferredPokemon = React.useDeferredValue(PokemonResource, { timeoutMs: 3000 });
```

### 3. Remove `isPending` from `React.useTransition`

```diff
// pokemon-detail.js
- let [startTransition, isPending] = React.useTransition();
+ let [startTransition] = React.useTransition();
```

### 4. Define `isPending` ensuring that `PokemonResource` and `deferredPokemonResource` are different

```diff
// app.js
+ let isPending = deferredPokemonResource !== pokemonResource;
```

## Solution

Lesson [113](../113) holds the solution to this lesson.
