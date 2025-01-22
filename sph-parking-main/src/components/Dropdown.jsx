import React, { useState } from "react";

const Dropdown = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedSubOption, setSelectedSubOption] = useState("");
  const [values,setValues] = useState([])
  
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Kakinada"){
      setValues(["srmt mall","Jntuk center","banugudi junction","kalpana center","Kakinada Bus Stop"])
    }
    if (selectedValue === "Hyderabad"){
      setValues(["charminar","Banjara hills","Annapurna studios","Ramoji Film City","Hyderabad Bus Stop"])
    }
    if (selectedValue === "Vijayawada"){
      setValues(["Benz circle","vivekananda park","Gandhi Hill","Rajiv Gandhi Park","Vijayawada Bus Stop"])
    }
    if (selectedValue === "Rajahmundry"){
      setValues(["Market center","Arts college","Rajahmundry Bus stop","kalpana center"])
    }
    

    setSelectedOption(selectedValue);
    props.onSelect(selectedValue);
  };
  const handleSelectsubChange = (event) => {
    const selectedSubValue = event.target.value;
    
    setSelectedSubOption(selectedSubValue);
    props.onSelectSub(selectedSubValue)
  }
  
  return (
    <div className="flex">
      <div className="mr-5">
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
        >
          <option value="">{props.heading}</option>
          {props.elements.map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
        </select>
        {selectedOption && (
          <p className="mt-2">Selected option: {selectedOption}</p>
        )}
      </div>
      {props.location && selectedOption ? (
        <div>
          <select
            value={selectedSubOption}
            onChange={handleSelectsubChange}
            className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
          >
            <option value="">Select sub Area</option>
            {values.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>
          {selectedSubOption && (
          <p className="mt-2">Selected option: {selectedSubOption}</p>
        )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Dropdown;
