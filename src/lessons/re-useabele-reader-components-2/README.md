# Lesson12

Customize PokemonList with React.Fragment and `as` prop

## Challenge

So what do we do about this `<ul>` wrapper now that we can dynamically change the guts?

- well, we can remove it entirely now that function components can return arrays. then the implementor can wrap it however they like
  - let's change the default renderItem to a `div`
  - I don't love this because when we do want to wrap it, we have this disconnected element in the application tree
- We can use a `React.Fragment` to get the same effect
  - now we can customize it like or `renderItem`
  - it's common practice to use an `as` prop for this
  - now, by default, it renders without a wrapper. but we can provide one if we want — consistente with our `renderItem` function

## Next: Working with Suspense components

Customize all `pokemon` components by adding the feature of selection

- Do we still use render props?
- As component
- How do I get an id into a suspense component
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
