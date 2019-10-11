import React from "react";
import JSONI from "./jsoni";
import { unstable_createResource as createResource } from "react-cache";

let PokemonResource = createResource(id =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
);

let ImageResource = createResource(
  src =>
    new Promise(resolve => {
      let img = new Image();
      img.onload = () => resolve(src);
      img.src = src;
    })
);

function Img({ src, alt, ...props }) {
  return <img src={src} alt={alt} {...props} />;
}

export function Pokemon({ id, ...props }) {
  let pokemon = PokemonResource.read(id);

  React.useEffect(() => {
    document.title = pokemon.name;
  });

  return (
    <React.Fragment>
      <div {...props}>{pokemon.name}</div>
      <img src={pokemon.sprites.front_default} />
      <React.Suspense maxDuration={0} fallback="...loading image">
        <Img src={ImageResource.read(pokemon.sprites.front_default)} />
      </React.Suspense>
      <JSONI>{pokemon}</JSONI>
    </React.Fragment>
  );
}

let PokemonCollection = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(res => ({
      ...res,
      results: res.results.map(p => ({ ...p, id: p.url.split("/")[6] }))
    }))
);

export function PokemonList({
  as: As = React.Fragment,
  renderItem = ({ id, name, ...props }) => (
    <div key={id} {...props}>
      {name}
    </div>
  ),
  ...props
}) {
  React.useEffect(() => {
    document.title = "pokemon";
  });

  let pokemonCollection = PokemonCollection.read();
  return <As {...props}>{pokemonCollection.results.map(renderItem)}</As>;
}
