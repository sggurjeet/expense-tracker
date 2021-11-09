import React from "react";
import Transaction from "./Transaction";

export default function TransactionsList({ transactions, delTransaction }) {
  transactions = transactions.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  return (
    <div className="new_transaction">
      <h3>Transactions</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          return (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              delTransaction={(id) => delTransaction(id)}
            />
          );
        })}
      </ul>
    </div>
  );
}
