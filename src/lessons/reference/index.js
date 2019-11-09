import React from "react";
import ErrorBoundary from "./error-boundary";
import { PokemonList } from "./pokemon";

import "../../style.css";

function wrapPromise(promise) {
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

async function fetchPokemonCollection(/* params */) {
  // console.group
  // async/await

  const label = "fetching Pokemon collection";
  console.group(label);
  let data = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  console.log(data);
  let json = await data.json().then(res => ({
    ...res,
    results: res.results.map(p => ({ ...p, id: p.url.split("/")[6] }))
  }));
  console.log(json);
  console.groupEnd(label);
  return json;
}

function fetchPokemonData() {
  let collectionPromise = fetchPokemonCollection();

  return {
    collection: wrapPromise(collectionPromise)
  };
}

const initialResource = fetchPokemonData(0);

export default function() {
  const [resource] = React.useState(initialResource);

  return (
    <React.Fragment>
      <ErrorBoundary>
        <React.Suspense fallback={"yo"}>
          <PokemonList resource={resource} />
        </React.Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}
