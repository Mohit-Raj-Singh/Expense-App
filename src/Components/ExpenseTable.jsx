import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

export const ExpenseTable = () => {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    axios
      .get("https://expense-server-7l36.onrender.com/expense")
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4 min-w-full divide-y whitespace-nowrap">
      <h1 className="text-2xl font-semibold mb-4">My Expense Manager</h1>

      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-300">Name</th>
            <th className="px-4 py-2 border-b border-gray-300">Category</th>
            <th className="px-4 py-2 border-b border-gray-300">
              Date of Expense
            </th>
            <th className="px-4 py-2 border-b border-gray-300">Amount</th>
            <th className="px-4 py-2 border-b border-gray-300">Updated at</th>
            <th className="px-4 py-2 border-b border-gray-300">Created by</th>
            <th className="px-4 py-2 border-b border-gray-300">Edit</th>
            <th className="px-4 py-2 border-b border-gray-300">Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td className="px-4 py-2 border-b border-gray-300">
                {expense.name}
              </td>
              <td className="px-4 py-2 border-b border-gray-300">
                {expense.category}
              </td>
              <td className="px-4 py-2 border-b border-gray-300">
                {expense.date}
              </td>
              <td className="px-4 py-2 border-b border-gray-300">
                {expense.amount}
              </td>
              <td className="px-4 py-2 border-b border-gray-300">
                {expense.update}
              </td>
              <td className="px-4 py-2 border-b border-gray-300">
                {expense.user}
              </td>
              <td className="px-4 py-2 border-b border-gray-300">
                {<MdEdit />}
              </td>
              <td className="px-4 py-2 border-b border-gray-300">
                {<MdDelete />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
