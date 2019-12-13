# Coordinate Fallback rendering with the SuspenseList Component

`SuspenseList` is how React coordinates the reveal order of `Suspense` components.  
It only accepts `Suspense` components as children — which can effect where you error boundaries are placed.

By default `SuspenseList` will show suspended component fallbacks together and reveal `children` as suspenders resolve.

## Video

[On egghead.io](https://egghead.io/lessons/react-coordinate-fallback-rendering-with-the-suspenselist-component?af=1x80ad)

## Solution

[Lesson 116](../116) is holds the solution to this lesson.
