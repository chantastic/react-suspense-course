import React from "react";

// 1. Uncomment this baseline `suspensify` function for communicating promise status to React
// function suspensify(promise) {
//   let status = "pending";
//   let result;
//   let suspender = promise.then(
//     response => {
//       status = "success";
//       result = response;
//     },
//     error => {
//       status = "error";
//       result = error;
//     }
//   );

//   return {
//     read() {
//       if (status === "pending") {
//       }
//       if (status === "error") {
//         throw result;
//       }
//       if (status === "success") {
//         return result;
//       }
//     }
//   };
// }

// 2. Fetch a pokemon from PokeAPI and store `pokemon` variable
//    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
// 3. Wrap this fetch request in the `suspensify` function

export default function PokemonDetail() {
  // 4. `pokemon` is now a resource with a `read()` function on it
  //    use `{pokemon.read().name}` to display the name of the first Pokemon fetched from the internet
  return <div>Static Pokemon</div>;
}
