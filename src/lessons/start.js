import React from "react";

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then(res => res.json())
  .then(res => console.log(res.results.map(p => p.name)));

export function Start() {
  return <div>Start</div>;
}