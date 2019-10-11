import React from "react";
const Pokemon = React.lazy(() => import("./pokemon"));

export default function() {
  return (
    <React.Fragment>
      <React.Suspense fallback="...loading bulbasaur">
        <Pokemon />
      </React.Suspense>
    </React.Fragment>
  );
}

// CHALLENGE: 
//
