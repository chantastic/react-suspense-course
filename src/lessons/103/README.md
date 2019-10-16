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

---

# Old notes

Break it.
Wrap it all up in an ErrorBoundary.

## CHALLENGE

- Break the fetch request by pointing it to a non-existent URL
- Follow the link in the resulting error to React's docs on the `ErrorBoundary` component
- Copy/paste the `ErrorBoundary` component into your app — taking care to replace error logging with local logging like `console.log`
- Allow use of a `fallback` prop like `React.Suspense`

---

// CHALLENGE:

// break the api call
// read the resulting error
// copy the error boundary
// change logging to console.log
// show off what it does
// customize ErrorBoundary with fallback, for parity with suspense
// use defaultProps to do i
