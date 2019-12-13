# Separate API Utility Functions from Components

Separating concerns can improve code re-use.  
Keeping API functions separate from components can be a nice way to isolate concerns with the data layer and make data fetching functions available to other modules.

## Video

[On egghead.io](https://egghead.io/lessons/react-separate-api-utility-functions-from-components?af=1x80ad)

## Exercise

Now that we have real data, let's add a next button to this component.

We need a place to store the date.
React.useState is great for that.

Let's put the pokemon we've got into state.
And since we'll have next pokemon,
Let's call this `initialPokemon`

Now we hookup an onClick
Which — when clicked — will set our Pokemon
Here we'll just give it a suspensified function to fetch the next pokemon

## Solution

Lesson [107](../107) holds the solution to this lesson.
