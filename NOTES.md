* https://ti.to/egghead-live-online-events/build-an-app-with-react-suspense-hooks-and-context-with-michael-chan-2019-10-16/with/4lvkezrcjek

- `JSONI` component for inspecting JSON objects

- https://github.com/facebook/react/pull/16186
  - `useSuspenseTransition` issue.
  - Need Master with `SuspenseList` `revealOrder={"together"|"forwards"|"backwards"}`
  - !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

- `useEffect` (simple) documentTitle in `Pokemon` component
  - must come after read()
  - condition in the fuction not around
  - install eslint hooks rules
  - if we render two, how do we resolve?

* Suspend while img loads
* SHOW IN DEV TOOLS

* CHANGE TITLE
  - transition from useEffect directly to controller
  - don't want these to act autonomously
  - useEffect
  - Controller Component
  - useReducer
  - maybe send the whole pokemon so we can add score

- CAVEAT
  - for those of you who have worked with other libraries, you might think "well, I can do that in React Router or Redux or whatever."
  - Yup. you totally can. Today I want to show you how to do all this stuff without other libraries — just so you can get a sense of how to solve problems that aren't solved — as you come up to them


* MAXDURATION GONE!!!

* https://github.com/facebook/react/pull/15272
* https://reactjs.org/blog/2018/11/27/react-16-roadmap.html
* https://github.com/facebook/react/blob/master/packages/react-devtools/CHANGELOG.md#suspense-toggle

* https://github.com/facebook/react/pull/16186/files


## Next: Working with Suspense components

- useState to make change the pokemon
- JSONI component for inspecting stuff
- style?

## Next/Next:

- ## useNetwork (https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine)
- controller components
- React router

// do this all in a leaf node of Pokemon and show how to elevate it to the app level thru the process

// 1. let [online, updateOnline] = React.useState(true);
// 2. use useEffect to track browser status
// remove event listeners (show in the console how many times it's run by switching online offline)
// 3. extract to custom component? what's the export? state
// 4. now, having this as a custom Hook is kinda wasteful. it is going to bind these functions wherever used. that's not great
// it'd great to buind this up once and provide it on Context
// convert it all to context
// 5. create wrapping controller component
// 6. maybe talk more about controller components