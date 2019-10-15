import React from "react";
const Pokemon = React.lazy(() => import("./pokemon"));

export default function() {
  return (
    <React.Fragment>
      <React.Suspense fallback="Locating pokemon...">
        <Pokemon />
      </React.Suspense>
    </React.Fragment>
  );
}
