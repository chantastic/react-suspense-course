# Avoid this Common Suspense Gotcha by Reading Data From Components

Suspense can have an unfriendly learning curve.  
Components with suspended content need a component boundary.  
Resource reads can't happen in the same component as the `Suspense` and error boundaries components.

When you have your Suspense and error boundary components in place but still get errors about them absence, you probably need to move a `read()` call into a component.

## Video

[On egghead.io](https://egghead.io/lessons/react-avoid-this-common-suspense-gotcha-by-reading-data-from-components?af=1x80ad)

## Solution

Lesson [115](../115) holds the solution to this lesson.
