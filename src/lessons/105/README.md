# Track Async Requests with React's useState Hook

The `useState` Hook is the best way to track state in React.  
It's capabilities aren't limited to known values either.  
State can be set with asynchronously resolved values as well — like the result of a fetch request.
Wrapped promises can be given to `useState` to communicate promise status for state transitions.

## Exercise

- make fetching function dynamic
- put in api.js file

---

# Old Notes

Create Resource with id

## Challenge

- Add an `id` prop to `Pokemon`
  - Use `2` for Ivysaur to prove that it works
  - Take the `id` prop in `Pokemon`
  - Pass it to `read()`
  - Take id as an argument and use a template literal string to change to fetch pokemon
- Now, we've stolen a DOM attribute. Talk about that.
