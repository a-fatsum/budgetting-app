import React from "react";

const ListOfExpenses = ({ name, amount, dueDate, type, onDelete }) => {
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
        <h4> {name} </h4> <h4>${amount}</h4> <h4>{formattedDate}</h4>{" "}
        <h4>{type}</h4>
        <button className="trash-btn" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ListOfExpenses;
