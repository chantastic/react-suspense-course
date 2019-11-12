# Lesson15

Hash params as cash index

## Challenge

When reading from `react-cache`, don't think of the argument as an `id`.
It's any unique identifier that can be used to memoize that request.
This is helpful when implementing a request with url search parameters.

- Add `params` prop to `PokemonList` which takes an object
- Use hashed params as the cache key in `read()`
  - You'll likely want to use a hashing function
  - You could write your own (as I will) or use one from npm
- Add search params to fetch request
- Play with the search paramaters `limit` and `offset`
