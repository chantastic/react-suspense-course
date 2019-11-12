import React from "react";
const PokemonDetail = React.lazy(() => import("./pokemon-detail"));

export default function App() {
  return (
    <div>
      <React.Suspense fallback={"Loading your Pokemon..."}>
        <PokemonDetail />
      </React.Suspense>
    </div>
  );
}
