# Exercise

// 1 change component to read pokemon.name
// \* read from suspensify function
// ** throw Error
// ** return fake data
// \*\* take and throw resolved promise

// 2 add a conditional mechanism
// we can see that we have three conditions that we need to handle: "pending", "error", and "success". so lets write a conditional for these
// \* create a status variabl to switch on each time
// \*\* play around with it

// 3 make it live
// _ let's create a variable suspender and have it assign status in resolved and rejected cases
// 4 connect it up
// _

// 4 extract into api.js file

// 3
// let status = "pending";
// let result;
// let suspender = promise.then(
// resolve => {
// status = "success";
// result = resolve;
// },
// error => {
// status = "error";
// result = error;
// }
// );

// if (status === "pending") {
// throw suspender;
// }
// if (status === "success") {
// return { name: "Fake Bulbasaur" };
// }
// if (status === "error") {
// throw Error;
// }

// 2
// if (status === "pending") {
// throw promise;
// }
// if (status === "success") {
// return { name: "Fake Bulbasaur" };
// }
// if (status === "error") {
// throw Error;
// }

// 1
// throw promise;
// return { name: "Fake Bulbasaur" };
// throw error;
