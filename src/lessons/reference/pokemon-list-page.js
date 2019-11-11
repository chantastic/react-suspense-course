import React from "react";
import { List } from "./ui";

export default function({ collection }) {
  let results = collection.read().results;

  return (
    <List
      as="ul"
      className="pokemon-list"
      items={results}
      params={{ limit: 30 }}
      renderItem={pokemon => <span>{pokemon.name}</span>}
      // renderItem={pokemon => (
      // <Link
      //   key={pokemon.id}
      //   className="pokemon-list-item"
      //   to={`/pokemon/${pokemon.id}`}
      // >
      //   <img
      //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      //     alt={pokemon.name}
      //     width={50}
      //   />
      //   {pokemon.name}
      // </Link>
      // )}
    />
  );
}
