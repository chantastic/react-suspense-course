# De-prioritize Non User-Blocking Updates with useTransition's startTransition function

In blocking rendering, all updates have the same priority.

In Concurrent Mode, work is "interruptible".  
User-blocking updates are treated with the highest importance.

To keep interfaces interactive and snappy, we can de-prioritize slower updates.

The `useTransition` Hook allows React to schedule work after higher priority work.

## Video

[On egghead.io](https://egghead.io/lessons/react-de-prioritize-non-user-blocking-updates-with-usetransition-s-starttransition-function?af=1x80ad)

## Exercise

### 1. Destructure `startTransition` from `React.useTransition`

```diff
// pokemon-detail.js #PokemonDetail

+ let [startTransition] = React.useTransition();
```

### 2. Wrap the `setPokemonResource` onClick handler in `startTransition`

```diff
// pokemon-detail.js #PokemonDetail
-   setPokemonResource(suspensify(fetchPokemon(pokemon.id + 1)))
+ startTransition(() =>
+   setPokemonResource(suspensify(fetchPokemon(pokemon.id + 1)))
+ )
```

## Solution

Lesson [109](../109) holds the solution to this lesson.
