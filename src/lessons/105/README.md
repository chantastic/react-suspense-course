# Track Async Requests with React's useState Hook

The `useState` Hook is the best way to track state in React.  
It's capabilities aren't limited to known values either.  
State can be set with asynchronously resolved values as well — like the result of a fetch request.
Wrapped promises can be given to `useState` to communicate promise status for state transitions.

## Video

[On egghead.io](https://egghead.io/lessons/react-track-async-requests-with-react-s-usestate-hook?af=1x80ad)

## Exercise

### 1. Use React.useState to track the current Pokemon resource

```diff
// pokemon-detail.js #PokemonDetail
+ let [pokemonResource, setPokemonResource] = React.useState();
```

### 2. Rename `pokemon` to `initialPokemon` to indicate that it's only the initial Pokemon

```diff
- let pokemon = suspensify(fetchPokemon(1));
+ let initialPokemon = suspensify(fetchPokemon(1));
```

### 3. Provide `initialPokemon` to `React.useState` as default

```diff
// pokemon-detail.js #PokemonDetail
- let [pokemonResource, setPokemonResource] = React.useState();
+ let [pokemonResource, setPokemonResource] = React.useState(initialPokemon);
```

### 4. Create an intermediate `pokemon` variable that `read()`s the `pokemonResource`

```diff
// pokemon-detail.js #PokemonDetail
+ let pokemon = pokemonResource.read();
```

### 5. Add a "Next" button to shuttle thru Pokemon

```diff
// pokemon-detail.js #PokemonDetail

+ <button
+   type="button"
+   onClick={() =>
+     setPokemonResource(suspensify(fetchPokemon(pokemon.id + 1)))
+   }
+ >
+   Next
+ </button>
```

## Solution

Lesson [106](../106) holds the solution to this lesson.
