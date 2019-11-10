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

// 1.1 get startTransition from useTransition
// 1.2 get userBlocking error — we want UI to be immediately responsive while state updates in background
// 1.3 wrap setResource in useTransition
// 1.4 set { timeoutMs: maxWait }

export default function Pokemon() {
  let [resource, setResource] = React.useState(initialResource);
  let [startTransition] = React.useTransition();

  let pokemon = resource.read();

  return (
    <div>
      {pokemon.name}
      <button
        type="button"
        onClick={() => {
          startTransition(() => setResource(fetchPokemon(pokemon.id + 1)));
        }}
      >
        Next
      </button>
    </div>
  );
}
