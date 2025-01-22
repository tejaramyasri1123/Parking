import React, { useContext, useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import bg from "./newimg.jpg";
import ParkingFeatures from "./ParkingFeatures";
import DateSelector from "../DateSelector";
import { Link } from "react-router-dom";
import Bgimage from "../Bgimage";
import ParkingReceipt from "./ParkingReceipt";
import VehicleDropDown from "../VehicleDropDown";
import UserContext from "../../Context/UserContext";
import ParkingReviews from "./ParkingReview";

const bg2 = "https://wallpaperaccess.com/full/4327493.jpg";

const ParkingPage = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedSubValue, setSelectedSubValue] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [newDate, setNewDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [price, setPrice] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleonClose = () => setShowModal(false);
  const calcPrice = (newD, endD) => {
    if (!newD || !endD) {
      newD = new Date("0000-00-00000:00:00");
      endD = new Date("0000-00-00000:00:00");
    }
    const startTimestamp = newD.getTime();
    const endTimestamp = endD.getTime();
    const differenceMs = Math.abs(endTimestamp - startTimestamp);

    const differenceHours = differenceMs / (1000 * 60 * 60);

    const roundedDifferenceHours = Math.round(differenceHours);
    const hourlyPrice = roundedDifferenceHours * 10;

    setPrice(hourlyPrice);
  };

  const handleSelect = (selectedOption) => {
    setSelectedValue(selectedOption);
    console.log(selectedOption);
  };
  const handleSubSelect = (selectedOption) => {
    setSelectedSubValue(selectedOption);
    console.log(selectedOption);
  };
  const handleVehicle = (selectedOption) => {
    setSelectedVehicle(selectedOption);
    console.log(selectedOption);
  };

  const onNewDate = (selectedNewDate) => {
    setNewDate(selectedNewDate);
    console.log(selectedNewDate);
  };

  const onEndDate = (selectedEndDate) => {
    setEndDate(selectedEndDate);
    console.log(selectedEndDate);
  };

  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const Reviews = ParkingReviews;
  const locations = ["Kakinada", "Hyderabad", "Vijayawada", "Rajahmundry"];
  const vehicleTypes = ["2 Wheeler", "4 Wheeler"];
  let bgcolor = "bg-orange-400";
  if (price) {
    bgcolor = "bg-green-400";
  }
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Save user data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const handleModal = () => {
    setShowModal(true);

    const newUserObject = {
      price: price,
      sublocation: selectedSubValue,
      location: selectedValue,
      vehicle: selectedVehicle,
      start: newDate.toLocaleDateString(),
      end: endDate.toLocaleDateString(),
    };
    const updatedUser = Array.isArray(user) ? user : [];

    setUser([...updatedUser, newUserObject]);

    console.log(user);
  };

  return (
    <div>
      <div className="h-screen w-screen relative " style={style}>
        
        <div className="container flex flex-col pl-[600px] pt-[40px]">
          <h1 className="text-5xl font-bold text-white">Pick A location</h1>
          <p className="text-lg text-gray-400 mt-2">
            Book your slot in minutes
          </p>
          <p className="text-lg text-gray-400">
            Enjoy stress free booking with safe and secure parking
          </p>
          <div className="w-[750px] h-auto pb-10 border bg-orange-100 mt-4 rounded-3xl">
            <div className="h-[60px] bg-white font-bold text-center text-2xl">
              <h1 className="pt-2">Choose your location</h1>
            </div>
            <div className="px-10 mt-5">
              <h1 className="font-bold text-xl my-2">
                Where do you want to park?
              </h1>
              <Dropdown
                location={true}
                heading="Choose your city"
                elements={locations}
                onSelect={handleSelect}
                onSelectSub={handleSubSelect}
              />
              <h1 className="font-bold text-xl my-2">Select vehicle type</h1>
              <VehicleDropDown onSelect={handleVehicle} />
            </div>
            <div>
              <DateSelector
                handleDateChange={onNewDate}
                handleEndDate={onEndDate}
              />
            </div>

            <button
              onClick={() => calcPrice(newDate, endDate)}
              className={`bg-orange-400 w-3/4 h-[50px] text-white font-bold text-lg mx-10 mb-2 mt-3 ${
                newDate && endDate ? "block" : "hidden"
              }`}
            >
              Calculate Price
            </button>
            <button
              onClick={handleModal}
              className={`${bgcolor} w-3/4 h-[50px] text-white font-bold text-lg mx-10 mt-3 mb-2`}
            >
              {price ? `pay ${price}` : "Book Now"}
            </button>
          </div>
        </div>
      </div>
      <div className="mb-[150px]">
        <ParkingFeatures />
      </div>

      <Bgimage
        bg={bg}
        heading="Do You have a free Space?"
        text="Start earning up to 10,000/month from your unused parking space. Whether you’d like to rent your driveway during working hours or an underground space in an apartment block all month long, ParkingPal will help you find your perfect motorist."
        button="Rent Your Space"
      />
      <ParkingReceipt
        paid={price}
        start={newDate}
        end={endDate}
        loc={selectedValue}
        veh={selectedVehicle}
        onClose={handleonClose}
        visible={showModal}
      />
    </div>
  );
};
export default ParkingPage;