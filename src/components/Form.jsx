import { useState } from "react";
// Import components
import ListOfExpenses from "./ListOfExpenses";
import CreateExpense from "./CreateExpense";
import Income from "./Income";
import Savings from "./Savings";
import { getExpense, setExpense } from "../utils";
import BudgetLayout from "./BudgetLayout";
//
const Form = () => {
  //  use State
  const [expenses, setExpenses] = useState(() => getExpense().expenses);
  // const [expensesTotal, setExpensesTotal] = useState(
  //   () => getExpense().expensesTotal
  // );
  //
  const [incomeBalance, setIncomeBalance] = useState("");
  const [incomeDeposit, setIncomeDeposit] = useState("");
  const [nextDepositDate, setNextDepositDate] = useState(new Date());
  const [depositcycle, setDepositCycle] = useState("weekly");
  //
  const [expensesTotal, setExpensesTotal] = useState([]);

  //
  const createExpense = (name, amount, dueDate, type) => {
    const id = new Date().valueOf();
    setExpenses([...expenses, { id, name, amount, dueDate, type }]);
  };
  //

  //
  const onDelete = () => {
    console.log("Delete");
  };
  //

  return (
    <div className="main-container">
      <CreateExpense
        expensesTotal={expensesTotal}
        setExpensesTotal={setExpensesTotal}
        onCreate={createExpense}
      ></CreateExpense>
      <div>{new Date().toDateString()}</div>
      <div className="expenses-income-savings-wrapper">
        <div className="list-of-expenses">
          <h3>Expenses</h3>
          {expenses.map((expense) => (
            <ListOfExpenses
              key={expense.id}
              name={expense.name}
              amount={expense.amount}
              dueDate={expense.dueDate}
              type={expense.type}
              onDelete={onDelete}
            ></ListOfExpenses>
          ))}
          <div>Total {expensesTotal}</div>
        </div>

        <div className="income-savings-wrapper">
          <Income
            incomeBalance={incomeBalance}
            setIncomeBalance={setIncomeBalance}
            incomeDeposit={incomeDeposit}
            setIncomeDeposit={setIncomeDeposit}
            nextDepositDate={nextDepositDate}
            setNextDepositDate={setNextDepositDate}
            depositcycle={depositcycle}
            setDepositCycle={setDepositCycle}
          ></Income>
          <Savings></Savings>
        </div>
      </div>

      <BudgetLayout></BudgetLayout>
    </div>
  );
};

export default Form;
