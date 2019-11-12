export function fetchPokemon(pokemonId) {
  return suspensify(getFromPokeAPI(`/pokemon/${pokemonId}`));
}

export function fetchPokemonCollection() {
  return suspensify(getFromPokeAPI(`/pokemon/`));
}

// BELOW SNATCHED FROM: https://github.com/gaearon/suspense-experimental-github-demo/blob/master/src/api.js

async function getFromPokeAPI(url) {
  const response = await fetch("https://pokeapi.co/api/v2" + url);
  if (response.status !== 200) {
    throw new Error("PokeAPI returned Error " + response.status);
  }
  return response.json();
}

function suspensify(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}
