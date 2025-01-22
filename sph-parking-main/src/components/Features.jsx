import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { LuAlarmClockOff } from "react-icons/lu";
import { FaCcAmazonPay } from "react-icons/fa";
const Features = () => {
  return (
    <div className="container">
      <h1 className="text-5xl text-center font-bold">How it works</h1>
      <div className="container grid grid-cols-3 space-x-3 mt-[3rem] ml-[150px] ">
        <div className="h-[300px] w-[400px] mx-3 ">
          <FaCarAlt className="text-7xl text-center ml-10 text-orange-500" />

          <h1 className="font-bold text-2xl w-[150px]">
            Explore Near By Parking
          </h1>
          <p className="text lg w-[300px]">
            Search for your nearby parking slots and book it
          </p>
        </div>
        <div className="h-[300px] w-[400px] mx-3 ">
          <LuAlarmClockOff className="text-7xl text-center ml-10 text-orange-500" />

          <h1 className="font-bold text-2xl w-[200px]">
            No more waiting for parking
          </h1>
          <p className="text lg w-[300px]">
            No more time waste for parking simply book it and park it
          </p>
        </div>
        <div className="h-[300px] w-[400px] mx-3 ">
          <FaCcAmazonPay  className="text-7xl text-center ml-10 text-orange-500" />

          <h1 className="font-bold text-2xl w-[150px]">
            Payments made easy
          </h1>
          <p className="text lg w-[300px]">
            Enjoy the safe and secure payment system of the parkvue
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
