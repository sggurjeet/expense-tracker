import React from "react";
import "../App.css";

export default function Transaction({ transaction, delTransaction }) {
  let sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <div className="list_transaction">
      <li className={transaction.amount >= 0 ? "plus" : "minus"}>
        <div>{transaction.text}</div>
        <div>{transaction.date}</div>
        <div>
          {sign}${Math.abs(transaction.amount)}
        </div>
        <button onClick={() => delTransaction(transaction.id)}>Delete</button>
      </li>
    </div>
  );
}
