# Exercise

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
