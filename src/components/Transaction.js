import React, { useState } from "react";

function Transaction() {
  const [entry, setEntry] = useState("");
  const [amount, setAmount] = useState(0);
  const [transaction, setTransaction] = useState({});
  const newTransaction = {
    id: Math.floor(Math.random() * 100000000),
    entry,
    localAmount: +amount,
  };
  //time stamp use instead of id
  const handleSubmit = (e) => {
    e.preventDefault();
    setTransaction(newTransaction);
    console.log(transaction);
  };
  return (
    <div className="center-block">
      <h2>Add New Transaction</h2>
      <div>
        <div>
          <input
            type="text"
            value={entry}
            placeholder="Transaction Category"
            onChange={(e) => {
              setEntry(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="number"
            value={amount}
            placeholder="Enter the amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <button onClick={handleSubmit}>Add Transaction</button>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
