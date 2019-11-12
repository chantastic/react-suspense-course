# Exercise

Now that we have real data, let's add a next button to this component.

We need a place to store the date.
React.useState is great for that.

Let's put the pokemon we've got into state.
And since we'll have next pokemon,
Let's call this `initialPokemon`

Now we hookup an onClick
Which — when clicked — will set our Pokemon
Here we'll just give it a suspensified function to fetch the next pokemon
