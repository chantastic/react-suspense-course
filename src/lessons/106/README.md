# Exercise 106

everything from this point forward requires the experimental build

```diff
- ReactDOM.render(<App />, rootElement);
+ ReactDOM.createRoot(rootElement).render(<App />);
```

Different modes: https://reactjs.org/docs/concurrent-mode-adoption.html#feature-comparison