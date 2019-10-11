import React from "react";
const Pokemon = React.lazy(() => import("./pokemon"));

export default function() {
  return (
    <React.Fragment>
      <ErrorBoundary fallback={<h1>...couldn't catch 'em all</h1>}>
        <React.Suspense fallback="...loading pokemon">
          <Pokemon />
        </React.Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}
ErrorBoundary.defaultProps = {
  fallback: <h1>Something went wrong.</h1>
};

// CHALLENGE:
//
