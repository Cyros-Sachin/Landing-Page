import React, { useState } from 'react';

const SearchBar = ({ users, setFilteredUsers }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase().trim();
    setSearchTerm(value);

    if (value === "") {
      setFilteredUsers([], ""); // Clear results when empty
      return;
    }

    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(value)
    );

    setFilteredUsers(filtered, value);
  };

  return (
    <div className="search-container" id="users">
 
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
