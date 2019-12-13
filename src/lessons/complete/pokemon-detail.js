import React from "react";
import { DelaySpinner } from "./ui";
import { PokemonContext } from "./pokemon";

export default function PokemonDetail() {
  let { pokemon: resource, isStale } = React.useContext(PokemonContext);
  let pokemon = resource.read();

  function TypeItem({ style, ...props }) {
    return (
      <li
        style={{
          backgroundColor: "gray",
          display: "inline-flex",
          marginRight: ".25em",
          borderRadius: ".25em",
          padding: ".5em 1em",
          color: "white",
          ...style
        }}
        {...props}
      />
    );
  }

  function PoisonTypeItem(props) {
    return <TypeItem style={{ backgroundColor: "RebeccaPurple" }} {...props} />;
  }

  function GrassTypeItem(props) {
    return (
      <TypeItem style={{ backgroundColor: "MediumSeaGreen" }} {...props} />
    );
  }

  function WaterTypeItem(props) {
    return <TypeItem style={{ backgroundColor: "DodgerBlue" }} {...props} />;
  }

  function FireTypeItem(props) {
    return <TypeItem style={{ backgroundColor: "Tomato" }} {...props} />;
  }

  return (
    <article style={isStale ? { opacity: 0.5 } : null}>
      <section className="detail-header">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width="200"
        />

        <div>
          <h2 className="pokemon-title">
            {pokemon.name} {isStale && <DelaySpinner />}
          </h2>

          <div className="pokemon-type-container">
            <h4>type:</h4>
            <ul style={{ padding: 0 }}>
              {pokemon.types.map(({ type }) => {
                switch (type.name) {
                  case "grass":
                    return <GrassTypeItem>{type.name}</GrassTypeItem>;
                  case "poison":
                    return <PoisonTypeItem>{type.name}</PoisonTypeItem>;
                  case "water":
                    return <WaterTypeItem>{type.name}</WaterTypeItem>;
                  case "fire":
                    return <FireTypeItem>{type.name}</FireTypeItem>;
                  default:
                    return <TypeItem>{type.name}</TypeItem>;
                }
              })}
            </ul>
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
              <span className="stat-header-long">
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
            <div className="stat-item">
              <span className="stat-header">{base_stat}</span>
              <span className="stat-body">{stat.name.replace("-", " ")}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
