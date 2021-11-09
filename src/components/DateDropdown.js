import React, { useState } from "react";

function DateDropdown(props) {
  const [selectedYear, setSelectedYear] = useState("");
  let option_id = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let selectedOptionId = 0;

  const handleChange = (e) => {
    const selected = e.target.value;
    setSelectedYear(selected);

    console.log(selected);
  };
  return (
    <div className="container p-5">
      {/* <label>Choose an Year</label> */}
      <select defaultValue={selectedOptionId} onChange={handleChange}>
        {option_id.map((id) => (
          <option key={id} value={id}>
            {props.options[id].name}
          </option>
        ))}

        {/* <option value="DEFAULT">Select a year</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option> */}
      </select>
      <div className="output">{selectedYear}</div>
    </div>
  );
}

export default DateDropdown;
