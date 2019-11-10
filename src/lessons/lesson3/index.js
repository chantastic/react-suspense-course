import React from "react";
import ErrorBoundary from "../reference/error-boundary";
const Pokemon = React.lazy(() => import("./pokemon"));

export default function() {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <React.Suspense fallback="Locating pokemon...">
          <Pokemon />
        </React.Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}
