import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Expenses from "./Expense";

export const AllRoutes = () => {
  return (
    <div className="p-4 min-w-full divide-y whitespace-nowrap">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/expense" element={<Expenses />} />
      </Routes>
    </div>
  );
};
