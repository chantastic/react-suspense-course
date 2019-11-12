# Exercise 106

everything from this point forward requires the experimental build

```diff
- ReactDOM.render(<App />, rootElement);
+ ReactDOM.createRoot(rootElement).render(<App />);
```
