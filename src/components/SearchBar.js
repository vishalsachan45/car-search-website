import React from 'react';
import './searchBar.css';

const SearchBar = ({ setSearchTerm }) => {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  return (
    <div className="searchBar">
      <i className="fas fa-search searchIcon"></i> {/* Search icon */}
      <input
        className="inputBox"
        type="text"
        placeholder="Search cars..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
