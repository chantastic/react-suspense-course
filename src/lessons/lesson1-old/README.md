# Lesson1 — 5 Steps to Suspense and react-cache

We start with an `App` component.  
It does nothing but display the lesson number.

We also have a `fetch`.  
It makes a request for a collection of pokemon.  
When the request resolves, we convert it to `JSON` and — at the moment — log the result out to our `console`.

Fetching and rendering aren't connected yet.  
For that job, we're going to use `Suspense` and `react-cache`.

To start,
I want you to trust me blindly.

There are 5 steps to getting this set up.  
I'm going to describe everything in excrutiating detail.  
But — for now — I just want you to get this setup under your fingers.

Here are the 5 steps:

- import `createResource` from `react-cache`
- `createResource` from
- `read()` results from `PokemonCollection`
- wrap `PokemonCollection.read()` call in `React.Suspense` component with `fallback`
- extract `PokemonCollection.read()` into component
