# Hoist Component State

Hoisting state is a common Refactoring in React.  
State in one component may need to be lifted up to a parent component for coordination with other component state.

This can be an error-prone refactoring.  
With a good editor, it's best to start with the returned JSX and move out.

## Exercise

## Motions

start from the outermost and move up because VSCode will show us what we aren't using

- move the next out
- move state and useTransition to App() component
- move initialPokemon App Module
- move imports
- pass as props to component
- update button to call use pokemonResource.read()
