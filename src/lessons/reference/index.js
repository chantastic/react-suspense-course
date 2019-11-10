import React from "react";
import ErrorBoundary from "./error-boundary";
import "../../style.css";

// const PokemonDetail = React.lazy(() => Promise.reject());
// const PokemonDetail = React.lazy(() => Promise.reject(new Error("fail")));
// const PokemonDetail = React.lazy(() => Promise.resolve());
// const PokemonDetail = React.lazy(() =>
//   Promise.resolve({
//     default: function() {
//       return <div>hi</div>;
//     }
//   })
// );
//

const PokemonDetail = React.lazy(() => import("./pokemon-detail"));

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
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
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}

function hashParams(params = {}) {
  let usps = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => usps.append(k, v));

  return `?${usps.toString()}`;
}

async function fetchPokemonCollection(params = {}) {
  // console.group
  // async/await — advantages of async syntax. maybe separate video?

  const label = "fetching Pokemon collection";

  console.group(label);

  let data = await fetch(
    `https://pokeapi.co/api/v2/pokemon${hashParams(params)}`
  );

  console.log(data);

  let json = await data.json().then(res => ({
    ...res,
    results: res.results.map(p => ({ ...p, id: p.url.split("/")[6] }))
  }));

  console.log(json);
  console.groupEnd(label);

  return json;
}

async function fetchPokemon(id) {
  let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return data.json();
}

// const initialResource = fetchPokemonData(800); // only 807

// function PokemonDetail() {
//   return <div>{resource.pokemon.read().name}</div>;
// }

function getNextId(current, max) {
  let next = current + 1;

  if (next > max) {
    return 1;
  }

  return next;
}

function getPrevId(current, max) {
  let prev = current - 1;

  if (prev < 1) {
    return max;
  }

  return prev;
}

/* --- */

// function fetchPokemonData() {
//   let pokemon = fetchPokemon(1);

//   return {
//     pokemon: wrapPromise(pokemon)
//   };
// }

// let resource = fetchPokemonData();

// function PokemonSimple() {
//   return <div>{resource.pokemon.read().name}</div>;
// }

export default function() {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <React.Suspense fallback={"...awaiting pokemon"}>
          <PokemonDetail />
        </React.Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}

/* --- */

// export default function() {
//   const [resource, setResource] = React.useState(initialResource);
//   const [startTransition, isPending] = React.useTransition({ timeoutMs: 3000 });

//   return (
//     <React.Fragment>
//       <ErrorBoundary>
//         <React.Suspense fallback={"...awaiting pokemon"}>
//           <PokemonDetail resource={resource} />
//           <button
//             type="button"
//             disabled={isPending}
//             onClick={() => {
//               startTransition(() => {
//                 const nextPokemonId = getPrevId(
//                   resource.pokemon.read().id,
//                   807 // resource.collection.read().count
//                 );
//                 setResource(fetchPokemonData(nextPokemonId));
//               });
//             }}
//           >
//             prev
//           </button>
//           <button
//             type="button"
//             disabled={isPending}
//             onClick={() => {
//               startTransition(() => {
//                 const nextPokemonId = getNextId(
//                   resource.pokemon.read().id,
//                   807 // resource.collection.read().count
//                 );
//                 setResource(fetchPokemonData(nextPokemonId));
//               });
//             }}
//           >
//             next
//           </button>
//         </React.Suspense>
//       </ErrorBoundary>
//     </React.Fragment>
//   );
// }
