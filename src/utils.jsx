import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  setDate,
  startOfMonth,
  sub,
} from "date-fns";

//
export function getExpense() {
  const expenses = { list: [], expenses: [], expensesTotal: [] };

  try {
    const expenseItem = localStorage.getItem("expenseItem");
    if (expenseItem) {
      return JSON.parse(expenseItem);
    } else {
      return expenses;
    }
  } catch (e) {
    return expenses;
  }
}

//

export function setItems(list, expenses, expensesTotal) {
  try {
    localStorage.setItem(
      "expenseItem",
      JSON.stringify({ list, expenses, expensesTotal })
    );
  } catch (e) {}
}

//
//
//
// CalculateTotal
export function calculateTotal(arr) {
  const amounts = [];
  arr.forEach((el) => {
    amounts.push(el.amount);
  });
  return amounts.reduce((sum, num) => {
    return Number(sum) + Number(num);
  }, 0);
}
//
//
//

//
//
//
//Calculate  regular deposits - return an obkect with a list of dates and balances
// CalculatDeposits
export function CalculateDeposits(
  array
  //  initDate, deposit, initBalance
) {
  array.map((el) => {
    const cycle =
      el.type === "weekly"
        ? 7
        : el.type === "fortnightly"
        ? 14
        : el.type === "monthly"
        ? 30
        : "one-off";
    console.log(el);
  });
}
