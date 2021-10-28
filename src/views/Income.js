import React from "react";
import DateDropdown from "../components/DateDropdown";

function Income() {
  return (
    <div className="income">
      <h1>ALL INCOME SOURCES ARE DISPLAYED HERE </h1>
      {/* Dropdown for type of income */}
      <div className="btn-group">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Income Source
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>Freelance</li>
            <li>Salary</li>
            <li>Others</li>
          </ul>
        </div>
        {/* Dropdown for Month */}
        <DateDropdown />
      </div>
    </div>
  );
}

export default Income;
