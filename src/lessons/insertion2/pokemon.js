import React from "react";
function suspensifyPromise(thenable) {
  let status = "pending";
  let result;
  let suspender = thenable.then(
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
      }
      if (status === "error") {
        throw result;
      }
      if (status === "success") {
        return result;
      }
    }
  };
}

function fetchPokemon(id) {
  let pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res =>
    res.json()
  );

  return suspensifyPromise(pokemon);
}

let initialResource = fetchPokemon(1);

// 1.1 update fetchPokemon to take id
// 1.2 make button call fetchPokemon with next number. what do we do with it now? put it in state
// 1.3 resource to React.useState(initialResource)
// 1.3 setResource in button
// 1.4 pokemon.read().id + 1
// 1.5 pokemon = resource.pokemon.read()
// next: WTF? with this blowing up the entire view?

export default function Pokemon() {
  let [resource, setResource] = React.useState(initialResource);
  let pokemon = resource.read();

  return (
    <div>
      {pokemon.name}
      <button
        type="button"
        onClick={() => {
          setResource(fetchPokemon(pokemon.id + 1));
        }}
      >
        Next
      </button>
    </div>
  );
}
