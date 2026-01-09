import { useEffect } from "react";

/**
 * Custom hook to set document title
 * @param {string} title - Page title
 */
export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | AlloraMart`;
    return () => {
      document.title = "AlloraMart";
    };
  }, [title]);
};
