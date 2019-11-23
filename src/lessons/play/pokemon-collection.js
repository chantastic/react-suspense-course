import React from "react";

// change it from count to list or start with list

export default function PokemonCollection({ resource, onClick }) {
  // return <div>{resource.read().count}</div>;
  return (
    <div>
      {resource.read().results.map(pokemon => (
        <li
          key={pokemon.name}
          onClick={() => onClick(pokemon.url.split("/")[6])}
        >
          {pokemon.name}
        </li>
      ))}
    </div>
  );
}
