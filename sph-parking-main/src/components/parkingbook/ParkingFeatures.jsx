import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import Cards from "../Cards";

const Listingsfeatures = () => {
  return (
    <div className="mt-[5rem] mx-[7rem]">
      <h1 className="font-bold text-3xl">How Booking works?</h1>
      <div className="container grid grid-cols-3 space-x-4 mt-[3rem] ">
        <Cards
          icon={<FaLocationDot />}
          heading="Select a location"
          altp="Search for your desired location with specified dates and time"
        />
        <Cards
          icon={<FaMoneyBill />}
          heading="Book"
          altp="Pre-book the perfect parking spot & Pay for selected hours using convenient payment options."
        />
        <Cards
          icon={<FaParking/>}
          heading="Park"
          altp="Navigate to your parking spot, Park your vehicle and enjoy stress free journey."
        />
      </div>
    </div>
  );
};

export default Listingsfeatures;
