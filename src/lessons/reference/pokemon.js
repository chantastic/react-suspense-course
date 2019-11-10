import React from "react";
import { unstable_createResource as createResource } from "react-cache";
import { TypeBadge } from "./type-badge";

export const PokemonResource = createResource(id =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
);

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

/*
- write the function
  - throw error
  - throw thenable
  - return data
- resolve thenable: thenable.then(r => console.log(r))
  - wrap in read to see that it keeps trying to resolve
- evolve strategy to capture
  - if (status === "pending") { throw suspender }
 */
function _wrapPromise(thenable) {
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
  // return {
  //   read() {
  //     throw thenable.then(r => console.log(r));
  //     return {};
  //     throw Error;
  //   }
  // };
  // return {
  //   read() {
  //     throw thenable.then(
  //       r => {
  //         console.log(r);
  //       },
  //       e => {
  //         console.log(e);
  //       }
  //     );
  //     throw Error; // throw error
  //     return {}; // return data
  //   }
  // };
}

function fetchPokemonData() {
  let pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/1`).then(res =>
    res.json()
  );

  return {
    pokemon: _wrapPromise(pokemon)
  };
}

let resource = fetchPokemonData();

export function Pokemon({ id, ...props }) {
  let pokemon = resource.pokemon.read();

  return (
    <article>
      <section className="detail-header">
        <img
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name}`}
          width={200}
        />

        <div>
          <h1 {...props} className="pokemon-title">
            {pokemon.name}
          </h1>

          <div className="pokemon-type-container">
            <h4>type: </h4>
            <div>
              {pokemon.types.map(({ type: { name } }) => {
                return (
                  <TypeBadge key={name} type={name}>
                    {name}
                  </TypeBadge>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-header">{pokemon.height}</span>
            <span className="stat-body">Height</span>
          </div>
          <div className="stat-item">
            <span className="stat-header">{pokemon.weight}</span>
            <span className="stat-body">Weight</span>
          </div>
          <div className="stat-item">
            {pokemon.abilities.map(({ ability }, i) => (
              <span key={ability.name} className="stat-header-long">
                {ability.name.replace("-", " ")}
                {i !== pokemon.abilities.length - 1 && ", "}
              </span>
            ))}
            <span className="stat-body">Abilities</span>
          </div>
        </div>
      </section>

      <section>
        <h2>Stats</h2>

        <div className="stats-grid">
          {pokemon.stats.map(({ base_stat, stat }) => (
            <div key={stat.name} className="stat-item">
              <span className="stat-header">{base_stat}</span>
              <span className="stat-body">{stat.name.replace("-", " ")}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

function hashParams(params = {}) {
  let usps = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => usps.append(k, v));

  return `?${usps.toString()}`;
}

const PokemonCollection = createResource(params => {
  return fetch(`https://pokeapi.co/api/v2/pokemon${params}`)
    .then(res => res.json())
    .then(res => ({
      ...res,
      results: res.results.map(p => ({ ...p, id: p.url.split("/")[6] }))
    }));
});

export function PokemonList({
  as: As = React.Fragment,
  resource,
  renderItem = ({ id, name, ...props }) => (
    <div key={id} {...props}>
      {name}
    </div>
  ),
  params,
  ...props
}) {
  // let pokemonCollection = PokemonCollection.read(hashParams(params));
  let pokemonCollection = resource.collection.read();

  return <As {...props}>{pokemonCollection.results.map(renderItem)}</As>;
}
