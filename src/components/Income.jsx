import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//
import { calculateTotal } from "../utils";

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
  const onSubmitDeposit = (e) => {
    e.preventDefault();
    if (depositAmount && depositDate) {
      createIncomeDeposit(
        depositAmount,
        depositDate.toDateString(),
        depositType
      );
      setDepositAmount("");
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
    <form className="income-form" onSubmit={onSubmitDeposit}>
      <h3>Income</h3>
      <div className="income income-balance">
        <h4>Balance--</h4>
        <span>{incomeBalance}</span>
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
              setDepositAmount(e.currentTarget.value);
            }}
          ></input>
        </div>
        <div>
          <h4>Next Deposit Date</h4>
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
          <h4>Total-Today-</h4> <h4> {TotalBalance()} </h4>
        </div>
        <div>
          <h4>Total after expenses </h4> <h4>$ Amount--</h4>
        </div>
      </div>
    </form>
  );
};

export default Income;
