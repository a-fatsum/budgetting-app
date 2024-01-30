import React from "react";
// Import components

import CreateExpense from "./CreatExpense";

const Expenses = () => {
  return (
    <div>
      <form>
        <button>Create Expense</button>
        {/* this will create an expense field */}
      </form>
      <CreateExpense></CreateExpense>
    </div>
  );
};

export default Expenses;
