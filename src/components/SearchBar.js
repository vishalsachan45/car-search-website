import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search cars..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
