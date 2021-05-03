import debounce from "lodash/debounce";
import React, { useState, useEffect } from "react";

type DebounceQueryProps<T> = {
  query: T;
  setQuery: React.Dispatch<React.SetStateAction<T>>;
  debounceTime?: number;
};

const useDebounceQuery = <T>(
  onDebounce: (query: T) => void,
  initialQuery: T,
  debounceTime = 500
): DebounceQueryProps<T> => {
  const [query, setQuery] = useState<T>(initialQuery);

  const delayedQuery = React.useMemo(
    () =>
      debounce(() => {
        onDebounce(query);
      }, debounceTime),
    [query, onDebounce]
  );

  useEffect(() => {
    delayedQuery();
    return delayedQuery.cancel;
  }, [query, delayedQuery]);

  return { query, setQuery };
};

export default useDebounceQuery;
