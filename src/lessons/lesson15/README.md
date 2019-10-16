# Lesson15

Hash params as cash index

## Challenge

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
