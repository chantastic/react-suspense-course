# Enable Suspense Features with Experimental Concurrent Mode using ReactDOM.createRoot

Concurrent Mode is a completely different rendering paradigm for React.  
It changes something that has remained constant since the first version of React: `ReactDOM.render`.

To use Concurrent Mode, we use `ReactDom.createRoot`.
It's API is slightly different then the old faithful `ReactDOM.render` but, with this one change, we can access the future of React.

## Video

[On egghead.io](https://egghead.io/lessons/react-enable-suspense-features-with-experimental-concurrent-mode-using-reactdom-createroot?af=1x80ad)

## Exercise

everything from this point forward requires the experimental build

```diff
- ReactDOM.render(<App />, rootElement);
+ ReactDOM.createRoot(rootElement).render(<App />);
```

Different modes: https://reactjs.org/docs/concurrent-mode-adoption.html#feature-comparison

## Solution

Lesson [108](../108) holds the solution to this lesson.
