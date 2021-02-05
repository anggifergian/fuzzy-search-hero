import React from "react";
import "../search.css";

const Search = ({ handleChange }) => {
  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search Heroes"
        onChange={(e) => handleChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default Search;
