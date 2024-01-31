import React from "react";
//

//
const Savings = () => {
  return (
    <div className="savings-container">
      <h3>Savings</h3>
      <div className="savings savings-balance">
        <h4>Balance--</h4>
        <input placeholder="Balance"></input>
      </div>
      <div className="savings savings-deposit">
        <h4>Deposit--</h4>
        <input placeholder="Deposit"></input>
      </div>
      <div className="savings savings-total">
        <h4>Total--</h4> <h4> $ Amount-- </h4>
      </div>
    </div>
  );
};

export default Savings;
