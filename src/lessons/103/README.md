# Exercise

**DRAFT**

Now that we have the Suspense and Error Boundaries mapped out,
I want to take just a second to introduce you to the three states we're setup to handle.

### Error

```js
const PokemonDetail = React.lazy(() => Promise.reject());
```

### Pending

```js
const PokemonDetail = React.lazy(
  () => new Promise(resolve => setTimeout(resolve, 1000))
);
```

### Resolved

const PokemonDetail = React.lazy(
() =>
new Promise(resolve =>
setTimeout(() => resolve({ default: () => <div>Fake Pokemon</div> }), 2000)
)
);

## Put everything back

And that's what happens when we is dynamic import to load components
