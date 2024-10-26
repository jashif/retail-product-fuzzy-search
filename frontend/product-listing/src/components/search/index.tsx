import React, { useState } from "react";
import { useProductContext } from "../../context/product-context";
import "./search.css";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
  const { setSearchValue, loading } = useProductContext()!;

  const [inputValue, setInputValue] = useState("");
  const debouncedSearchTerm = useDebounce(inputValue, 100);

  React.useEffect(() => {
    setSearchValue(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearchValue]);

  return (
    <div>
      <div className={"search-container"}>
        <span>Search</span>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type to search..."
        />
        {loading && <div className="spinner"></div>}
      </div>
    </div>
  );
};

export default Search;
