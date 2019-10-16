import React from "react";

export const DocumentTitleContext = React.createContext();

export function useDocumentTitle(title) {
  React.useEffect(() => {
    document.title = title;
  });
}
