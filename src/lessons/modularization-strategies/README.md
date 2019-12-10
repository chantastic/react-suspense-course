# Lesson7

Modularization strategies

## Challenge

I don't prescribe to the one-component per file belief because I like to see related code together.

So, with data-fetching components, I like to keep them all in one place.

- Move `PokemonList` and its resource into the `pokemon` file
- Expose everything as a named export

  - Export `PokemonList`
  - Export `Pokemon` as named and default
    - (not that you can indeed do both)
  - Leave Resources private

- Now `Pokemon` as default, doesn't make a huge amount of sense is this type of setup but if we remove that, it breaks `React.lazy` because `lazy` only works with default exports (for now)
- So I like to create a new file just for those lazy-loaded exports
  - Let's callit `pokemon-detail`
  - Now the implementation stays co-located but we can import it lazily

`export { Pokemon as default } from "./pokemon"`
