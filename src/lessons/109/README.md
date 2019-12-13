# Bypass Receded Views with useTransition's timeoutMs option

Suspense components know one thing — how to show a fallback when promises are pending.
As new data is requested in these Suspense boundaries, the previous data will be replaced with the fallback.

This is re-presentation of the fallback state is known as the "receded state".

We can configure `useTransition` to present the the previous rendering of the component for a specified duration with the `timeoutMs' option.

## Video

[On egghead.io](https://egghead.io/lessons/react-bypass-receded-views-with-usetransition-s-timeoutms-option?af=1x80ad)

## Exercise

We have this component,
We're using useTransition to deprioritize prevent our suspensified state update block user updates

But we have a problem.
Let's slow things down to see it.

When we click the Next button, our entire app goes back to the loading state.
This is pretty jarring.

React calls this view the "Receeded" state.

Our component is fetching the next component and therefor Suspends,
rendering the nearest fallback.

So they've given us a mechanism to bypass this receeded state.

useTransition takes an options object.
We can pass `timeoutMs` a period of time we're willing to see the previous state before transitioning to the next view.
This is a maximum.
So if the requist resolves in less time, we won't be left waiting the full time specified.

Now, when we click next, the previous state sticks around.

If we slow things down, we see that the transition will happen (ready or not) after the specified wait time.
But an fast speeds, we won't see the receeded state.

## Solution

Lesson [110](../110) holds the solution to this lesson.
