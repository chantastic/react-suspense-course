# De-prioritize Non User-Blocking Updates with useTransition's startTransition function

In blocking rendering, all updates have the same priority.

In Concurrent Mode, work is "interruptible".  
User-blocking updates are treated with the highest importance.

To keep interfaces interactive and snappy, we can de-prioritize slower updates.

The `useTransition` Hook allows React to schedule work after higher priority work.

## Video

[On egghead.io](https://egghead.io/lessons/react-de-prioritize-non-user-blocking-updates-with-usetransition-s-starttransition-function?af=1x80ad)

## Solution

Lesson [109](../109) holds the solution to this lesson.
