import { useState } from "react";
// Import components
import CreateExpense from "./CreateExpense";
import Income from "./Income";
import Savings from "./Savings";
import { getExpense, setExpense, calculateTotal } from "../utils";
import BudgetLayout from "./BudgetLayout";
import ExpensesList from "./ExpensesList";
//
//
const Form = () => {
  //  use State
  const [expenses, setExpenses] = useState(() => getExpense().expenses);
  //
  //
  const [regularIncome, setRegularIncome] = useState([]);
  //
  const [incomeDeposit, setIncomeDeposit] = useState([]);
  //
  return (
    <div className="main-container">
      <CreateExpense
        expenses={expenses}
        setExpenses={setExpenses}
      ></CreateExpense>

      <div>{new Date().toDateString()}</div>

      <div className="expenses-income-savings-wrapper">
        <ExpensesList
          addTotal={calculateTotal}
          expenses={expenses}
          setExpenses={setExpenses}
        ></ExpensesList>

        <div className="income-savings-wrapper">
          <Income
            setRegularIncome={setRegularIncome}
            regularIncome={regularIncome}
            //
            incomeDeposit={incomeDeposit}
            setIncomeDeposit={setIncomeDeposit}
          ></Income>
          <Savings></Savings>
        </div>
      </div>
      <BudgetLayout></BudgetLayout>
    </div>
  );
};

export default Form;
