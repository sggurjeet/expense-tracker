import React from "react";
import "../App.css";

function DropDown(props) {
  // const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const selected = e.target.value;
    // setCategory(selected);
    props.onSelectedChange(selected);
    // console.log(selected);
  };
  return (
    <div className="container p-5">
      <label>Choose a category</label>
      <select className="custom-select" onChange={handleChange}>
        <option disabled value="-1" selected>
          Select an expense category
        </option>
        <option value="Shopping">Shopping</option>
        <option value="Food">Food</option>
        <option value="Groceries">Groceries</option>
        <option value="Fuel">Fuel</option>
        <option value="Telephone">Telephone</option>
        <option value="Others">Others</option>
      </select>
      {/* <div className="output">{category}</div> */}
    </div>
  );
}

export default DropDown;
