# Wrap Fetch Requests to Communicate Pending, Error and Success Status to Suspense

We can write our own promises wrappers to communicate pending, error, and success statuses to `Suspense` and error boundaries components.

The wrapper we write in this lesson is the minimum viable wrapper required for data fetching.  
Knowing how to wrap promises for communication with `Suspense` and error boundaries allows you to suspend any asynchronous data.

## Exercise

Anything promise can connect to suspense.
You just need to make a wrapper.

// 1 change component to read pokemon.name
// \* read from suspensify function
// ** throw Error
// ** return fake data
// \*\* take and throw resolved promise

// 2 add a conditional mechanism
// we can see that we have three conditions that we need to handle: "pending", "error", and "success". so lets write a conditional for these
// \* create a status variabl to switch on each time
// \*\* play around with it

// 3 make it live
// _ let's create a variable suspender and have it assign status in resolved and rejected cases
// 4 connect it up
// _

// 4 extract into api.js file

// 3
// let status = "pending";
// let result;
// let suspender = promise.then(
// resolve => {
// status = "success";
// result = resolve;
// },
// error => {
// status = "error";
// result = error;
// }
// );

// if (status === "pending") {
// throw suspender;
// }
// if (status === "success") {
// return { name: "Fake Bulbasaur" };
// }
// if (status === "error") {
// throw Error;
// }

// 2
// if (status === "pending") {
// throw promise;
// }
// if (status === "success") {
// return { name: "Fake Bulbasaur" };
// }
// if (status === "error") {
// throw Error;
// }

// 1
// throw promise;
// return { name: "Fake Bulbasaur" };
// throw error;

---

# Old Notes

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

## Solution

[Lesson 105](../105) is holds the solution to this lesson.
