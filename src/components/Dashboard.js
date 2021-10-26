import React from "react";

function Dashboard() {
  return (
    <div>
      <h1>Everything is dispalyed here</h1>
      <br />
      <br />
      {/* Dropdown Menu */}
      <div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>Income</li>
            <li>Expense</li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      {/* Input Field to be available when either expense or income is clicked from category */}
      <div>
        <input type="text" placeholder="Enter Your Expense" />
        <br />
        <br />
        <button type="submit" className="btn btn-primary mb-3">
          ADD
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
