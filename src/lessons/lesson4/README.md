# Lesson4

What's a Resource?
How does it talk with Suspense?

## CHALLENGE

- Define your own `createResource` function
  - Have it return an object
  - Give that object a `read()`
  - Make `read()` throw an `Error()`
  - Have `read()` throw a the unresolved promise
  - Have `read()` return content

```js
// const PokemonDetail = React.lazy(() => Promise.reject());
// const PokemonDetail = React.lazy(() => Promise.reject(new Error("fail")));
// const PokemonDetail = React.lazy(() => Promise.resolve());
// const PokemonDetail = React.lazy(() =>
//   Promise.resolve({
//     default: function() {
//       return <div>hi</div>;
//     }
//   })
// );
//

// const PokemonDetail = React.lazy(() =>
//   Promise.resolve({
//     default: function() {
//       return <div>Fake Module</div>;
//     }
//   })
// );
```
