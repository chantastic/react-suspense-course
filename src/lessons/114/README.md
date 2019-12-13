# Avoid this Common Suspense Gotcha by Reading Data From Components

## Exercise

Suspense Gotcha: read() has to be called inside a component

Let's cover a couple Suspense gotchas by adding a list of available pokemon

## Motions

- fetch using `fetchPokemon("")`, for now, just passing empty string will get the collection. we'll make a unique endpoint later
- try to read() collection resource (`count` is part of the response metadata)
- We see some familiar errors. Let's get an error boundary in here stat
  - that didn't do anything.
  - let's get the suspense component in there
    - that didn't help either. what the heck
- The problem is that we need a component boundary to read from a resource
  - let's move it into a component and it'll work
- while we're in here, let's show a list of buttons (don't forget the key. just use the name. we know it's distinct in this case)
- and let's make a distinct endpoint because we'll want to configure this in just a little bit
