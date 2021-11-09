import React from "react";
import DateDropdown from "../components/DateDropdown";

function Income() {
  const monthoption = [
    { name: "Jan" },
    { name: "Feb" },
    { name: "Mar" },
    { name: "Apr" },
    { name: "May" },
    { name: "Jun" },
    { name: "Jul" },
    { name: "Aug" },
    { name: "Sep" },
    { name: "Oct" },
    { name: "Nov" },
    { name: "Dec" },
  ];
  const yearoption = [
    { name: "2021" },
    { name: "2020" },
    { name: "2019" },
    { name: "2018" },
    { name: "2017" },
  ];
  return (
    <div className="income">
      <h1>ALL INCOME SOURCES ARE DISPLAYED HERE </h1>
      {/* Dropdown for Month */}
      <DateDropdown options={monthoption} />
      <DateDropdown options={yearoption} />
    </div>
  );
}

export default Income;
