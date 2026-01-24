import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const getMatches = (q: string) => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(q).matches;
  };

  const [matches, setMatches] = useState(() => getMatches(query));

  useEffect(() => {
    const media = window.matchMedia(query);

    // setMatches(media.matches);  // esto solo debe ser cuando las queries cambien dinamicamente en runtime

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};
