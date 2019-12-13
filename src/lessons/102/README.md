# Catch Errors with an Error Boundary Component

JavaScript's try/catch feature allows you to isolate errors and prevent them from halting execution in adjacent parts of an app.

Error boundaries do the same for component trees.  
They allow you to isolate errors and send them to an error reporting service.

Let's learn they are used to catch errors thrown by promises.

## Exercise

**DRAFT**

Not all promises resolve.
Some get rejected.

Let's force our lazy loaded component to reject, just to see what happens.

```js
- const PokemonDetail = React.lazy(() => Promise.reject());
+ const PokemonDetail = React.lazy(() => import("./pokemon-detail"));
```

Now everything blows up and we see an error in the console.

As always, React errors are incredibly helpful.
This one links us to a place where doc that will help us implement an error boundary.

Click it.

Error Boundaries are are an incredibly powerful feature in React

They allow you to catch and log errors to error tracking services.

But they play an additional role in Suspense applications.  
Like Suspense's fallback prop, we can use these Errors to catch errors in suspended UI and show an error fallback.

Let's copy and paste this into our

!!! MAYBE STATE THIS AS PART OF THE INITIAL PROBLEM:
Now we get a proper error that we can send to our error reporting service, and show an error in the meantime.
And because that error is caught by a boundary, that component can fail without it effecting other parts of the app.
So if we add a title for our app, we'll see that this stays.

...

- customize it by changing to logging
- customize to take `fallback` prop for Suspense Parity

...
you really only need one of these.
so let's put it into a file for re-use elsewhere

- import React
- export component
- import it to app

---

# Old Notes

Wrap in Error Boundary

## CHALLENGE

Not every promise resolves.
Some are rejected.

So, when we use React.Suspense to show loading and loaded states,
We need to consider exceptions as well.

Error Boundary Crash Course
Error boundaries were a flagship features of React 16 —
One of the first features to illustrate the potential of the fiber rewrite.

To use Suspense effectively, you have to to make use of error boundaries.

- Import `unstable_createResource`
- Create a Resource using `fetch`ed data
- `read()` from Resource
- Discuss "react-cache"s unstable state
