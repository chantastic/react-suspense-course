# Coordinate Fallback rendering with the SuspenseList Component

`SuspenseList` is how React coordinates the reveal order of `Suspense` components.  
It only accepts `Suspense` components as children — which can effect where you error boundaries are placed.

By default `SuspenseList` will show suspended component fallbacks together and reveal `children` as suspenders resolve.

## Exercise

SuspenseList

Now that we have a couple suspense compopnents, wouldn't it be nice to coordinate loading states?

- wrap in suspense
  - revealOrder="together" to make it break
  - Suspense need to be direct children of SuspenseList move error boundaries inside Suspense — fixed!
- let's slow down our promises to see this thing in action
- let's update our messages, fallbacks can be components
- the come in together now. let's see the default now that we're delaying the responses
