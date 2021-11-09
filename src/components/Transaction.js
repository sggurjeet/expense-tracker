import React from "react";

export default function Transaction({ transaction, delTransaction }) {
  let sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <div>
      <li className={transaction.amount >= 0 ? "plus" : "minus"}>
        {transaction.text}
        <div>
          <p style={{ marginRight: 8 }}>{transaction.date}</p>
          {sign}${Math.abs(transaction.amount)}
        </div>
        <button
          className="delete-btn"
          onClick={() => delTransaction(transaction.id)}
        >
          X
        </button>
      </li>
    </div>
  );
}
