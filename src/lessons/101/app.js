import React from "react";
import PokemonDetail from "./pokemon-detail";

export default function App() {
  return (
    <div>
      <React.Suspense fallback={"Catching your Pokemon..."}>
        <PokemonDetail />
      </React.Suspense>
    </div>
  );
}
