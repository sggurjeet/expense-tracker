import React, { useState } from "react";

function DateDropdown(props) {
  const [selectedYear, setSelectedYear] = useState("");

  const handleChange = (e) => {
    const selected = e.target.value;
    setSelectedYear(selected);

    console.log(selected);
  };
  return (
    <div className="container p-5">
      {/* <label>Choose an Year</label> */}
      <select className="custom-select" onChange={handleChange}>
        <option defaultValue>Select a year</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
      </select>
      <div className="output">{selectedYear}</div>
    </div>
  );
}

export default DateDropdown;
