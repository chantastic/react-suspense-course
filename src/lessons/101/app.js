import React from "react";
// 1. Change this static import to a dynamic import, wrapped in React.lazy
import PokemonDetail from "./pokemon-detail";

export default function App() {
  return (
    <div>
      {/* 2. Wrap this component in a React.Suspense component with fallback */}
      <PokemonDetail />
    </div>
  );
}
