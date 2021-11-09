import React from "react";
import { connect } from "react-redux";
import Balance from "../components/Balance";
import AddTransactions from "../components/AddTransactions";
import { addTransaction, delTransaction } from "../redux/actions";
import TransactionsList from "../components/TransactionsList";
import IncomeExpense from "../components/IncomeExpense";

function Main({ transactions, addTransaction, delTransaction }) {
  return (
    <div className="container">
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <TransactionsList
        transactions={transactions}
        delTransaction={(id) => delTransaction(id)}
      />
      <AddTransactions
        addTransaction={(transaction) => addTransaction(transaction)}
        id={transactions[0] ? transactions[0].id + 1 : 1}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  delTransaction: (id) => dispatch(delTransaction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
