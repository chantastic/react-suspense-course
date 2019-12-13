# Display Loading States Conditionally with React.useTransition's isPending Boolean

It's a good practice to give users immediate feedback while asynchronous work is being completed.

`useTransition` returns a boolean we can use to conditionally render loading UI.  
This boolean lives the second element in the array returned by `useTransitions`.  
By convention, it's assigned to a variable named `isPending`.

## Video

[On egghead.io](https://egghead.io/lessons/react-display-loading-states-conditionally-with-react-usetransition-s-ispending-boolean?af=1x80ad)

## Exercise

useTransition provides a second argument.
by convention, assigned as isPending.

we can use to provide immediate feedback to a user that work is happening.

Let's use it to disable the button, as clicking it again might just delay things further.

And for the fun of it, let's conditionally show an emoji spinner.

Because this is quick and dirty, we can use a style tag to keep all this right inline.

## Solution

Lesson [111](../111) holds the solution to this lesson.
