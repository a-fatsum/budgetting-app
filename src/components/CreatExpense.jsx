import React from "react";

const CreateExpense = () => {
  return (
    <div>
      <form>
        <input placeholder="Expense Name"></input>
        <input placeholder="Expense Amount"></input>
        <input placeholder="Date" type="date"></input>
        <input placeholder="RECURRENT" type="checkbox"></input>
      </form>
    </div>
  );
};

export default CreateExpense;
