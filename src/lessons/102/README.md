# Catch Errors with an Error Boundary Component

JavaScript's try/catch feature allows you to isolate errors and prevent them from halting execution in adjacent parts of an app.

Error boundaries do the same for component trees.  
They allow you to isolate errors and send them to an error reporting service.

Let's learn they are used to catch errors thrown by promises.

## Video

[On egghead.io](https://egghead.io/lessons/react-catch-errors-with-an-error-boundary-component?af=1x80ad)

## Exercise

### 1. Temporarily create an import error

```diff
// app.js

- const PokemonDetail = React.lazy(() => Promise.reject());
+ const PokemonDetail = React.lazy(() => import("./pokemon-detail"));
```

### 2. Read the React's console error

React's errors are great.  
They'll tell you to go here to read more on setting up an `ErrorBoundary` component.

### 3. Copy/Paste React's generic ErrorBoundary into the app

```diff
// app.js

+ class ErrorBoundary extends React.Component {
+   constructor(props) {
+     super(props);
+     this.state = { hasError: false };
+   }
+
+   static getDerivedStateFromError(error) {
+     return { hasError: true };
+   }
+
+   componentDidCatch(error, errorInfo) {
+     logErrorToMyService(error, errorInfo);
+   }
+
+   render() {
+     if (this.state.hasError) {
+       return <h1>Something went wrong.</h1>;
+     }
+
+     return this.props.children;
+   }
+ }
```

### 4. Connect or remove `logErrorToMyService` call

For the purpose of this course, log errors directly to the console.

```diff
componentDidCatch(error, errorInfo) {
-  logErrorToMyService(error, errorInfo);
+  console.error(error, errorInfo);
}
```

### 5. Add a `fallback=` prop like the one Suspense has

```diff
+  static defaultProps = {
+    fallback: <h1>Something went wrong.</h1>
+  };

   render() {
     if (this.state.hasError) {
-      return <h1>Something went wrong.</h1>;
+      return this.props.fallback;
     }

     return this.props.children;
   }
```

### 6. Wrap your Suspense Component in the new ErrorBoundary component to catch and isolate import errors

```diff
+     <ErrorBoundary fallback={<div>Couldn't catch 'em all.</div>}>
        <React.Suspense fallback={"Catching your Pokemon..."}>
          <PokemonDetail />
        </React.Suspense>
+     </ErrorBoundary>
```

## Summary

You've just added an `ErrorBoundary` component.

You'll find that you only really need one of these in an application.

So as an extra credit, move this component into a file of its own.

## Solution

Lesson [103](../103) holds the solution to this lesson.
