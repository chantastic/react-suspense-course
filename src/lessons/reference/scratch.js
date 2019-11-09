import React from "react";
import ErrorBoundary from "./error-boundary";
import { PokemonResource, PokemonList } from "./pokemon";
import { NetworkController } from "./network";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams
} from "react-router-dom";
import { useDocumentTitle, DocumentTitleContext } from "./document-title";

import "../../style.css";

const Pokemon = React.lazy(() => import("./pokemon-detail"));

function PokemonView() {
  let { pokemonId } = useParams();
  let { name } = PokemonResource.read(pokemonId); // multiple reads shouldn't hurt because cashed
  let baseTitle = React.useContext(DocumentTitleContext);

  useDocumentTitle(
    `${name.charAt(0).toUpperCase() + name.slice(1)} | ${baseTitle}`
  );

  return (
    <React.Suspense fallback="awaiting Pokemon">
      <Link to="/" className="button-back">
        <span role="img" aria-label="finger pointing left">
          👈
        </span>{" "}
        Back
      </Link>
      <Pokemon id={pokemonId} />
    </React.Suspense>
  );
}

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

function PokemonListView() {
  let title = React.useContext(DocumentTitleContext);

  useDocumentTitle(title);

  return (
    <React.Suspense fallback="awaiting pokemon list">
      <PokemonList
        as="ul"
        className="pokemon-list"
        params={{ limit: 30 }}
        renderItem={pokemon => (
          <Link
            key={pokemon.id}
            className="pokemon-list-item"
            to={`/pokemon/${pokemon.id}`}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
              width={50}
            />
            {pokemon.name}
          </Link>
        )}
      />
    </React.Suspense>
  );
}

export default function() {
  return (
    <React.Fragment>
      <DocumentTitleContext.Provider value="Pokedex">
        <h1 className="title">Pokedex</h1>
        <div className="container">
          <ErrorBoundary fallback={<h1>...couldn't catch 'em all</h1>}>
            <React.Suspense fallback="test">
              <Router>
                <NetworkController>
                  <Switch>
                    <Route path="/pokemon/:pokemonId">
                      <PokemonView />
                    </Route>

                    <Route>
                      <PokemonListView />
                    </Route>
                  </Switch>
                </NetworkController>
              </Router>
            </React.Suspense>
          </ErrorBoundary>
        </div>
      </DocumentTitleContext.Provider>
    </React.Fragment>
  );
}
