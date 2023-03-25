import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedAmount, setUpdatedAmount] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");

  const handleTitleChange = (event) => {
    setUpdatedTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setUpdatedAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setUpdatedDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: updatedTitle,
      amount: updatedAmount,
      date: new Date(updatedDate),
    };

    console.log(expenseData);

    setUpdatedTitle("");
    setUpdatedAmount("");
    setUpdatedDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={updatedTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="10"
            step="10"
            value={updatedAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2019"
            max="31-12-2023"
            value={updatedDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
