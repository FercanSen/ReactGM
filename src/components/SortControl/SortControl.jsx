import React, { useState } from 'react';

function SortControl({ currentSelection, onSelectChange }) {
  const [selectedOption, setSelectedOption] = useState(currentSelection);

  const handleSelectChange = (event) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);
    onSelectChange(newSelectedOption);
  };

  return (
    <div>
      <label htmlFor="sortBy">Sort by:</label>
      <select
        id="sortBy"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="Release Date">Release Date</option>
        <option value="Title">Title</option>
      </select>
    </div>
  );
}

export default SortControl;
