import React from "react";
import Pokemon from "./pokemon";

export default function() {
  return (
    <React.Fragment>
      <Pokemon />
    </React.Fragment>
  );
}

// CHALLENGE: React.Lazy Pokemon
//
// import as React.lazy
// wrap in React.Suspense
// add fallback prop