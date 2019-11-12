import React from "react";
function suspensify(thenable) {
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

  return suspensify(pokemon);
}

let initialResource = fetchPokemon(1);

// 1.1 use isPending to show intermediate state
// 1.2 button#disabled={isPending}

export default function Pokemon() {
  let [resource, setResource] = React.useState(initialResource);
  let [startTransition, isPending] = React.useTransition({ timeoutMs: 1000 });

  let pokemon = resource.read();

  return (
    <div>
      {pokemon.name}
      <button
        type="button"
        disabled={isPending}
        onClick={() => {
          startTransition(() => setResource(fetchPokemon(pokemon.id + 1)));
        }}
      >
        Next
      </button>
      <div>{isPending && "⟲"}</div>
    </div>
  );
}
