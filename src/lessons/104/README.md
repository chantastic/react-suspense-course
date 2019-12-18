# Wrap Fetch Requests to Communicate Pending, Error and Success Status to Suspense

Like `React.lazy`, we can write promise wrappers — of our own — to communicate pending, error, and success statuses to `Suspense` and error boundaries components.

The wrapper we write in this lesson is the minimum viable wrapper required for data fetching.  
It isn't a robust data solution.
However, knowing how to wrap promises for communication with `Suspense` and error boundaries allows you to suspend any asynchronous data.

## Video

[On egghead.io](https://egghead.io/lessons/react-wrap-fetch-requests-to-communicate-pending-error-and-success-status-to-suspense?af=1x80ad)

## Exercise

### 1. Add a the baseline "suspensify" function

_WARNING:_
This is a minimal reference for how to wrap your promises in Suspense.

```diff
+ function suspensify(promise) {
+   let status = "pending";
+   let result;
+   let suspender = promise.then(
+     response => {
+       status = "success";
+       result = response;
+     },
+     error => {
+       status = "error";
+       result = error;
+     }
+   );
+
+   return {
+     read() {
+       if (status === "pending") {
+         throw suspender;
+       }
+       if (status === "error") {
+         throw result;
+       }
+       if (status === "success") {
+         return result;
+       }
+     }
+   };
+ }
```

### 2. Fetch a Pokemon from Pokeapi

```diff
+ let pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/1`).then(res => res.json())
```

### 3. Wrap the fetch request in the `suspensify` function

```diff
- let pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/1`).then(res => res.json())
+ let pokemon = suspensify(fetch(`https://pokeapi.co/api/v2/pokemon/1`).then(res => res.json()));
```

### 4. Call `pokemon.read()` in PokemonDetail to access data

```diff
- return <div>Static Pokemon</div>;
+ return <div>{pokemon.read().name}</div>;
```

## Solution

Lesson [105](../105) holds the solution to this lesson.
