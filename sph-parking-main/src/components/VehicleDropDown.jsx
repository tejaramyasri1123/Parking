import React, { useState } from "react";

const VehicleDropDown = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    props.onSelect(selectedValue);
  };

  return (
    <div>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
      >
        <option value="">Select a Vehicle Type</option>
        <option value="2 wheeler">2 wheeler</option>
        <option value="4 wheeler">4 wheeler</option>
        
      </select>
      {selectedOption && (
        <p className="mt-2">Selected option: {selectedOption}</p>
      )}
    </div>
  );
};

export default VehicleDropDown;
