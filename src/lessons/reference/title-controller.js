import React from "react";

export const Context = React.createContext();

const initialState = { title: "Pokedex" };

function reducer(state, action) {
  switch (action.type) {
    case "show_pokemon":
      return { title: `${action.payload.name} | Pokedex` };
    default:
      return { title: "Pokedex" };
  }
}

export function Controller({ children }) {
  let titleReducer = React.useReducer(reducer, initialState);
  let [state] = titleReducer;

  React.useEffect(() => {
    document.title = state.title;
  }, [state.title]);

  return <Context.Provider children={children} value={titleReducer} />;
}
