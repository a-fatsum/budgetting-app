import { useState } from "react";
import DatePicker from "react-datepicker";
// import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
//
import { calculateTotal } from "../utils";
import "react-datepicker/dist/react-datepicker.css";
//
import "react-datepicker/dist/react-datepicker-cssmodules.css";
//
import { CalculateDeposits } from "../utils";
//
const Income = ({
  incomeBalance,
  setIncomeBalance,
  incomeDeposit,
  setIncomeDeposit,
  //
}) => {
  const [depositAmount, setDepositAmount] = useState("");
  const [depositDate, setDepositDate] = useState(new Date());
  const [depositType, setDepositType] = useState("weekly");
  //
  const createIncomeDeposit = (amount, date, type) => {
    const id = new Date().valueOf();
    setIncomeDeposit([...incomeDeposit, { id, amount, date, type }]);
  };
  //
  if (incomeDeposit.length !== 0) {
    incomeDeposit.map((deposit) => {
      // console.log(deposit.type);
    });
  }

  const onSubmitDeposit = (e) => {
    e.preventDefault();
    if (depositAmount && depositDate) {
      createIncomeDeposit(
        depositAmount,
        depositDate.toDateString(),
        depositType
      );
      setDepositAmount("");
      CalculateDeposits(incomeDeposit[0].type);
    }
  };

  // totalToday

  const TotalBalance = () => {
    if (incomeDeposit.date <= new Date()) {
      console.log("works");
    } else {
      // console.log(incomeDeposit[0].date);
    }

    return Number(incomeBalance) + Number(depositAmount);
  };
  //
  return (
    <div>
      <h3>Income</h3>
      <div className="income income-balance">
        <h6>Balance--</h6>
        <span>{incomeBalance}</span>
        <input
          placeholder="Balance"
          onChange={(e) => {
            setIncomeBalance(e.currentTarget.value);
            // console.log(incomeBalance);
          }}
        ></input>
      </div>

      <form className="income-form" onSubmit={onSubmitDeposit}>
        <div className="income income-deposit">
          <div>
            <h6>Deposit--</h6>
            <input
              placeholder="Deposit"
              onChange={(e) => {
                setDepositAmount(e.currentTarget.value);
              }}
            ></input>
          </div>
          <div>
            <h6>Next Deposit Date</h6>
            <DatePicker
              placeholderText={depositDate}
              onChange={(value, e) => {
                setDepositDate(value);
              }}
              // type="date"
            ></DatePicker>
          </div>
          <select onChange={(e) => setDepositType(e.currentTarget.value)}>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Fortnightly</option>
            <option>one-off</option>
          </select>
          <button type="submit">Add Deposit</button>
        </div>

        <div className="income income-total">
          <div>
            <h6>Total-Today-</h6> <h6> {TotalBalance()} </h6>
          </div>
          <div>
            <h6>Total after expenses </h6> <h6>$ Amount--</h6>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Income;
