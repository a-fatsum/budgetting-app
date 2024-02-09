import React from "react";
// import components
import Expense from "./Expense";
import ReactDatePicker from "react-datepicker";
//

const ExpensesList = ({ expenses, setExpenses, addTotal }) => {
  //

  //
  //
  return (
    <div className="list-of-expenses">
      <h3>Expenses</h3>

      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          name={expense.name}
          amount={expense.amount}
          dueDate={expense.date}
          type={expense.type}
          //
        ></Expense>
      ))}

      <div>Total {addTotal(expenses)}</div>
    </div>
  );
};

export default ExpensesList;
