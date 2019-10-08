import React from "react";
// import { unstable_createResource as createResource } from "react-cache";

function createResource(thenable) {
  return {
    read: () => {
      // throw Error();
      // throw thenable();
      return {
        results: [{ name: "Bulbasaur" }]
      };
    }
  };
}

let PokemonCollection = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon/").then(res => res.json())
);

function PokemonList() {
  return PokemonCollection.read().results.map(p => (
    <div key={p.name}>{p.name}</div>
  ));
}

export default function() {
  return (
    <div>
      <ErrorBoundary fallback={<h1>Couldn't catch 'em all</h1>}>
        <React.Suspense fallback="loading...">
          <PokemonList />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
