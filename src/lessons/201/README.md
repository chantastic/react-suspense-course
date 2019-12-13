# Pass Components a useTransition-Wrapped, State-Setting, Callback

The `useState` functions we wrap in `useTransition` function wrappers can be passed around to components like any callback.
Instead of making all of your components aware of Concurrent Mode, you can provide wrapped callbacks and continue compatibility with both legacy and future React code.

## Exercise
