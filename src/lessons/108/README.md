# De-prioritize Non User-Blocking Updates with useTransition's startTransition function

In blocking rendering, all updates have the same priority.

In Concurrent Mode, work is "interruptible".  
User-blocking updates are treated with the highest importance.

To keep interfaces interactive and snappy, we can de-prioritize slower updates.

The `useTransition` Hook allows React to schedule work after higher priority work.

## Exercise

## title: reduce the priority of async state changes with useTransition

As we click this button — in concurrent mode — requesting the next pokemon, we get this funny new error

```
Warning: PokemonDetail triggered a user-blocking update that suspended.

The fix is to split the update into multiple parts: a user-blocking update to provide immediate feedback, and another update that triggers the bulk of the changes.

Refer to the documentation for useTransition to learn how to implement this pattern.
```

The first thing we get from useTransition is a function.
This function is used to wrap suspendible state updates.

Wrapping our setPokemonResource call in startTransition,
we communicate to React that this update is lower prior.

Also, it just makes the error go away :)

## Solution

[Lesson 109](../109) is holds the solution to this lesson.
