import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//

//
const Income = ({
  incomeBalance,
  setIncomeBalance,
  incomeDeposit,
  setIncomeDeposit,
  nextDepositDate,
  setNextDepositDate,
  depositcycle,
  setDepositCycle,
}) => {
  //
  return (
    <form className="income-form">
      <h3>Income</h3>
      <div className="income income-balance">
        <h4>Balance--</h4>
        <input
          placeholder="Balance"
          onChange={(e) => {
            setIncomeBalance(e.currentTarget.value);
            console.log(incomeBalance);
          }}
        ></input>
      </div>
      <div className="income income-deposit">
        <div>
          <h4>Deposit--</h4>
          <input
            placeholder="Deposit"
            onChange={(e) => {
              setIncomeDeposit(e.currentTarget.value);
              console.log(incomeDeposit);
            }}
          ></input>
        </div>
        <div>
          <h4>Next Deposit Date</h4>
          <input
            onChange={(e) => {
              setNextDepositDate(e.currentTarget.value);
              console.log(nextDepositDate);
            }}
            type="date"
          ></input>
        </div>
        <select
          onChange={(e) => {
            setDepositCycle(e.currentTarget.value);
            console.log(depositcycle);
          }}
        >
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Fortnightly</option>
          <option>one-off</option>
        </select>
      </div>
      <div className="income income-total">
        <h4>Total--</h4> <h4> $ Amount-- </h4>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default Income;
