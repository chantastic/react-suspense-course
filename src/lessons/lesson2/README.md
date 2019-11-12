# Lesson2

Wrap in Error Boundary

## CHALLENGE

Not every promise resolves.
Some are rejected.

So, when we use React.Suspense to show loading and loaded states,
We need to consider exceptions as well.

Error Boundary Crash Course
Error boundaries were a flagship features of React 16 —
One of the first features to illustrate the potential of the fiber rewrite.

To use Suspense effectively, you have to to make use of error boundaries.




- Import `unstable_createResource`
- Create a Resource using `fetch`ed data
- `read()` from Resource
- Discuss "react-cache"s unstable state
