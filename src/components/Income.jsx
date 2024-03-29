import { useState } from "react";
import DatePicker from "react-datepicker";
// import ReactDatePicker from "react-datepicker";
import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  setDate,
  startOfMonth,
  sub,
  addDays,
  addYears,
  addMonths,
  lastDayOfMonth,
  isSameDay,
} from "date-fns";
//
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
  regularIncome,
  setRegularIncome,
  incomeDeposit,
  setIncomeDeposit,
  //
}) => {
  const [depositAmount, setDepositAmount] = useState("");
  const [depositDate, setDepositDate] = useState(new Date());
  const [depositType, setDepositType] = useState("weekly");
  //
  const [incomeBalance, setIncomeBalance] = useState("");
  //
  // dates
  const createIncomeDeposit = (amount, date, type) => {
    const id = new Date().valueOf();
    //
    let cycle =
      type === "weekly"
        ? 7
        : type === "fortnightly"
        ? 14
        : type === "monthly"
        ? 1
        : "one-off";
    const dates = [];
    const nextYearDate = addYears(new Date(date), 1);
    let newDate = new Date(date);
    // let newDate = new Date("31-01-2024");

    //
    //
    while (newDate <= nextYearDate) {
      if (type != "monthly") {
        dates.push(newDate);
        newDate = addDays(newDate, cycle);
      } else if (type === "monthly") {
        // check if it's the last day of the month;
        // const isEndOfMonth = (dateToCheck) => {
        //   const endOfMonthDate = endOfMonth(dateToCheck);
        //   return isSameDay(dateToCheck, endOfMonthDate);
        // };
        if (!isSameDay(newDate, endOfMonth(newDate))) {
          // Add one month to the start of the current month
          newDate = addMonths(newDate, cycle);
          dates.push(newDate);
          console.log(newDate);
          console.log("works");
        } else {
          newDate = endOfMonth(newDate);
          dates.push(newDate);
          newDate = addMonths(newDate, cycle);
          console.log(newDate);
          console.log("does NOT _works");
        }
      }
      //
    }
    //
    setIncomeDeposit([...incomeDeposit, { id, amount, dates, type }]);
    console.log(incomeDeposit);
    console.log(dates);
  };
  //
  //
  //
  //
  //
  //
  //
  //
  //
  if (incomeDeposit.length !== 0) {
    incomeDeposit.map((deposit) => {
      // console.log(deposit.type);
    });
  }
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
          <div className="mt-3">
            <h6>Deposit--</h6>
            <input
              placeholder="Deposit"
              onChange={(e) => {
                setDepositAmount(e.currentTarget.value);
              }}
            ></input>
          </div>
          <div className="m-3 border">
            <h6 className="mr-3 mt-3 ">Next Deposit Date</h6>
            <DatePicker
              placeholderText={depositDate}
              onChange={(value, e) => {
                setDepositDate(value);
              }}
              // type="date"
            ></DatePicker>
          </div>
          <select onChange={(e) => setDepositType(e.currentTarget.value)}>
            <option value={"weekly"}>Weekly</option>
            <option value={"fortnightly"}>Fortnightly</option>
            <option value={"monthly"}>Monthly</option>
            <option value={"oneOff"}>one-off</option>
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
