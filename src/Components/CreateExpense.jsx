import React, { useState } from "react";
import DatePicker from "react-datepicker";

export const CreateExpense = ({ onClose, onCreate }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmitExpense = (e) => {
    e.preventDefault();
    const newExpense = {
      name,
      date,
      category,
      description,
      amount: parseInt(amount),
    };
    onCreate(newExpense);
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Add New Expense</h2>
        <form onSubmit={handleSubmitExpense}>
          <div className="mb-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
              maxLength="140"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Category</option>
              <option value="health">Health</option>
              <option value="electronics">Electronics</option>
              <option value="travel">Travel</option>
              <option value="education">Education</option>
              <option value="books">Books</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg"
              min={0}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
