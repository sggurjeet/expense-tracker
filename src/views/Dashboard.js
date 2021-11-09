import React from "react";
import { connect } from "react-redux";
import Balance from "../components/Balance";
// import AddTransactions from "../components/AddTransactions";
import { addTransaction, delTransaction } from "../redux/actions";
// import TransactionsList from "../components/TransactionsList";

function Dashboard({ transactions }) {
  return (
    <>
      <div className="container">
        <Balance transactions={transactions} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  delTransaction: (id) => dispatch(delTransaction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

// function Dashboard() {
//   return (
//     <div className="dashboard">
//       <h2>Everything is displayed here</h2>
//       <Balance />
//       <br />
//       <br />
//       {/* Dropdown Menu */}
//       <div className="dashboard">
//         <div className="dropdown">
//           <button
//             className="btn btn-secondary dropdown-toggle"
//             type="button"
//             id="dropdownMenuButton1"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             Menu
//           </button>
//           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//             <li>Income</li>
//             <li>Expense</li>
//           </ul>
//         </div>
//       </div>
//       <br />
//       <br />

//       {/* Input Field to be available when either expense or income is clicked from category */}
//       <div className="dashboard">
//         <input type="text" placeholder="Enter Your Expense" />
//         <br />
//         <br />
//         <button type="submit" className="btn btn-primary mb-3">
//           ADD
//         </button>
//       </div>
//     </div>
//   );
// }
