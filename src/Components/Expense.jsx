import React, { useState, useEffect } from "react";
import axios from "axios";
import DateFilter from "./DateFilter";
import ExpenseSearch from "./ExpenseSearch";
import { ExpenseTable } from "./ExpenseTable";
import { CreateExpense } from "./CreateExpense";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://expense-server-7l36.onrender.com/expense")
      .then((response) => {
        setExpenses(response.data);
        setFilteredExpenses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFilterByDate = (startDate, endDate) => {
    const filtered = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return expenseDate >= startDate && expenseDate <= endDate;
    });
    setFilteredExpenses(filtered);
  };

  const handleSearchExpense = (query) => {
    const filtered = expenses.filter((expense) => {
      return expense.name.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredExpenses(filtered);
    setSearchQuery(query);
  };

  const handleCreateExpense = (expenseData) => {
    axios
      .post("https://expense-server-7l36.onrender.com/expense", expenseData)
      .then((response) => {
        setExpenses([...expenses, response.data]);
        setModalOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-4 min-w-full divide-y whitespace-nowrap">
      <h1 className="text-2xl font-semibold mb-4">My Expense Manager</h1>
      <div className="mb-4">
        <button
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => setModalOpen(true)}
        >
          Create Expense
        </button>
      </div>
      <DateFilter onFilter={handleFilterByDate} />
      <ExpenseSearch onSearch={handleSearchExpense} />
      <ExpenseTable expenses={filteredExpenses} />
      {isModalOpen && (
        <CreateExpense
          onClose={() => setModalOpen(false)}
          onCreate={handleCreateExpense}
        />
      )}
    </div>
  );
};

export default Expenses;
