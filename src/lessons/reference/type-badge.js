import React from "react";

function Badge({ style, ...props }) {
  return (
    <li
      style={{
        backgroundColor: "gray",
        display: "inline-flex",
        marginRight: ".25em",
        borderRadius: ".25em",
        padding: ".5em 1em",
        color: "white",
        ...style
      }}
      {...props}
    />
  );
}

function getColorForType(type) {
  switch (type) {
    case "fire":
      return "Tomato";
    case "grass":
      return "MediumSeaGreen";
    case "poison":
      return "RebeccaPurple";
    case "water":
      return "DodgerBlue";
    default:
      return "gray";
  }
}

export function TypeBadge({ type, ...props }) {
  return (
    <Badge style={{ backgroundColor: getColorForType(type) }} {...props} />
  );
}
