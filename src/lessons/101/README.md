# Exercise

## Import a Component Dynamically with Suspense and React.lazy

Code-split Component code and load asynchronously

## Steps

### 1 Convert import syntax from Static to Dynamic

We get an error because PokemonDetail isn't a component at the point of render

```diff
// app.js

- import PokemonDetail from "./pokemon-detail";
+ const PokemonDetail = React.lazy(() => import("./pokemon-detail"));
```

### 2 Wrap the import in React.lazy(() => ) to communicate promise status to Suspens

Get a Suspense Error

### 3 Wrap in Suspense with `fallback` prop

```diff
// app.js

- <PokemonDetail />
+ <React.Suspense fallback={"Looking up Pokemon..."}>
+   <PokemonDetail />
+ </React.Suspense>
```

We can look in the network panel and see that this chunk of code is now being asyncronously loaded — and no longer in our application bundle.

If it's hard to see, you can change the network speed to see, you can change the network speed. \* Or use the React Dev Tools to Suspend that component — we'll talk more about devtools later in the course

## Summary

Congrats! You've used Suspense to dynamically import a component and manage the transition from loading message to loaded component.

## Other Notes

The Three "R"s of #ReactJS Suspense

- wrap promises
- read() from components
- wrap read()-ing components in <Suspense />

---

## Old Notes

Lazy load a Component with React.Lazy and React.Suspense

## CHALLENGE: React.Lazy Pokemon

- Import `Pokemon` component lazily (as-needed) — using `React.lazy`
- Wrap `Pokemon` component in `React.Suspense`
- Provide `"Locating pokemon..."` as a `fallback`
