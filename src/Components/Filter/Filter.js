import React from 'react';
const Filter = ({ onFilter, filterValue }) => {
  return (
    <>
      <label>
        <h2>Find contacts by name:</h2>
        <input
          name="filter"
          type="text"
          onChange={onFilter}
          value={filterValue}
        />
      </label>
    </>
  );
};

export default Filter;