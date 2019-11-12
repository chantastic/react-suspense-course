import React from "react";
import ErrorBoundary from "./error-boundary";
const Pokemon = React.lazy(() => import("./pokemon"));

export default function() {
  return (
    <React.Fragment>
      <ErrorBoundary fallback={<h1>...couldn't catch 'em all</h1>}>
        <React.Suspense fallback="Locating pokemon...">
          <Pokemon />
        </React.Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}
