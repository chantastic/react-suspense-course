# Lesson14

Augment Resources

## Challenge

You can use Resources to augment the API we're getting data from.

In our case, the `/pokemon/:id` endpoint uses a Pokemon's id.
But the collection API only gives us urls.
So we need to pull that dat from the url.

(in index)

- use `pokemon.url.split("/")[6]` to get the id portion of the url and use it as the `key`
- check it in dev tools
- we'd like this part of the component API so anyone can use it as we eventually use this to create our own application routes
  - let's add it to the resource
  - chain another .then to modify the cached resource
  - open up the returned object and spread out the response
  - now add `res.results`, which we'll modify
  - `map()` over the results, taking pokemon and returning pokemon
  - spread out `pokemon` over a new object
  - add an `id` property using the same technique we used before
- change our default to use `id`
- change tag to a link to see that we're targeting the right data
- we'll come back and use ReactRouter now that we have that data
