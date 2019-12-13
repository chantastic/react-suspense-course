# Understand How React.lazy Communicates Loading Status to Suspense and Error Boundaries

Suspense won't magically detect and inspect promises in your code.  
You have to wrap promises to communicate status to Suspense and error boundaries.

`React.lazy` acts as a model for which states we need our promise wrappers to handle.

## Video

[On egghead.io](https://egghead.io/lessons/react-understand-how-react-lazy-communicates-loading-status-to-suspense-and-error-boundaries?af=1x80ad)

## Exercise

With our Suspense and ErrorBoundary fallbacks in place,
let's break our component import and force the three possible states that we're now setup to handle.

### 1: Error

If the module fails to load for some reason, it will be picked up by our `<ErrorBoundary fallback="..">`

Give it a try with:

```js
const PokemonDetail = React.lazy(() => Promise.reject());
```

### 2. Pending

While our module awaits the network, it will be picked up by our `<Suspense fallback="..">`

Give it a try with:

```js
const PokemonDetail = React.lazy(
  () => new Promise(resolve => setTimeout(resolve, 1000))
);
```

### 3. Success

When our module successfully loads (after a short delay), the component will be rendered.

Give it a try with:

```js
const PokemonDetail = React.lazy(
  () =>
    new Promise(resolve =>
      setTimeout(
        () => resolve({ default: () => <div>Fake Pokemon</div> }),
        2000
      )
    )
);
```

...or, just put it back to fix the import :)

`const PokemonDetail = React.lazy(() => import("./pokemon-detail"))`

## Put everything back

And that's what happens when we is dynamic import to load components

---

## Solution

Lesson [104](../104) holds the solution to this lesson.
