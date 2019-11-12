// Write a Suspense Promise Wrapper
import React from "react";
// import { unstable_createResource as createResource } from "react-cache";

// let PokemonResource = createResource(() =>
//   fetch("https://pokeapi.co/api/v2/pokemon/1").then(res => res.json())
// );

// we need a way to connect our promises to suspense and error boundaries
// this will commonly be the domain of data fetching libraries
// but it's important to know how it all works
function suspensify(thenable) {
  // // 1 let's move outside in (reverse)
  // // 1.3
  // return { name: "Fake Bulbasaur" };
  // // 1.2
  // throw thenable;
  // // 1.1
  // throw Error;

  // 2. make it live with a function: 2 the importance read()
  // 2.3.1 we need to create a condition for future runs
  // 2.3.2 lets assign this as a suspender
  // 2.3.3 start by assigning statuses that we can use to conditionally return
  // let status = "pending"
  // let suspender = thenable.then(
  //   r => {
  //     status = "success";
  //   },
  //   e => {
  //     status = "error";
  //   }
  // );

  // return {
  //   read() {
  //     throw suspender;
  //   }
  // };

  // 2.3.4 - error: assigned but never used. let's use these conditions
  // let status = "pending";
  // let suspender = thenable.then(
  //   r => {
  //     status = "success";
  //   },
  //   e => {
  //     status = "error";
  //   }
  // );

  // return {
  //   read() {
  //     if (status === "pending") {
  //       throw suspender;
  //     }
  //     if (status === "error") {
  //       throw Error; // FIXME: use specific error
  //     }
  //     if (status === "success") {
  //       return { name: "Fake Bulbasaur" }; // FIXME: use data
  //     }
  //   }
  // };

  // 2.3.5 pass state along
  //  - make one more assignment for result
  //  - when successful, result is the result
  //  - when failed, result is an error
  let status = "pending";
  let result;
  let suspender = thenable.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      }
      if (status === "error") {
        throw result;
      }
      if (status === "success") {
        return result;
      }
    }
  };

  // 2.2 — let's see what happens when we put it in a function — by convention read(). update render
  //     - show react trying over and over again, hopelessly trying to re-render that component with the resulting data
  return {
    read() {
      throw thenable.then(r => console.log(r));
    }
  };
  // 2.1 — let's see what happens when the thenable resolves
  throw thenable.then(r => console.log(r));
}

function fetchPokemonData() {
  let pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/1`).then(res =>
    res.json()
  );

  return {
    pokemon: suspensify(pokemon)
  };
}

let resource = fetchPokemonData();

export default function Pokemon() {
  return <div>{resource.pokemon.read().name}</div>;
}
