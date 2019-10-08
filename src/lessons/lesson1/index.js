import React from "react";

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then(res => res.json())

export default function() {
  return <div>Lesson One</div>;
}
