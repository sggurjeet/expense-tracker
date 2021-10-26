import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {/* <h2>Home</h2> */}
      <ul className="nav-links">
        <Link to="/" className="link">
          <li>Dashboard</li>
        </Link>
        <Link to="/expense" className="link">
          <li>Expense</li>
        </Link>
        <Link to="/income" className="link">
          <li>Income</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
