import { useState } from "react";
import { useDebounce } from "./useDebounce";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  const debounceValue = useDebounce(searchValue, 1000);
  return (
    <>
      <h1>{debounceValue}</h1>
      <input
        type="text"
        placeholder="type something..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </>
  );
};
