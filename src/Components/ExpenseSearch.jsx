import React, { useState } from 'react';

const ExpenseSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="my-4">
      <label className="block mb-2">Search by Expense Name:</label>
      <div className="flex space-x-4">
        <input
          type="text"
          className="border rounded p-1 flex-grow"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ExpenseSearch;
