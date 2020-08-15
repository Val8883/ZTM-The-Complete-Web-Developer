import React, { useState, useEffect } from 'react';

export default function SearchBox({ handleSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = ({ target: { value } }) => {
    setSearchInput(value);
  };

  useEffect(() => {
    handleSearch(searchInput);
  }, [searchInput, handleSearch]);

  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        value={searchInput}
        onChange={handleSearchInput}
      />
    </div>
  );
}
