import { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

//
const CreateExpense = ({ expenses, setExpenses }) => {
  // use state
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState([]);
  const [dueDate, setDueDate] = useState(new Date());
  const [type, setType] = useState("weekly");
  //
  const createExpense = (name, amount, date, type) => {
    const id = new Date().valueOf();
    setExpenses([...expenses, { id, name, amount, date, type }]);
  };
  //

  //
  const onSubmit = (e) => {
    e.preventDefault();
    if (expenseName && amount && dueDate) {
      createExpense(expenseName, amount, dueDate.toDateString(), type);
      setExpenseName("");
      setAmount("");
    }
  };
  //

  //
  return (
    <div>
      <form
        onSubmit={(e) => {
          onSubmit(e);
          // expensesTotalHandler();
        }}
      >
        <button type="submit">Add Expense</button>

        <div className="new-expense-wrapper">
          <input
            placeholder="Expense Name"
            type="text"
            onChange={(e) => setExpenseName(e.currentTarget.value)}
            value={expenseName}
          ></input>
          <input
            placeholder="Expense Amount"
            type="text"
            onChange={(e) => setAmount(e.currentTarget.value)}
            value={amount}
          ></input>

          <DatePicker
            placeholderText={"Due Date"}
            value={dueDate.toLocaleDateString()}
            onChange={(value, e) => {
              setDueDate(value);
              console.log(dueDate);
            }}
          ></DatePicker>

          <select onChange={(e) => setType(e.currentTarget.value)}>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Fortnightly</option>
            <option>one-off</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default CreateExpense;
