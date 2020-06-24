import React from "react";

const Filter = ({ handleFilterChange }) => (
  <div>
    filter shown with: <input onChange={handleFilterChange} />
  </div>
);

export default Filter;
