import React from "react";

export default function({ children }) {
  return (
    <pre>
      <code>{JSON.stringify(children, null, 2)}</code>
    </pre>
  );
}
