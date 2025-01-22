import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import bg from "./usinglaptop.png.png"

const ListingPage = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [slots, setSlots] = useState(""); 
  const [cost, setCost] = useState(""); 
  const [selectedDays, setSelectedDays] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleCostChange = (event) => {
    setCost(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSlotsChange = (event) => {
    setSlots(event.target.value);
  }

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  }

  const handleDaysChange = (day) => {
    const isSelected = selectedDays.includes(day);
    if (isSelected) {
      setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate a delay for submission process
    setTimeout(() => {
      // Reset form fields and state after submission
      setName("");
      setLocation("");
      setMobile("");
      setEmail("");
      setSlots("");
      setCost("");
      setSelectedDays([]);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 3000); // 3 seconds delay

    // You can perform any action with the form data here, such as sending it to a server
    console.log("Name:", name);
    console.log("Location:", location);
    console.log("Mobile:", mobile);
    console.log("Selected Days:", selectedDays);
  }

  const locations = ["Kakinada", "Hyderabad", "Vijayawada", "Rajahmundry"];

  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="h-full w-screen relative" style={style}>
      <div className='container mx-auto w-screen backdrop-blur-sm flex justify-center items-center'>
        <div className='max-w-md bg-white bg-opacity-85 p-10  m-10'>
          <h1 className='font-bold text-3xl text-center mb-4'>Share Your Location</h1>
          {submitted ? (
            <div>
            <p className="text-center text-orange-500 text-3xl font-bold mb-4 capitalize">your listing is under verification. We will get back to you soon!</p>
            <img src='https://th.bing.com/th/id/OIP.8BTlGwpEtpLO62kOW9y0CQHaEx?rs=1&pid=ImgDetMain' height={400} width={400}/>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Your Name:</label>
          <input 
            id="nameInput"
            type="text"
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500"
            value={name} 
            onChange={handleNameChange} 
            placeholder="Enter your name" 
            required
          />
        </div>
       
        <div className="mb-4">
          <label  className="block mb-2">Your Mobile Number:</label>
          <input 
            id="mobileInput"
            type="tel"
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500"
            value={mobile} 
            onChange={handleMobileChange} 
            placeholder="Enter your mobile number" 
            required
          />
        </div>
        <div className='mb-2'>
          <label  className="block mb-2">Your Email address:</label>
          <input 
            id="emailInput"
            type="text"
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500"
            value={email} 
            onChange={handleEmailChange} 
            placeholder="Enter your email address" 
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="locationInput" className="block mb-2">Your Location:</label>
          <Dropdown
            heading="Choose your city"
            elements={locations}
            onChange={(selectedLocation) => setLocation(selectedLocation)}
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Number of available parking slots:</label>
          <input 
            id="slotsInput"
            type="text"
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500"
            value={slots} 
            onChange={handleSlotsChange} 
            placeholder="Enter Number of available slots" 
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Select Available Days:</label>
          <div className="flex flex-wrap">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
              <div key={index} className="m-2">
                <input
                  type="checkbox"
                  id={day}
                  checked={selectedDays.includes(day)}
                  onChange={() => handleDaysChange(day)}
                  className="mr-2"
                />
                <label htmlFor={day}>{day}</label>
              </div>
            ))}
          </div>
          <div className='mb-4'>
          <label className='block mb-2'>Enter Price <span className='text-gray-700'>(*per hour)</span>:</label>
          <input 
            id="costInput"
            type="text"
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-orange-500"
            value={cost} 
            onChange={handleCostChange} 
            placeholder="Enter the cost per hour" 
            required
          />
        </div>
        </div>
        <button type="submit" className="block w-full bg-orange-500 text-white font-bold py-2 px-4 mt-4 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
          Submit
        </button>
      </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListingPage;
