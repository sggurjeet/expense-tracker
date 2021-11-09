import React from "react";
import { connect } from "react-redux";
import { addTransaction, delTransaction } from "../redux/actions";
import TransactionsList from "../components/TransactionsList";
// import DateDropdown from "../components/DateDropdown";
// import DropDown from "../UI/DropDown";
import AddTransactions from "../components/AddTransactions";
function Expense({ transactions, addTransaction, delTransaction }) {
  return (
    <div className="center-block">
      <h1>ALL EXPENSES DISPLAYED HERE</h1>
      {/* <DateDropdown /> */}

      <AddTransactions
        addTransaction={(transaction) => addTransaction(transaction)}
        id={transactions[0] ? transactions[0].id + 1 : 1}
      />
      <TransactionsList
        transactions={transactions}
        delTransaction={(id) => delTransaction(id)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
