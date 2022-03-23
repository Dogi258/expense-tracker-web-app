import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const ExpenseSaveDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random(),
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
    console.log("Called from New Expense");
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={ExpenseSaveDataHandler} />
    </div>
  );
};

export default NewExpense;
