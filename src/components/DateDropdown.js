import React from "react";

function DateDropdown() {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Month
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>January</li>
          <li>February</li>
          <li>March</li>
          <li>April</li>
          <li>May</li>
          <li>June</li>
          <li>July</li>
          <li>August</li>
          <li>September</li>
          <li>October</li>
          <li>November</li>
          <li>December</li>
        </ul>
      </div>
    </div>
  );
}

export default DateDropdown;
