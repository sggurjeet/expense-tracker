import React, { useState } from "react";
import DropDown from "../UI/DropDown";
// import IncomeExpense from "./IncomeExpense";

export default function AddTransactions({ id, addTransaction }) {
  const [entry, setEntry] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  // const [radio, setRadio] = useState("EXPENSE");
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: id,
      text: entry,
      amount: amount,
      date: date,
      // type: radio,
    };
    addTransaction(newTransaction);
    setEntry("");
    setAmount(0);
    setDate("");
  };

  const handleSelect = (changedvalue) => {
    setEntry(changedvalue);
    console.log(changedvalue);
  };
  return (
    <div className="add_transaction">
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="transaction_dropdown">
          {/* <label>Entry</label>
          <input
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Enter Text..."
            type="text"
          /> */}
          <DropDown onSelectedChange={handleSelect} />
        </div>
        <div className="transaction_amount">
          <label>Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount..."
            type="number"
          />
        </div>
        <div className="transaction_date">
          <label>Date</label>
          <input
            value={date}
            min="2000-01-01"
            max="2030-01-01"
            onChange={(e) => setDate(e.target.value)}
            type="date"
          />
        </div>
        <button>Add Transaction</button>
      </form>
    </div>
  );
}
