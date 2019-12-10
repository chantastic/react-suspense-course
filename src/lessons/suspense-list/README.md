# Lesson8

SuspenseList and ConcurrentMode for coordination

## Challenge

We're going to force some latency with `sleep` to see things in slow motion.

- import `sleep-promise` in `pokemon` and sleep the our fetch for an individual pokemon by `2500`ms. This will make the Pokemon load after the list and we'll see that loading state.
- add `SuspenseList` around (imported as `unstable_SuspenseList`)
- provide prop `revealOrder="togother"` to make these two render together
- change the rendering mode from sync to concurrent using `unstable_createRoot`
