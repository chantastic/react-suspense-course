//    do this all in a leaf node of Pokemon and show how to elevate it to the app level thru the process

// 1. let [online, updateOnline] = React.useState(true);
// 2. use useEffect to track browser status
//    remove event listeners (show in the console how many times it's run by switching online offline)
// 3. extract to custom component? what's the export? state
// 4. now, having this as a custom Hook is kinda wasteful. it is going to bind these functions wherever used. that's not  great
//    it'd great to buind this up once and provide it on Context
//    convert it all to context
// 5. create wrapping controller component
// 6. maybe talk more about controller components

import React from "react";

function useOnLine() {
  let [online, updateOnline] = React.useState(navigator.onLine);

  function updateOnlineStatus() {
    updateOnline(navigator.onLine);
    // console.log("running updater function");
  }

  React.useEffect(() => {
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    console.log("adding listeners");

    return function() {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
      // console.log("removing");
    };
  });

  return online;
}

export let NetworkContext = React.createContext("test");

export function NetworkController({ children }) {
  let online = useOnLine();

  return <NetworkContext.Provider value={online} children={children} />;
}
