# Import Components Lazily with Suspense React.lazy

The `Suspense` component isn't new.  
We've been able to use it since 2018.

Learn the simplest way to start using Suspense in any React codebase (v16.6 or later), using dynamic imports.

## Video

[At egghead.io](https://egghead.io/lessons/react-import-components-lazily-with-suspense-react-lazy?af=1x80ad)

## Exercise

### 1. Convert import syntax from Static to Dynamic

```diff
// app.js

- import PokemonDetail from "./pokemon-detail";
+ const PokemonDetail = import("./pokemon-detail");
```

### 2. Wrap the import in React.lazy() so React knows how to handle promise status

```diff
// app.js

- const PokemonDetail = import("./pokemon-detail");
+ const PokemonDetail = React.lazy(() => import("./pokemon-detail"));
```

### 3. Wrap Imported Component in Suspense with `fallback` prop

```diff
// app.js

- <PokemonDetail />
+ <React.Suspense fallback={<div>Fetching Pokemon..."}>
+   <PokemonDetail />
+ </React.Suspense>
```

We can look in the network panel and see that this chunk of code is now being asyncronously loaded — and no longer in our application bundle.

If it's hard to see, you can change the network speed to see, you can change the network speed.
Or use the React Dev Tools to Suspend that component — we'll talk more about devtools later in the course

## Summary

Congrats! You've used Suspense to dynamically import a component and manage the transition from loading message to loaded component.

## Solution

Lesson [102](../102) holds the solution to this lesson.
