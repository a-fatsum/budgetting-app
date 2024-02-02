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
