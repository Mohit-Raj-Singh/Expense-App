import React, { useState } from 'react';

const DateFilter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = () => {
    onFilter(startDate, endDate);
  };

  return (
    <div className="my-4">
      <label className="block mb-2">Filter by Date:</label>
      <div className="flex space-x-4">
        <input
          type="date"
          className="border rounded p-1"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <span className="mx-2">to</span>
        <input
          type="date"
          className="border rounded p-1"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
          onClick={handleFilter}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default DateFilter;
