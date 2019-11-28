import React from "react";

export function DelaySpinner() {
  return (
    <span role="img" aria-label="spinner" className="DelaySpinner">
      <style>{`
        .DelaySpinner {
          animation: 0s linear 0.5s forwards makeVisible, rotation 1.5s infinite linear;
          display: inline-block;
          font-size: .7rem;
          visibility: hidden;
        }

        @keyframes makeVisible {
          to {
            visibility: visible;
          }
        }
        @keyframes rotation {
          from { transform: rotate(0deg) }
          to { transform: rotate(359deg) }
        }
      `}</style>
      🌀
    </span>
  );
}

export function List({
  as: As = React.Fragment,
  items = [],
  renderItem = item => <div>{item.name}</div>,
  ...props
}) {
  return <As {...props}>{items.map(renderItem)}</As>;
}
