# Get Previous Resource Values with React’s useDeferredState Hook

The `useDeferredValue` Hook gives us a way to hold onto a previous resource values while waiting for a new one.

This is a more hands-on alternative to the magic of `useTransition`.  
With `useTransition`, React "keeps" the previous rendering and gives you a magical `isPending` boolean to conditionally show loading UI.

`useDeferredValue` puts you in the driver seat by giving you the actual value.  
This value can be used to implement our own `isPending`.

## Video

[On egghead.io](https://egghead.io/lessons/react-get-previous-resource-values-with-react-s-usedeferredstate-hook?af=1x80ad)

## Exercise

## useDeferredValue

With useTransition, we trust React to hold the previous rendering.

But we don't actual have the value.

We can use useDeferredValue for a different class of transitions, where we use the value and make UI decisions...

can be give you more controle that isPending

## Motions

- React.useDeferredValue for access to the value we want to hold, give it value want to hold as an argument
- Pass the deferredValue to our component
- Just like useTransition, we can pass in options for how long we're willing to see the old state before transitioning to the receeded state
- We can compare the deferredPokemonResource with the pokemonResource to see if our data is stale
- Let's pass that information down too
  - Now the component can make decisions about how it should be styled while awaiting fresh data
- We can change our button to use this deferred comparison now
  - let's variableize this now that it's in two places

before we move on...
Now that we have better boundaries, I'm going to do just a little bit of maintenance.
These names are getting nuts
`pokemonResource` => `pokemon`
`...PokemonResource` => `Pokemon`

## Solution

Lesson [113](../113) holds the solution to this lesson.
