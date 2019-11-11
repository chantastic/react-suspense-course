import React from "react";

export function List({
  as: As = React.Fragment,
  resource,
  items,
  renderItem = item => (
    <div>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </div>
  ),
  params,
  ...props
}) {
  return <As {...props}>{items.map(renderItem)}</As>;
}
