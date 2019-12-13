# Delay the Appearance of a Loading Spinner with CSS

Eager delay spinners are not a good user experience.  
They can make a snappy user interface feel slower.

We want delay spinners to appear only after a perceivable delay.  
`useTransition` doesn't yet have an API for customizing this.  
Until it does, we can use CSS animations to delay visibility of delay spinners.

## Exercise

We have here a component that show ...
And it shows a DelaySpinner that is really helpful with slow internet speeds.
But when we speed it up, we see this unsettling effect.

The spinner pops in for a split second with EVERY SINGLE REQUEST.
That's not necessry or pleasent.

Again, we can fix this and React has a great article on this technique on the Concurrent docs — doc name.

describe

So let's copy it and add it to our own component.

Show online, fast, and slow

Now that this is fleshed out.
Let's move it into a new module for shared ui.

## Video

[On egghead.io](https://egghead.io/lessons/react-delay-the-appearance-of-a-loading-spinner-with-css?af=1x80ad)

# Exercise

## Fine-tuning interactions

... and now that i have these intermediate states in place, i'm willing to wait a little longer before seeing the receeded state.
let's bump it up to somethig like 3 seconds

let's also add a spinner on the next page to make that look live as well

move into UI

## Solution

Lesson [112](../112) holds the solution to this lesson.
