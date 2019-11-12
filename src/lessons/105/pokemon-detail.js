import React from "react";
import { fetchPokemon, suspensify } from "./api";

function suspensify(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    response => {
      status = "success";
      result = response;
    },
    error => {
      status = "error";
      result = error;
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

let pokemon = suspensify(fetchPokemon(1));

export default function PokemonDetail() {
  return <div>{pokemon.read().name}</div>;
}
