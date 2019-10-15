import React from "react";
// import JSONI from "./jsoni";
import { unstable_createResource as createResource } from "react-cache";
import { Context as TitleContext } from "./title-controller";
import sleep from "sleep-promise";
import { NetworkContext } from "./network";

let PokemonResource = createResource(id =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res =>
    res.json().then(sleep(2500))
  )
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
  return <img src={ImageResource.read(src)} alt={alt} {...props} />;
}

export function Pokemon({ id, ...props }) {
  let pokemon = PokemonResource.read(id);
  // let [, dispatch] = React.useContext(TitleContext);
  let online = React.useContext(NetworkContext);
  // dispatch({ action: "show_pokemon", payload: pokemon });
  // console.log(dispatch);

  return (
    <React.Fragment>
      <React.unstable_SuspenseList>
        <div {...props}>{pokemon.name}</div>
        <React.Suspense fallback="...finding image">
          <Img src={pokemon.sprites.front_default} />
          {online ? "online :)" : "offline :("}
        </React.Suspense>
      </React.unstable_SuspenseList>
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
  // React.useEffect(() => {
  //   document.title = "pokemon";
  // });

  let pokemonCollection = PokemonCollection.read();
  return <As {...props}>{pokemonCollection.results.map(renderItem)}</As>;
}
