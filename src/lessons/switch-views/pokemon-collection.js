import React from "react";

export default function PokemonCollection({ resource }) {
  return <div>{resource.read().count}</div>;
}
