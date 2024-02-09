import React from "react";

const Expense = ({ name, amount, dueDate, type }) => {
  //
  const onDelete = () => {
    console.log("Delete");
  };
  //
  const x = "BALANCE";
  //
  //
  const formattedDate = `${new Date(dueDate).getDate()} - ${new Date(
    dueDate
  ).toLocaleString("default", { month: "long" })} - ${new Date(
    dueDate
  ).getFullYear()}`;
  //
  return (
    <div>
      <div className="expense">
        {" "}
        {name} {amount} {formattedDate} {type}
        <div className="border">{`Balance on ${formattedDate}: ${x}`}</div>
        <button className="trash-btn" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Expense;
